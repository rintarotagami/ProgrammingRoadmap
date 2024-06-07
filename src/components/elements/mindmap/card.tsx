import React from 'react';

const Card = ({ cardId, cardName }: { cardId: string, cardName: string }) => {
    return (
        <div id={`card-${cardId}`} className="w-1/2 h-1/2 bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r from-blue-600 to-blue-800 p-4 mb-4 flex justify-between items-center rounded-lg shadow-md">
            <div className="text-white font-bold" >{cardName}</div>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-700" />
        </div>
    );
};

export default Card;
