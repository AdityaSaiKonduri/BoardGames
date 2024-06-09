import React, { useState } from "react";
import Logo from "../website_logo";

function Navbar({ props }) {
    const [dropdown, setDropDown] = useState(false);
    const toggleDropDown = () => {
        setTimeout(() => {
            setDropDown(!dropdown);
        }, 100);
    };

    return (
        <>
            <nav className="sticky top-0 z-50 flex flex-row text-2xl justify-center p-3 backdrop-blur bg-white/30 dark:bg-gray-900/30">
                <Logo />
                <a href="index.html" className="mr-6 mt-4 ml-6 hover:text-indigo-500 focus:outline-none">2048</a>
                <a href="tictactoe.html" className="mr-6 mt-4 ml-6 hover:text-indigo-500 focus:outline-none">Tic-Tac-Toe</a>
                <div className="relative">
                    <button
                        className="mr-6 mt-4 ml-6 hover:text-indigo-500 focus:outline-none flex flex-row justify-center items-center"
                        onClick={toggleDropDown}
                    >
                        Others
                        {dropdown ? (
                            <svg className="w-5 h-5 ml-1 mr-2 mt-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 ml-1 mr-2 mt-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                            </svg>
                        )}
                    </button>

                    {dropdown && (
                        <div className="absolute left-5 mt-1 w-48 bg-white/30 dark:bg-gray-900 border border-black rounded-lg shadow-lg backdrop-blur z-10">
                            <a href="#" className="text-left p-2 block text-xl no-underline visited:text-white">Link 1</a>
                            <a href="#" className="text-left p-2 block text-xl no-underline visited:text-white">Link 2</a>
                            <a href="#" className="text-left p-2 block text-xl no-underline visited:text-white">Link 3</a>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
