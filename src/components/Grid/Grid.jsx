import React, { useEffect, useState } from 'react';
import TileCard from '../TileCard/TileCard';

const Grid = () => {
    const numRows = 4;
    const numCols = 4;
    const initialGrid = [
        [0, 0, 0, 2],
        [0, 0, 0, 0],
        [0, 2, 0, 0],
        [0, 0, 0, 0]
    ];

    const [grid, setGrid] = useState(initialGrid);

    useEffect(() => {
        const handleKeyPress = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    moveLeft();
                    break;
                case "ArrowRight":
                    moveRight();
                    break;
                case "ArrowUp":
                    moveUp();
                    break;
                case "ArrowDown":
                    moveDown();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [grid]);

    function isEqual(arr1, arr2) {
        return arr1.every((row, i) => row.every((val, j) => val === arr2[i][j]));
    }

    function mergeTiles(row) {
        for (let i = 0; i < row.length - 1; i++) {
            if (row[i] === row[i + 1] && row[i] !== 0) {
                row[i] *= 2;
                row.splice(i + 1, 1);
                row.push(0);
            }
        }
        return row;
    }

    function move(row) {
        let newRow = row.filter(tile => tile !== 0);
        newRow = mergeTiles(newRow);
        newRow = newRow.concat(Array(numCols - newRow.length).fill(0));
        return newRow;
    }

    function addRandomTwo(grid) {
        const emptyCells = [];
        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                if (grid[row][col] === 0) {
                    emptyCells.push([row, col]);
                }
            }
        }
        if (emptyCells.length > 0) {
            const [randomRow, randomCol] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            grid[randomRow][randomCol] = 2;
        }
    }

    function moveLeft() {
        let initialGrid = grid.map(row => move(row));

        if (!isEqual(initialGrid, grid)) {
            addRandomTwo(initialGrid);
            setGrid(initialGrid);
        }
    }

    function moveRight() {
        let initialGrid = grid.map(row => move(row.reverse()).reverse());

        if (!isEqual(initialGrid, grid)) {
            addRandomTwo(initialGrid);
            setGrid(initialGrid);
        }
    }

    function moveUp() {
        let initialGrid = transpose(grid).map(row => move(row));
        initialGrid = transpose(initialGrid);

        if (!isEqual(initialGrid, grid)) {
            addRandomTwo(initialGrid);
            setGrid(initialGrid);
        }
    }

    function moveDown() {
        let initialGrid = transpose(grid).map(row => move(row.reverse()).reverse());
        initialGrid = transpose(initialGrid);

        if (!isEqual(initialGrid, grid)) {
            addRandomTwo(initialGrid);
            setGrid(initialGrid);
        }
    }

    function transpose(matrix) {
        return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
    }

    function resetGrid() {
        setGrid(initialGrid);
    }

    return (
        <div className='flex flex-col justify-items items-center'>
            <div className="grid grid-cols-4 gap-3 bg-gray-950 p-3 rounded-lg mt-10 mb-4
                            md:gap-3 md:mt-10 md:mb-4 md:p-3
                            sm:gap-2 sm:p-2 sm:mt-8 sm:mb-2">
                {grid.map((row, rowIndex) => (
                    row.map((cell, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className="text-center font-bold rounded-md flex items-center justify-center border border-black
                                       text-2xl sm:text-3xl md:text-4xl 
                                       w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[105px] md:h-[105px]">
                            <TileCard value={cell} />
                        </div>
                    ))
                ))}
            </div>
            <button
                className='text-white text-2xl rounded-md border border-gray-700 text-center shadow-md hover:shadow-black p-3 bg-sky-600'
                onClick={resetGrid}>
                New Game
            </button>
            <div className="p-3 border border-slate-400 rounded-lg m-4 text-center text-white text-xl w-[600px] h-[300px] overflow-y-scroll overflow-x-hidden">
                <h2 className="text-xl font-bold">How to Play</h2>
                <p className="mt-2">
                    Use your arrow keys to move the tiles. When two tiles with the same number touch, they merge into one! The goal is to get to the 2048 tile! 2048 is an easy and fun puzzle game. Even if you don't love numbers you will love this game. It is played on a 4x4 grid using the arrows or W, A, S, D keys alternatively. Every time you press a key - all tiles slide. Tiles with the same value that bump into one-another are merged. Although there might be an optimal strategy to play, there is always some level of chance. If you beat the game and would like to master it, try to finish with a smaller score. That would mean that you finished with less moves. This game is mobile compatible and you can play it on any device - iPhone, iPad or any other smartphone.
                </p>
            </div>
            {/* <div className='resizable border border-white m-2 p-2 rounded-md'>
                This is a resizable div element
            </div> */}
        </div>
    );
};

export default Grid;
