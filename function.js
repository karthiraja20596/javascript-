//function
//syntax (){}
function fun(){
    var a=20
    console.log(a);
    let b=30
    b=40
    const c=50
    console.log(b);
    console.log(c);
    const x = 65
    console.log(x);
}
fun();

//types of function 
// function statement declaration --parameters & arguments
function box1(hi){
    console.log(hi)
} 
box1("hello");
//function expression or annonymous function
let str=function box2(hi){
    console.log(hi)
} 
str("hello karthi");
//anonymous function
let sno=function(hi){
    console.log(hi)
} 
sno("hi karthi");
//immediate invoke function expression
(function(iite){
    console.log(iite)
})("expression");
//arrow function
//syntax
//()=>{}
    let aro=(pro)=>{console.log(pro)}
aro("arrow function")
