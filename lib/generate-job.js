const uuid = require('uuid-random')
const { SMS_SERVICE_URL } = require('../config')
const message = 'Vi har ikke mottatt betaling for leie av elev-pc. Fint om du betaler så snart som mulig. Har du spørsmål så ta kontakt. Hilsen din videregående skole i Telemark fylkeskommune.'

module.exports = phoneNumber => {
  return {
    _id: uuid(),
    system: 'avtale-sms',
    url: SMS_SERVICE_URL,
    method: 'POST',
    payload: {
      sender: 'VgsTelemark',
      receivers: [phoneNumber],
      message: message
    }
  }
}
