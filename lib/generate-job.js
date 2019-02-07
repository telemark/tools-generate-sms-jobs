const uuid = require('uuid-random')
const { SMS_SERVICE_URL, SMS_SERVICE_SENDER, SMS_MESSAGE } = require('../config')

module.exports = phoneNumber => {
  return {
    _id: uuid(),
    system: 'avtale-sms',
    url: SMS_SERVICE_URL,
    method: 'POST',
    payload: {
      sender: SMS_SERVICE_SENDER,
      receivers: [phoneNumber],
      message: SMS_MESSAGE
    }
  }
}
