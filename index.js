let person = {
  firstName: 'Todd',
  lastName: 'Albert',
}
// ------- This is the SYNCHRONOUS version -------
function fullName(person) {
  const myFullName = `${person.firstName} ${person.lastName}`
  return myFullName
}
const myName = fullName(person)
console.log(myName)
// -----------------------------------------------

// ------- This is the ASYNCHRONOUS version ------
function fullNameAsync(person, callback) {
  const myFullName = `${person.firstName} ${person.lastName}`
  callback(myFullName)
}
fullNameAsync(person, (myName) => {
  console.log(myName)
  // do other stuff
  // right here...
})
// -----------------------------------------------

