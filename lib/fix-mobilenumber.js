module.exports = phone => {
  phone = phone.toString()
  phone = phone.replace('+47', '47')
  if (phone.length === 8) {
    phone = `47${phone}`
  }
  return phone
}
