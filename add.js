// scope

// function testAvailability(x){
//     console.log("Available here:",x);
// }
// testAvailability("hii");
// console.log("Not avaiable here:",x);


// function testAvailability(){
//     let y="Local variable";
//     console.log("available here",y);
// }
// testAvailability();
// console.log("not available here:",y);


// function testAvailability(){
//     let y="I'll return";
//     console.log("Available here :",y);
//     return y;
// }
// let z=testAvailability();
// console.log("")


// function doingstuff(){
//     if(true){
//         var x="Local";

//     }
//     console.log(x);
// }
// doingstuff();


// function doingstuff(){
//     if(true){
//         console.log(x);
//         var x="local";

//     }
// }
// doingstuff();

// function doingstuff(){
//     if(true){
//         console.log(x);
//         const x="local";

//     }
// }
// doingstuff();


// let globalVar="accesible everywhere";
// console.log("outside function",globalVar);
// function creatingNewSpace(x){
//     console.log("Access to gloval vars inside function ",globalVar);
// }
// creatingNewSpace("some parameter");
// console.log("Still available");

// let x="global";
// function doingstuff(){
//     let x="local";
//     console.log(x);
// }
// doingstuff();
// console.log(x);

// function sayHello(){
//   let you = prompt("What's your name? ");
//   console.log("Hello", you + "!");
// }
// sayHello();


// let varContainingFunction = function(){
//   let varInFunction = "I'm in a function";
//   console.log("hi there!", varInFunction);
// };

// varContainingFunction();


// function tester(para1, para2){
//   return para1 + "" + para2;
// }
// const arg1 = "argument 1";
// const arg2 = "argument 2";
// tester(arg1, arg2);


// function addTwoNumbers(x,y){
//   console.log(x+y);
// }
// addTwoNumbers(5,5);


// function tester(para1,para2){
//   return para1+" "+para2
// };
// const arg1 = "Pal";
// const arg2 = "Bhardwaj";
// console.log(tester(arg1,arg2));
// let x = parseInt(prompt("Enter a number"));
// let y = parseInt(prompt("Enter a number"));
// function addTwoNum(x,y){  
//     console.log(x+y);
// }
// addTwoNum(x,y);


// console.log("This is an argument");
// prompt("Argument here too");


// let arr=[];
// arr.push("argument")


// function addTwoNumbers(x=2, y=3){
//   console.log(x+y) // Default arguments are always trailing arguments
// }
// addTwoNumbers();
// addTwoNumbers(6,6);
// addTwoNumbers(10);
// addTwoNumbers(1,2,3,4);


//Special functions and operators
//Arrow Functions
// (param1, param2) => argument of the function;

// function doingStuff(x){
//   console.log(x);
// }

// let doingArrowStuff = x => console.log(x);
// doingArrowStuff("Great!");


// let addTwoNumbers = (x,y) => console.log(x+y);
// addTwoNumbers(5,3);


// const arr =["Squirrel","Alpaca","Buddy"];
// arr.forEach(e => console.log(e));


// let spread = ["So","much","fun"];
// let message = ["JavaScript","is", ...spread, "and", "very","Powerful"];
// console.log(message)


// function addTwoNumbers(x,y){
//   console.log(x+y);
// }
// let arr=[5,9];
// addTwoNumbers(...arr)


// function addFourNumbers(x,y,z,a){
//   console.log(x+y+z+a)
// }
// let arr=[5,9];
// let arr2=[6,7];
// addFourNumbers(...arr,...arr2)


// function someFunction(param1,...param2){
//   console.log(param1,param2);
// }
// someFunction("Hi","there!","How are you?");


//Returning function values
// let=addTwoNumbers = (x,y) => x+y;
// let resultsArr =[];
// for(let i=0; i<10; i++){
//   let result = addTwoNumbers(i, 2*i);
//   resultsArr.push(result);
// }
// console.log(resultsArr);

// Returning with arrow function
// let addTwoNumbers=(x,y)=>(x+y);
// let result=addTwoNumbers(12,15);
// console.log(result);

// Multiple statements
// let addTwoNumbers=(x,y)=>{
//   console.log("Adding...");
//   return x+y;
// }

// Variable scope in functions

// Local variables
// function testAvailability(x){
//   console.log("Availability here:",x);
//   }
// testAvailability("Hi");
// console.log("Not available here:",x)

// let is a block scope
// function testAvailability(){
//   let y="Local variable";
//   console.log("Available here:",y);
// }
// testAvailability("Hi");
// console.log("Not available here:",y)

// function testAvailability() {
//   let y = "I'll return";
//   console.log("Available here:", y);
//   return y;
// }

// let z = testAvailability();
// console.log("Outside function:", z);


// let and var
// var
// function doingStuff(){
//   if(true){
//     var x ="local";
//   }
//   console.log(x);
// }
// doingStuff();

// let
// function doingStuff(){
//   if(true){
//     let x ="local";
//   }
//   console.log(x);
// }
// doingStuff();

// function doingStuff(){
//   if(true){
//     console.log(x);
//     var x ="local";
//   }
// }
// doingStuff();

// constant
// function doingStuff() {
//   if (true) {
//     const x = "local";
//   }
//   console.log(x);
// }
// doingStuff();

// Global variable
// let globalvar="accesible everywhere!";
// console.log("outside function:",globalvar)
// function creatingnewscope(x){
//    console.log("access to global vars inside the function:",globalvar);
// }
// creatingnewscope("some parameters");
// console.log("still available",globalvar)

// let x = "global";

// function doingStuff() {
//   let x = "local";
//   console.log("Inside function:", x); 
// }

// doingStuff();
// console.log("Outside function:", x);




// IIFE (immediately incoked function expression)
// (function(){ //empty function
//     console.log("IIFE!");
// })();

// (()=>{ // arrow function
//     console.log("run right away");
// })();



//RECURSIVE FUNCTION

// function getRecursive(nr){
//     console.log(nr);
//     getRecursive(--nr);

// }
// getRecursive(3);
// function getRecursive(nr){
    
//     if(nr>0){
//         getRecursive(--nr);
//     }
//     console.log(nr);
// }
// getRecursive(3);


// function logRecursive(nr){
//     console.log("Started fucntion",nr);
//     if(nr>0){
//         logRecursive(nr-1);
//     }else{
//         console.log("Done with recursion");
//     }
//     console.log("Ended fucntion:",nr);
// }
// logRecursive(3);


// the performance of recursion is slightly worse than the performance of regular iteration using a loop .So if this cause a bottleneckj situation that would really slow down your applicatiob then you might want to considdder another approach
 //NESTED  FUNCTION
// function doOuterFunctionStuff(nr){
//     console.log("outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//         console.log(x+7);
//         console.log("I can acces outer variable:",nr);
//     }
// }
// doOuterFunctionStuff(3);

// function doOuterFunctionStuff(nr){

//         doInnerFunctionStuff(nr);
//         function doInnerFunctionStuff(x){
//             let z=10;
//         }
//             console.log("not accesible",z);
//         }

    
//     doOuterFunctionStuff(3);


// function doOuterFunctionStuff(nr){

//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//         let z=10;
//     }
//     }
// doInnerFunctionStuff(3);
  //ANONYMUOS FUNCTION
// function doingStuffAnonymously(){
//     console.log("not so secret though");
// }


// fucntion callbacks
// let functionVariable=function(){
//     console.log("not so secret though");
// }
// function doFlexbleStuff(executeStuff){
//     executeStuff();
//     console.log("Inside doFLexibleStuffFucntion");
// }
// doFlexbleStuff(functionVariable);
//  let youGotThis=function(){
//     console.log("You're doing really well ,keep coding");
//  };
//  setTimeout(youGotThis,1000);// inbuilt function of java script one is setTimeOut()
//  setInterval(youGotThis,4000);
 
//QUIZ
//Q1
// let val =10;
//  function tester(val){
//     val+=10;
//     if(val<100){
//         return tester(val);
//     }
//     return val;
//  }
//  tester(val);
//  console.log(val);
//Q2
// let testFunction=function(){
//     console.log("Hello");
// }();

//Q3
// (function(){
//     console.log("Welcome");
// })();

//Q4
// (function(){
//     console.log("Welcome");
// })();

// (function(){
//     let firstname="Laurence";
// })();
// let result=(function(){
//     let firstname="Laurence";
//     return firstname;
// })();
// console.log(result);
// (function(firstname){
//     console.log("My name is "+ firstname);
// })("Laurence");
//Q5 
var addFive1=function addFive1(num){
    return num+2;
};
let addFive2=(num)=>num+2;
console.log(addFive1(14));