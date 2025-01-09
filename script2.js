// function sayHello(name,age){
//     document.write(name + "is" + age + "years old"  );

// }

// function myFunction(g1,g2){
//     return g1/g2
// }
// const value =myFunction(8,2);
// console.log(value);

// ARROW Function******
// function add(a,b){
//     console.log(a+b);
// }
// add(10,20);
// var add2=(a,b)=>{
//     console.log(a+b);
// };
// add(102,20);
// var add3=(a,b)=>console.log(a+b);
// add3(30,20);


// Javascript Arithmetic Operation******
// var a=100;
// var b=15;
// var c=10;
// var linebreak="<br>"

// document.write("a+b-c=");
// result=a+b+c;
// document.write(result);
// document.write(linebreak);
// document.write("a+b=");
// result=a+b;
// document.write(result);
// document.write(linebreak);

// Adding String & Number******

// function myFunction(){

//     var x=5+5;
//     var y="5"+5;
//     var z="Hello"+5;
//     var demoP=document.getElementById("demo");
//     demoP.innerHTML=x+"<br>"+y+"<br>"+z;
// }


// var a= 10;
// var b= 20;
// var linebreak="<br/>";

// document.write("(a==b)=>");
// result=(a==b);
// document.write(result);
// document.write(linebreak);

// document.write("(a<b)=>");
// result=(a<b);
// document.write(result);
// document.write(linebreak);

// document.write("(a>b)=>");
// result=(a>b);
// document.write(result);
// document.write(linebreak);

// document.write("(a!=b)=>");
// result=(a!=b);
// document.write(result);
// document.write(linebreak);

// document.write("(a>=b)=>");
// result=(a>=b);
// document.write(result);
// document.write(linebreak);

// document.write("(a<=b)=>");
// result=(a<=b);
// document.write(result);
// document.write(linebreak);

// function information(firstname,lastname,language){
//     if(arguments.length===3){
//         console.log(firstname)
//         console.log(lastname)
//         console.log(language)
//     }
// }
// information();
// information('divyanshu','rai','shyam');


// function over(){
//     document.getElementById('mytext').style.color="#005";
// }
// function mout(){
//     document.getElementById('mytext').style.color="magneta";

// }

// prompt Dialog Box

// var retVal=prompt("Enter your name:","divyanshu")
// alert("divyanshu:"+retVal);

// var name=prompt("Enter your name","Name");
// document.write("<h2>Hello"+name"</h2>");

// var question="What is 10 +10";

// var answer = 20 ;

// var correct='<img src="right.jpg" height = " 150 " width = "250">';

// var incorrect='<img src="wrong.png" height ="150" prime prime width ="250 ">';

// var response=prompt(question,"0");

// for(count=0;count<3;count++)

// {

// if (response!=answer)

// {

// confirm("Wrong, Press OK for another chance");

// response-prompt(question, "0");

// if(count==1)

// {

// alert("Better luck next time");

// }

// }

// else

// {

// alert("Great!! you are right");

// count = 3 ;

// }

// }

// var output=(response-answer)?correct:incorrect;

// document.write("</BR>");

// document.write(output);

// function redirect(){
//     window.location="https://www.facebook.com";
// }
// document.write("You will be redirected to main page in 10 sec ");
//     setTimeout('redirect()',10000);
 function validateForm(){
    var x=document.forms["myForm"]["fname"].value;
 }
 if(x==null||x=="")
 {
    alert("first name must be filled out");
    return false;
 }
 function validateForm(){
    var y=document.forms["myForm"]["call"].value;
    if(y.length!=10){
        alert("enter the 10 digit mobile number");
        return false;
    }
    if(!y.match(/^[0-9]{10}$/)){
        alert("ONly enter the digit please");
        return false
    }
 }
 function validateForm(){
    var x=document.forms["myForm"]["email"].value;
    var atpos=x.indexOf("@");
    var dotpos=x.lastIndexOf(".")
}