/*stuname="Jessica"
RollNumber=950623104038
stuEmail="jessica@1234.gmail.com"
console.log("student name",stuname)
console.log("Register Number:", RollNumber)
console.log("Student Email:",stuEmail)*/
m1=100
m2=97
m3=93
m4=99
m5=95
/*console.log("The total mark is " ,+(m1+m2+m3+m4+m5))
a=1000
b=++a*/
console.log(m1++)
console.log(++m1)
var m=m3++
var m=m--
var m2=m4++
var m4=--m2
var m5=--m
var m3=++m
console.log(m)
console.log(m1)
console.log(m2)
console.log(m3)
console.log(m4)
console.log(m5)
var m6=100
var m7=(10*10)-2
var m8=(1000-900)
console.log(--m6)
console.log(++m7)
console.log(--m8)

let names = ["jessica", "lisa", "jennie" , "hazeena" , "rose"];
console.log(names[3]);
names.push("jisoo");
console.log(names)
names.pop();
console.log(names);
names.unshift("jisoo");
console.log(names);
names.shift("jisoo");
console.log(names);


function greet(name){
    console.log("Hello "+name+"!");
}
greet("Alice");

let age=18;
if(age>=18){
    console.log("You are eligible for voting");
}

let mark=45;
if(mark>=45){
    console.log("You passed");
}else{
    console.log("you failed!");
}

let person={
    fname:"Ram",
    age:23,
    issudent:false,
}
console.log(person)
console.log(person.fname)

let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
    case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Weekend";
}
console.log(dayName);
