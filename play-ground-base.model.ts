export class PlayGroundBase {
  //field
  groundWidth: number;
  groundHeight: number;
  type: string;

  //constructor
  constructor(groundWidth: number, groundHeight: number, type: string) {
    this.groundWidth = groundWidth;
    this.groundHeight = groundHeight;
    this.type = type;
  }

  //function
  groundInfo(): void {
    console.log('Ground Width :   ' + this.groundWidth);
    console.log('Ground Height  :   ' + this.groundHeight);
    console.log('Ground Type : ' +  this.type);
  }
}