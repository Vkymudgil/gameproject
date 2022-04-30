// Read the data from the board
// Figure out who the current player is
// Create the initial board
// Update the board based on the user click
// Define Winning conditions
// Check for winning condition in each step

window.addEventListener('DOMContentLoaded', ()=>{

  const tiles = Array.from(document.querySelectorAll('.tile'));
  const currentPlayer = document.getElementById("#displayPlayer");
  const reset = document.getElementById('#reset');
  let board = ['', '', '', '', '', '', '', '', ''];
  let cp = 'X';

  const winningConditions = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]                                                                                                
  ];

  const isValid = (tile) => {
      if(tile.innerHTML === 'X' || tile.innerHTML === 'O'){
          return false;
      }
      return true;
  }

  const update = (index) => {
      board[index] = cp;
  }

  const playerChange = () => {
      cp = cp === 'X' ? 'O' : 'X';
      currentPlayer.innerHTML = cp;
  }

  async function handleResult(){
      let roundWon = false;
      for(i=0;i<=7;i++)
      {
          const winCondition = winningConditions[i];
          const v1 = board[winCondition[0]];
          const v2 = board[winCondition[1]];
          const v3 = board[winCondition[2]];
          if(v1==='' || v2==='' || v3==='')
          {
              continue;
          }
          if(v1===v2 && v2===v3)
          {
              roundWon = true;
              break;
          }
      }
      if(roundWon)
      {
          if(cp==='X')
              alert('X won!');
          else
              alert('O won!');
      }
  }

  const userMove = (tile, index) => {
      if(isValid(tile))
      {
          tile.innerHTML = cp;
          update(index);
          handleResult();
          playerChange();
      }
  }

  tiles.forEach((tile, index)=>{
      tile.addEventListener('click', ()=>userMove(tile,index));
  });



});