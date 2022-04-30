window.addEventListener('DOMContentLoaded', ()=> {
  const tiles = Array.from(document.querySelectorAll('.tile'));
  const currentPlayer = document.querySelector('#displayPlayer');
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
    if(tile.innerHTML === 'X' || tile.innerHTML === 'O') {
      return false;
    } else {
      return true;
    }
  }

  const update = (index) =>{
    board[index] = cp;
  }

  const playerChange = () =>{
    cp = cp === 'X' ? 'O' : 'X';
    currentPlayer.innerHTML = cp;
  }

  async function handleResult(){
    let roundWon = false;
    for(i=0; i<=7; i++){
      const winCondition = winningConditions[i];
      const v1 = board[winCondition[0]];
      const v2 = board[winCondition[1]];
      const v3 = board[winCondition[2]];
      if(v1 ==='' || v2 === '' || v3=== ''){
        continue;
      }
      if(v1 === v2 && v2 === v3){
        roundWon = true;
        break;
      }
    }
    

    if(roundWon){
      let winner = '';
      if(cp === 'X'){
        // winner = 'X';
        alert('X Won!!');
      } else {
        // winner = 'O';
        alert('O Won!!');
      }
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

  tiles.forEach((tile,index) => {
    tile.addEventListener('click', () => userMove(tile,index));
  })
});