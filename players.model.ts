export class Players {
  //field
  playerNo: number;
  name: string;
  positions: string;

  //constructor
  constructor(playerNo: number, name: string, positions: string) {
    this.playerNo = playerNo;
    this.name = name;
    this.positions = positions;
  }

  //function
  handGround(): void {
    console.log('Player No :   ' + this.playerNo);
    console.log('Player Name  :   ' + this.name);
    console.log('Player Position  :   ' + this.positions);
  }

  footGround(): void {
    console.log('Player No  :   ' + this.playerNo);
    console.log('Player Name  :   ' + this.name);
    console.log('Player Position   :   ' + this.positions);
  }
}
// player_data(1, 'John', 'Goal kipper');
// player_data(2, 'Mary', 'Diffender');
// player_data(3, 'Alex', 'Diffender');
// player_data(4, 'Mark', 'Diffender/Attker');
// player_data(5, 'mary', 'Attker');
// player_data(6, 'mary', 'Attker');
// player_data(7, 'mary', 'Attker');
