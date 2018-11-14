const uuid = require('uuid-random')
const { SMS_SERVICE_URL } = require('../config')
const message = 'Har du husket å betale leie av elev-pc? Hvis ikke er det fint om du gjør det så snart som mulig. Har du spørsmål så kontakt oss gjerne. Hilsen din videregående skole, Telemark fylkeskommune.'

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
