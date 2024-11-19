/**Extraxt the amount out of this string  */
let a = "Please give Rs 1000"
let amount = a.slice(15);
console.log(amount)
let result = a.match(/\d+/)[0];