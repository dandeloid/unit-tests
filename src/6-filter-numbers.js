export const filterNumbers = (array, largerThan) => {
  
  //return array.filter(whatever => largerThan)

  //let returnLarger = (array, num) => array.filter(largerThan => largerThan > num);
  //return returnLarger()

  const newNumbers = []
  array.forEach(number => {
    if (largerThan >= number) {
      newNumbers.push(number)
    }
  })
  return newNumbers

}
