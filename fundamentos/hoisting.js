// usando var
console.log('a =', a)
var a = 2
console.log('a =', a)

// usando var dentro de uma função
function teste() {
  console.log('a =', a)
  var a = 2
  console.log('a =', a)
}
teste()

// usando let
console.log('a =', a)
var a = 10
console.log('a =', a)