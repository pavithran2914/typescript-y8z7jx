export class BallBase {
  //field
  bSize: number;
  bDynmesh: number;
  type: string;

  //constructor
  constructor(bSize: number, bDynmesh: number, type: string) {
    this.bSize = bSize;
    this.bDynmesh = bDynmesh;
    this.type = type;
  }

  //function
  ballInfo(): void {
    console.log('Ball Size :   ' + this.bSize);
    console.log('Ball Dynmesh  :   ' + this.bDynmesh);
    console.log('Ball Type : ' +  this.type);
  }
}
