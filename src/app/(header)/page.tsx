import React from 'react';
import Card from '../../components/elements/mindmap/card';

export default function Home() {
  const cards = [
    { cardId: '1', cardName: 'Internet' },
    { cardId: '2', cardName: 'HTML' },
    { cardId: '3', cardName: 'CSS' },
    { cardId: '4', cardName: 'JavaScript' },
    { cardId: '5', cardName: 'パッケージマネージャー' },
    { cardId: '6', cardName: 'JSフレームワーク' },
    { cardId: '7', cardName: 'CSSフレームワーク' },
    { cardId: '8', cardName: 'CSSアーキテクチャ' },
  ];

  return (
    <div className="p-8 flex flex-col items-center justify-center h-screen">
      {cards.map(card => (
        <Card key={card.cardId} cardId={card.cardId} cardName={card.cardName} />
      ))}
      new LeaderLine(
      document.getElementById('start'),
      document.getElementById('end')
      );
    </div>
  );
}
