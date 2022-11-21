export function validateEmail(rule: any, value: any, callback: any) {
  if (value === '') {
    callback(new Error('请输入电子邮箱'))
  }
  else if (!isEmail(value)) {
    callback(new Error('邮箱格式不正确'))
  }
  else {
    callback()
  }
}

export function validatePhone(rule: any, value: any, callback: any) {
  if (value === '') {
    callback(new Error('请输入电话'))
  }
  else if (!isPhone(value)) {
    callback(new Error('电话号码格式不正确'))
  }
  else {
    callback()
  }
}
