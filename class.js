class room{
    ac(){
        console.log("i need bluestar ac");
        
    }
    color(){
        console.log("blue color");
        
    }
    table(){
        console.log("table iron");
        
    }
}
const output = new room();
output.ac();
output.color();
output.table();


//constructor
class car{

    constructor(brand,price,color){
        this.brand=brand;
        this.price=price;
        this.color=color;

    }
    output(){console.log(`I neeed this ${this.brand} \ni want this price ${this.price}\nthe car was fully coloured by ${this.color}`);
    }
}
const nam = new car("bmw","80lakhs","blue");
nam.output()

let b = 20;
console.log(b);
let a =30;