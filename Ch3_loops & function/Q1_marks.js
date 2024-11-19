/*Write a program to print the marks of a student in an object using for loop 
    obj = {
    harry:"98",rohan:"78",aakash:"90"}
*/
let obj = {
    harry:"98",
    rohan:"78",
    aakash:"90"
}
for (const key in obj) {
    console.log(key+" : "+obj[key])
    }
