//console.log("Azad Singh")

//DATA TYPES IN JS//

//var num1 = 10;
//var num2 = 10.56
//
//var str1 = "this is azad singh"
//var object = {
//    azad: 88,
//    anand: 90,
//    arti: 67
//}
//
//var array = [1, 2, "azad ", 4, 5];
//var und = null;

//OPERATORS
//var a = 10;
//var b = 20;
//
//console.log("The value of a + b is ", a + b)
//console.log("The value of a - b is ", a - b)
//console.log("The value of a * b is ", a * b)
//console.log("The value of a / b is ", a / b)
//
//var c = b;
//c += b;
//
//console.log(c)

var x = 34;
var y = 56;
//
//console.log(x == y);
//console.log(x >= y);
//console.log(x <= y);
//console.log(x != y)

//LOGICAL OPERATOR

//console.log(true && false)
//console.log(true && true)
//console.log(false && false)

//function in JS

function avg(a, b) {
    c = (a + b) / 2;
    return c;
}

//c1 = avg(4, 10)
//c2 = avg(10, 20)

//console.log(c1, c2);

//FOR LOOP

//var arr = [1, 2, 3, 4, 5, 6, 7]

//for (var i = 0; i < arr.length; i++) {
//
//    if (i == 3) {
//        // break;
//        continue;
//    }
//    console.log(arr[i])
//}
//
//arr.forEach(function(element) {
//    console.log(element)
//})

//let j = 0
//while (j < arr.length) {
//   console.log(arr[j]);
//   j++;
//}
//let a = 4;
//
//a = a + 1
//console.log(a)


//ARRAY IN JS

//let myarr = ["Fan", "Pankha", "bartan", "kapde"];
//array methods

//console.log(myarr.length);
//myarr.pop()
//myarr.push("Harry")
//console.log(myarr)
//myarr.shift()

//console.log(myarr)

//const length = console.log(myarr.unshift("Azad"))
//console.log(myarr)

//String Methods in JS

//let mystring = "Azad is a good boy";
//console.log(mystring.indexOf("boy"))
//console.log(mystring.lastIndexOf("boy"))
//console.log(mystring.slice(0, 4))
//let d = mystring.replace("good", "bad")
//console.log(d, mystring)

//Methods of Date
//let myDate = new Date();
//console.log(myDate)
//console.log(myDate.getTime())
//console.log(myDate.getFullYear())
//console.log(myDate.getDay())

//DOM MANIPULATION

//let element = document.getElementById('click')
//console.log(element)
//
//let elem = document.getElementsByClassName("container")
//console.log(elem)
//
//elem[0].style.background = 'yellow';
////elem[1].style.background = 'red';
//elem[1].classList.add("text-access");
//console.log(elem[1].innerHTML);
//console.log(elem[1].innerText);

//let tn = document.getElementsByTagName('div')
//console.log(tn)
//
//createelement = document.createElement('p');
//createelement.innerText = "This is a created paragraph";
//tn[1].appendChild(createelement)
//
//createelement2 = document.createElement('div')

//selecting using query


//Events in JS ///

//function clicked() {
//  console.log('The Button was clicked')
//}
//
//window.onload = function() {
//    console.log('The document was loaded')
//}

//firstcontainer.addEventListener('click', function() {
//    console.log('Clicked on container')
//})
//
//firstcontainer.addEventListener('mouseover', function() {
//    console.log('Moused on Container');
//})
//
//firstcontainer.addEventListener('mouseout', function() {
//            console.log('Mouse out of Container');
//        })

//firstcontainer.addEventListener('mouseup', function() {
//    console.log('Mouse up  on container')
//})
//
//firstcontainer.addEventListener('mousedown', function() {
//    console.log('Mouse down on  container')
//})

//settime and setinterval//
//Arrow Functions

//function summ(a, b) {
//    return a + b;
//}

//summ = (a, b) => {
//    return a + b;
//}
//
//logkaro = () => {
//    document.querySelectorAll('.container')[1].innerHTML = "<b>Set Time Interval Fired</b>"
//    console.log("I am Log")
//}
//
//setInterval(logkaro, 2000)