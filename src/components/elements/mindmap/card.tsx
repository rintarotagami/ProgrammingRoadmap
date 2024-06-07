import React from 'react';

const Card = ({ cardId, cardName }: { cardId: string, cardName: string }) => {
    return (
        <div className="w-1/2 h-1/2 hover:bg-blue-200 p-4 mb-4 flex justify-between items-center">
            <div className="text-gray-800" id={`card-${cardId}`}>{cardName}</div>
            <input type="checkbox" className="form-checkbox h-5 w-5" />
        </div>
    );
};

export default Card;
