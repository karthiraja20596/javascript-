//settimeout
//syntax
//settimeout(()=>{},timeout);

function box1 (){
    setTimeout(() => {
        console.log("loading")
    }, 3000);
}
function box2 (){
    setTimeout(() => {
        console.log("loading successful")
    }, 1000);
}
box1();
box2();