export class BallBase {


  // class Car { 
    //field 
    engine:string; 
    
    //constructor 
    constructor(engine:string) { 
       this.engine = engine 
    }  
    
    //function 
    disp():void { 
       console.log("Function displays Engine is  :   "+this.engine) 
    } 
//  } 
 


  ball() {
    var ball = {
      bSize: 8,
      bDynmesh: 15,
    };
    console.log(ball.bSize);
    console.log(ball.bDynmesh);
  }
}

let obj = new BallBase("XXSY1")
 
//access the field 
console.log("Reading attribute value Engine as :  "+obj.engine)  

//access the function
obj.disp()
 