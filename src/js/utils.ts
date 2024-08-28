/**
 * Sample:
 * formatDate(new Date(timestamp), '%H:%m:%s');
 */
export function dateFormator(date: Date, fmt?: any) {
  function pad(value: number) {
    return value.toString().length < 2 ? `0${value}` : value
  }
  return fmt.replace(/%([a-zA-Z])/g, (_: any, fmtCode: any): any => {
    switch (fmtCode) {
      case 'Y':
        return date.getFullYear()
      case 'M':
        return pad(date.getMonth() + 1)
      case 'd':
        return pad(date.getDate())
      case 'H':
        return pad(date.getHours())
      case 'm':
        return pad(date.getMinutes())
      case 's':
        return pad(date.getSeconds())
      default:
        throw new Error(`Unsupported format code: ${fmtCode}`)
    }
  })
}

export function formatTimeInterval(starTime: number, endTime: number, format = '%Y-%M-%d') {
  const sDate = new Date(starTime)
  const eDate = new Date(endTime)
  const step = (endTime - starTime) / 1000
  const oneHourInSeconds = 3600
  const oneDayInSeconds = oneHourInSeconds * 24
  if (step < oneHourInSeconds) {
    // 差距小于1小时
    return '刚刚'
  } else if (step < oneDayInSeconds) {
    // 差距小于24小时
    return Math.floor(step / oneHourInSeconds) + '小时前'
  } else {
    return dateFormator(sDate, format)
  }
}

// 获取url中的参数
export const getUrlParam = (name: string, search?: string | undefined) => {
  if (!name) {
    return ''
  }
  name = name.replace(/(?=[\\^$*+?.():|{}])/, '\\')
  const reg = new RegExp('(?:[?&]|^)' + name + '=([^?&#]*)', 'i')
  const match = search?.match(reg)
  return !match ? '' : decodeURIComponent(match[1])
}

// 格式化数字，只到W
export const formatNumber = (number: number, decimal: number = 1) => {
  if (isNaN(number)) {
    return 0
  }
  if (number >= 10000) {
    return (number / 10000).toFixed(decimal) + '万'
  } else {
    return number
  }
}

/**
 * 截取字符串，尾数添加省略号，
 * truncate('abcdef', 3, true) // 'abc...'
 * truncate('abc', 3, true) // 'abc'
 */
export const truncate = (str: string, num: number, isAdd?: boolean) => {
  if (typeof str !== 'string') {
    return ''
  }
  if (str.length <= num) {
    return str
  }
  return isAdd ? str.substr(0, num) + '...' : str.substr(0, num)
}

// 防抖
export const debounce = (fn: Function, time: number) => {
  let timeout: any = null
  return () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this)
    }, time)
  }
}

// 节流
export const throttle = (func: Function, delay = 60) => {
  console.log(func)
  let lock = false
  return (...args: any) => {
    if (lock) return
    func(...args)
    lock = true
    setTimeout(() => {
      lock = false
    }, delay)
  }
}

export const replaceProtocol = (str: string) => {
  return str ? str.replace(/http(s)?:/g, '') : str
}

export const trim = (str: string) => {
  return str ? str.replace(/\s+/g, '') : str
}
