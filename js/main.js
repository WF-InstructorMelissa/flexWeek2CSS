// var = is a way to declare something that you are gong to use later
// console.log() = gives us a way to print results to the terminal or console so we can see that the function or operations are working or not working
// return = This is used to print things to the web page in most cases or allow the results to be used somewhere else - NOT VISUAL


var array = ['Melissa', 'Brandon', 'Matthew'] // Giving this array of name the name of array so I can call this specific set of information later
var num = 24
var altNum = 100

// console.log(num)
// console.log(altNum)
// console.log(array)

var x = 100
var y = 22
var d = 1000
var e = 2000

function add(a, b) { // a, b are parameters needed to make the function work
    var z = a + b // The instructions z is going to = what ever we tell a to be plus what ever we tell b to be
    console.log("the results", z)
}
// add(x,y)
// add(d,e)
// add(20, 40)

var w = ''

for(i=0; i< 3; i++) { // for i starts at 0 goes until it is no longer less than 3 and increases by 1 number each loop
    console.log("value of i", i)
    w = i
}
console.log(w)

// var game = true
// while (game == false) {
//     console.log("true")
//     var z = 7
//     if(z == 7) {
//         game == false
//     } else {
//         console.log(z)
//     }
// }