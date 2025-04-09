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

let x="global";
function doingstuff(){
    let x="local";
    console.log(x);
}
doingstuff();
console.log(x);