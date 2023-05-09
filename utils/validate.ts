export function isEmail(email: string) {
  const emailReg = /^[A-Za-z0-9\u4E00-\u9FA5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  return emailReg.test(email)
}

export function isPhone(phone: string) {
  // 手机
  const mobileReg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
  // 座机
  const telReg = /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/
  return mobileReg.test(phone) || telReg.test(phone)
}
