//push 
let a=[10,20,30,40,50]
a.push(60)
console.log(a)

//pop
let b=[10,20,30,40,50]
b.pop()
console.log(b)

//shift
let c=[10,20,30,40,50]
c.shift()
console.log(c);

//unshift
let d=[10,20,30,40,50]
d.unshift(5)
console.log(d);

//splice
let days=["sun","mon","tue","thurs","fri","sat"]
days.splice(3,0,"wed")
console.log(days);
//0 used for forwad ihe index value
let day=["sun","mon","tue","thurs","fri","sat"]
day.splice(3,1,"wed")
console.log(day); 
// 1--> replace the index value

//sort 
let ab = ["ball","apple","cat"]
console.log(ab.sort());

//reverse
let num="karthick"
console.log(num.split("").reverse().join(""));
