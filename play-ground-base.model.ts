export class PlayGroundBase {
  //field
  groundWidth: number;
  groundHeight: number;

  //constructor
  constructor(groundWidth: number, groundHeight: number) {
    this.groundWidth = groundWidth;
    this.groundHeight = groundHeight;
  }

  //function
  handBallGround(): void {
    console.log('Ground Width :   ' + this.groundWidth);
    console.log('Ground Height  :   ' + this.groundHeight);
  }

  footBallGround(): void {
    console.log('Ground Width  :   ' + this.groundWidth);
    console.log('Ground Height  :   ' + this.groundHeight);
  }
}
