if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

module.exports = {
  DATA_DIRECTORY_PATH: process.env.DATA_DIRECTORY_PATH || 'test/directories/data',
  DONE_DIRECTORY_PATH: process.env.DONE_DIRECTORY_PATH || 'test/directories/done',
  JOBS_DIRECTORY_PATH: process.env.JOBS_DIRECTORY_PATH || 'test/directories/jobs',
  QUEUE_DIRECTORY_PATH: process.env.QUEUE_DIRECTORY_PATH || 'test/directories/queue',
  KOR_JWT_SECRET: process.env.KOR_JWT_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  KOR_SERVICE_URL: process.env.KOR_SERVICE_URL || 'https://kor.tjeneste.win/personinfo',
  SMS_SERVICE_URL: process.env.SMS_SERVICE_URL || 'https://sms.service.io/api'
}
