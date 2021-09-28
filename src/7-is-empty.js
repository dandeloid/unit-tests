export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    if (stringArrayOrObject === ''){
      return true
    }
    else if (stringArrayOrObject !== ''){
      return false
    }
  }
}

  

