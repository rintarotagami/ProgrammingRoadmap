"use client"
import LeaderLine from 'leader-line';
import React, { useEffect, useRef } from 'react';
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

  const connections = [
    { start: '1', end: '2' }
  ];

  const lines = useRef<LeaderLine[]>([]);

  useEffect(() => {
    connections.forEach((connection, index) => {
      const startElement = document.getElementById(`card-${connection.start}`);
      const endElement = document.getElementById(`card-${connection.end}`);
      if (startElement && endElement) {
        const line = new LeaderLine(startElement, endElement);
        lines.current.push(line);
      }
    });

    return () => {
      lines.current.forEach(line => line.remove());
    };
  }, []);

  return (
    <div className="p-8 flex flex-col items-center justify-center h-screen">
      {cards.map(card => (
        <Card key={card.cardId} cardId={card.cardId} cardName={card.cardName} />
      ))}
    </div>
  );
}
