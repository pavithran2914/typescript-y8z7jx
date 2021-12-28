export class BallBase {
  //field
  bSize: number;
  bDynmesh: number;

  //constructor
  constructor(bSize: number, bDynmesh: number) {
    this.bSize = bSize;
    this.bDynmesh = bDynmesh;
  }

  //function
  handBall(): void {
    console.log('Ball Size :   ' + this.bSize);
    console.log('Ball Dynmesh  :   ' + this.bDynmesh);
  }

  footBall(): void {
    console.log('Ball Size :   ' + this.bSize);
    console.log('Ball Dynmesh  :   ' + this.bDynmesh);
  }
}

// let obj = new BallBase('XXSY1', 'psjdfvkj');

// //access the field
// console.log('Reading attribute value Engine as :  ' + obj.engine);

// //access the function
// obj.disp();
