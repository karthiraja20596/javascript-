function paymentinitiate(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const start=true;
            if(start){
                resolve("paying the amount")
            }
            else{
                reject("not paying the amount")
            }
            
        }, 3000);
    })
}
function paymentstatus(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const middle=false;
            if(middle){
                resolve("payment successful")
            }
            else{
                reject("payment failed")
            }
            
        }, 5000);
    })
}
function finaloutput(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          const end=true;
            if(end){
                resolve("blue tick")
            }
            else{
                reject("failed")
            }
            
        }, 1000);
    })
}
paymentinitiate()
.then(val=>{console.log(val);return paymentstatus()})
.catch(val=>{console.log(val);return finaloutput()})
.then(val=>{console.log(val)
})
// try //catch
async function js(){
    try{
        const a=await paymentinitiate();
        console.log(a);
        const b=await paymentstatus();
        console.log(b);
        const c=await finaloutput();
        console.log(c);

        
    }catch(e){
        console.log(e);
        
    }
}
js();
