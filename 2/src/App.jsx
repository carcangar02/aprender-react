import { useState } from "react";
import confetti from "canvas-confetti";

import { Square } from "./components/square.jsx";
import { TURNS } from "./constants.js";
import { checkWinner } from "./logic/board.js";
import { WinnerModal } from "./components/WinnerModal.jsx";
function App() {
  //definimos el tablero 
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  //definimos los turnos
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });
  //definimos El estado de ganador
  const [winner, setWinner] = useState(null);
  //comprobamos que termine el juego en caso de empate
  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
  };
  //actualizamos el tablero, siendo el tablero actualizado newBoard
  const updateBoard = (index) => {
    //aqui se actualizan las fichas
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    //aqui se actualizan los turnos
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //se guarda en localStorage para no perder los estados 
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);
    //comprobamos si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);//hay ganador
    } else if (checkEndGame(newBoard)) {
      setWinner(false);//hay empate
    }
  };
  //boton para resetear el estado
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section>
        <footer>
          <button onClick={resetGame}>Resetar el juego</button>
        </footer>
      </section>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <section>
        <WinnerModal resetGame={resetGame} winner={winner} />
      </section>
    </main>
  );
}

export default App;
