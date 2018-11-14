(async () => {
  const csv = require('csvtojson')
  const { readdir } = require('fs').promises
  const saveFile = require('./lib/save-file')
  const moveFile = require('./lib/move-file')
  const getKorData = require('./lib/get-kor-data')
  const { DONE_DIRECTORY_PATH, JOBS_DIRECTORY_PATH, QUEUE_DIRECTORY_PATH } = require('./config')
  const logger = require('./lib/logger')
  const fixFnr = require('./lib/fix-fnr')
  const fixMobilenumber = require('./lib/fix-mobilenumber')
  const generateJob = require('./lib/generate-job')
  const allFiles = await readdir(QUEUE_DIRECTORY_PATH)
  const files = allFiles.filter(file => file.includes('.csv'))
  logger('info', ['got', files.length, 'files'])
  if (files.length > 0) {
    const fileName = files[0]
    logger('info', ['index', fileName])
    const dataFilePath = `${QUEUE_DIRECTORY_PATH}/${fileName}`
    const data = await csv().fromFile(dataFilePath)
    logger('info', ['index', 'data', data.length])
    const fnrs = data
      .map(line => line.fnr)
      .map(fixFnr)
    logger('info', ['index', 'fnrs', fnrs.length])
    const korData = await getKorData(fnrs)
    logger('info', ['index', 'korData', korData.length])
    const validKors = korData.filter(person => person.reservasjon === 'NEI' && person.status === 'AKTIV' && person.kontaktinformasjon.mobiltelefonnummer)
    logger('info', ['index', 'validKors', validKors.length])
    let phonenumbers = validKors
      .map(person => person.kontaktinformasjon.mobiltelefonnummer)
      .map(fixMobilenumber)
    logger('info', ['index', 'phonenumbers', phonenumbers.length])
    const next = async () => {
      if (phonenumbers.length > 0) {
        logger('info', ['index', fileName])
        const recipient = phonenumbers.pop()
        const data = generateJob(recipient)
        const filePath = `${JOBS_DIRECTORY_PATH}/${data._id}.json`
        await saveFile({ filePath: filePath, data: data })
        await next()
      } else {
        const fromPath = `${QUEUE_DIRECTORY_PATH}/${fileName}`
        const toPath = `${DONE_DIRECTORY_PATH}/${fileName}`
        await moveFile(fromPath, toPath)
        logger('info', ['index', fileName, 'finished'])
      }
    }
    await next()
  } else {
    logger('info', ['index', 'nothing to do', 'finished'])
  }
})()
