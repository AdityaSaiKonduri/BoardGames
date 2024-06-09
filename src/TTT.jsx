import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function TTT() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = (index) => {
        if (board[index] || calculateWinner(board)) {
            return;
        }
        const newBoard = board.slice();
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    const winner = calculateWinner(board);
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next player: ${isXNext ? "X" : "O"}`;
    }

    return (
        <>
            <Navbar page = "TTT"/>
            <div className="flex flex-col text-red-500 text-5xl items-center justify-center mt-[10px]">
                <h1>Play Tic-Tac-Toe</h1>
                <div className='flex flex-col justify-items items-center'>
                    <div className="grid grid-cols-3 gap-3 bg-gray-950 p-3 rounded-lg mt-10 mb-4
                            md:gap-3 md:mt-10 md:mb-4 md:p-3
                            sm:gap-2 sm:p-2 sm:mt-8 sm:mb-2">
                        {board.map((value, index) => (
                            <div
                                key={index}
                                className="text-red-500 w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px] flex items-center justify-center text-3xl font-bold text-white bg-gray-800 border border-gray-700 cursor-pointer"
                                onClick={() => handleClick(index)}
                            >
                                {value}
                            </div>
                        ))}
                    </div>
                    <button
                        className='text-white text-2xl rounded-md border border-gray-700 text-center shadow-md hover:shadow-black p-3 bg-red-600'
                        onClick={resetGame}>
                        New Game
                    </button>
                    <div className='text-white text-xl mt-4'>{status}</div>
                </div>
            </div>
        </>
    );
}

function calculateWinner(board) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

export default TTT;
