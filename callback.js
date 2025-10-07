//callback
function box1 (callback){
    setTimeout(() => {
        console.log("loading");
        callback()
    }, 3000);
}
function box2 (callback){
    setTimeout(() => {
        console.log("loading successful")
    }, 1000);
}
box1(box2);
//callback hell
function box1 (callback){
    setTimeout(() => {
        console.log("loading");
        callback()
    }, 3000);
}
function box2 (callback){
    setTimeout(() => {
        console.log("loading successful");
        callback()
    }, 1000);

}
function box3 (callback){
    setTimeout(() => {
        console.log("successful");
    
    }, 500);

}

box1(()=>{
    box2(()=>{
        box3(()=>{})
    })
})