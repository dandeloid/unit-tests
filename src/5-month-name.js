const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export const monthName = (monthNumber) => {
  //return months[monthNumber]
  if (1 > monthNumber || monthNumber > 12) {
    return null
  }
  else{
    return months[monthNumber-1]
  }
}
