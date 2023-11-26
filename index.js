// Tic Tac Toe

// Implement a simulated Tic-tac-toe game that is played between two players on a 3 x 3 grid.
 
// You may assume the following rules:
 
// There are two players that play against each other X and O.
// X will always go first.
 
// X and O should play randomly, always making valid moves. 
// After X and O play a move, the board state should be printed out like so.
 
// |X| | |
// | | | |
// | | | |
 
// |X| |O|
// | | | |
// | | | |

// If the game ends, the simulation should stop and print out the result.

// Possible results are: X Wins!, O Wins!, Draw

function game() {
    let board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ]
    let firstPlayer = 'X'
    let secondPlayer = 'O'
    let result = ''
    let turn = firstPlayer
  
    printBoard(board)
    while(result.length === 0) {
      result = makeRandomMove(turn, board)
      if(result) break
      printBoard(board)
      result = checkGameStatus(board, firstPlayer, secondPlayer)
      if(result) break
      if(turn === secondPlayer) {
        turn = firstPlayer
      } else {
        turn = secondPlayer
      }
      console.log('=====================================')
    }
  
    console.log(result)
  }
  
  function checkGameStatus(board, firstPlayer, secondPlayer) {
  
    // check diagonal
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== " " ||
    board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== " ")
    return `${board[1][1]} Wins!`
  
    for(let rowIndex = 0; board.length > rowIndex; rowIndex++) {
      let rowCounter = {}
      let columnCounter = {}
      for(let columnIndex = 0; board.length > columnIndex; columnIndex++) {
  
        // check rowCell
        let rowCell = board[rowIndex][columnIndex]
        if(rowCell !== ' ') {
          rowCounter[rowCell] = rowCounter[rowCell] ? rowCounter[rowCell] + 1 : 1
        }
  
        // check columnCell
        let columnCell = board[columnIndex][rowIndex]
        if(columnCell !== ' ') {
          columnCounter[columnCell] = columnCounter[columnCell] ? columnCounter[columnCell] + 1 : 1
        }
  
        if(rowCounter[firstPlayer] === 3 || columnCounter[firstPlayer] === 3 ) {
          return `${firstPlayer} Wins!`
        }
        if(rowCounter[secondPlayer] === 3 || columnCounter[secondPlayer] === 3 ) {
          return `${secondPlayer} Wins!`
        }
  
      }
  
    }
  
    return ''
  }
  
  function makeRandomMove(player, board){
    let availableCells = []
  
    board.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        if(cell === ' ') {
          availableCells.push({ rowIndex, cellIndex })
        }
      })
    })
  
    if(availableCells.length === 0) return 'Draw'
  
    let randomIndex = Math.floor(Math.random() * availableCells.length)
    let randomSelectedCell = availableCells[randomIndex]
    board[randomSelectedCell.rowIndex][randomSelectedCell.cellIndex] = player
    return ''
  }
  
  function printBoard(board) {
    board.forEach(row => {
      process.stdout.write('|')
      row.forEach(cell => {
        process.stdout.write(cell)
        process.stdout.write('|')
      })
      process.stdout.write('\n')
    })
    process.stdout.write('\n')
  }
  
  game()