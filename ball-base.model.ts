export class BallBase {
  // class Car {
  //field
  engine: string;
  engine1: string;

  //constructor
  constructor(engine: string, engine1: string) {
    this.engine = engine;
    this.engine1 = engine1;

  }

  //function
  disp(): void {
    console.log('Function displays Engine is  :   ' + this.engine);
    console.log('Function displays Engine is  :   ' + this.engine1);
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

let obj = new BallBase('XXSY1', 'psjdfvkj');

//access the field
console.log('Reading attribute value Engine as :  ' + obj.engine);

//access the function
obj.disp();
