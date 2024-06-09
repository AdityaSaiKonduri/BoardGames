import React from 'react';

const TileCard = ({ value }) => {
    return (
        <div className={`tile tile-${value} bg-gray-800 rounded-md flex justify-center items-center transition-transform duration-300 ease-in-out
                         w-[50px] h-[50px] text-2xl 
                         sm:w-[70px] sm:h-[70px] sm:text-3xl 
                         md:w-[105px] md:h-[105px] md:text-4xl`}>
            {value !== 0 ? value : ''}
        </div>
    );
};

export default TileCard;
