import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../route-animations';

@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.scss'],
  animations:[slideInOutAnimation],
  host:{'[@slideInOutAnimation]': '' }
})
export class MainboardComponent implements OnInit {

// Initialize variable

playerIsnext: boolean;
playBoard: string[];
resultIs: string;
plName: boolean;
gameOver: boolean;
tieGame: string;
winName: boolean;


constructor() { }

// Initialize values

ngOnInit() { this.newGame(); }

newGame() {
  this.playerIsnext = true;
  this.playBoard = Array(9).fill(null);
  this.resultIs = null;
  this.plName = true;
  this.gameOver = false;
  this.tieGame = null;
  this.winName = true;
}

// Get next player, player name and winner

get valueOf() {return this.playerIsnext ? 'X' : 'O'; }
get playerName() {return this.plName ? '1' : '2'; }
get winnerName() {return this.winName ? '1' : '2'; }

// Check the playboard array created and if filled stop the game
// else continue with next player

enterVal(idx: number) {
  if (!this.gameOver) {
  if (!this.playBoard[idx]) {
    this.playBoard.splice(idx, 1, this.valueOf);
    this.playerIsnext = !this.playerIsnext;
    this.plName = !this.plName;
  }
}
  this.resultIs = this.selectWinner();
  this.winName = !this.plName;
}

// Check the game algorithm to get the result
selectWinner() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const line of lines)
  {
    if (this.playBoard[line[0]] === this.playBoard[line[1]] &&
      this.playBoard[line[1]] === this.playBoard[line[2]] &&
      this.playBoard[line[0]] !== null) {
      this.gameOver = true;
      return this.playBoard[line[0]];
    }
  }
//Check for Tie
  let chkTie = 0;
  this.playBoard.forEach((e) => { chkTie += (e !== null ? 1 : 0); });
  if (chkTie === 9) {
      this.gameOver = true;
      this.tieGame = 'tie';
    }
  return null;
}


}
