export class Players {
  //field
  playerNo: number;
  name: string;
  positions: string;
  type: string;

  //constructor
  constructor(playerNo: number, name: string, positions: string, type: string) {
    this.playerNo = playerNo;
    this.name = name;
    this.positions = positions;
    this.type = type;
  }

  //function
  handBallPlayers(): void {
    console.log('Player No :   ' + this.playerNo);
    console.log('Player Name  :   ' + this.name);
    console.log('Player Position  :   ' + this.positions);
    console.log('Player Game : ' +  this.type);
  }
}