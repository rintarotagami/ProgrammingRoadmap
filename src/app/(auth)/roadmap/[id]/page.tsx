"use client"

import React, { useEffect, useRef } from 'react';
import LeaderLine from "leader-line-new";
import Card from '@/components/elements/mindmap/card';

export default function Home() {
  const cards = [
    {
      id: '1', title: 'Internet',
      content: 'インターネットは、標準化されたプロトコルのセットを通じて通信する、相互に接続されたコンピュータのグローバルネットワークです。',
    },
    { id: '2', title: 'HTML' },
    { id: '3', title: 'CSS' },
    { id: '4', title: 'JavaScript' },
    { id: '5', title: 'パッケージマネージャー' },
    { id: '6', title: 'JSフレームワーク' },
    { id: '7', title: 'CSSフレームワーク' },
    { id: '8', title: 'CSSアーキテクチャ' },
  ];

  const subcards = [
    {
      id: '1', title: 'HTMLの基本', content: 'HTML は HyperText Markup Language の略です。これはフロントエンドで使用され、CSS を使用してスタイルを設定したり、JavaScript を使用してインタラクティブにすることができる Web ページに構造を与えます。',
      cardID: '1',
    },
    {
      id: '2', title: 'セマンティックHTML（意味論的HTML）', content: 'HTMLでセマンティック要素とは、<form>、<table>、<article>、<header>、<footer> など、Web ページのさまざまな部分を定義するために使用できる要素のタイプです。セマンティック要素は、ブラウザーと開発者の両方に対してその要素の意味を明確に説明します。 ',
      cardId: '1'
    },
    {
      id: '3', title: 'フォームと検証', content: 'データをサーバーに送信する前に、必要なフォーム コントロールがすべて正しい形式で入力されていることを確認することが重要です。これはクライアント側のフォーム検証と呼ばれ、送信されたデータがさまざまなフォーム コントロールに規定されている要件と一致していることを確認するのに役立ちます。',
      cardId: '1'
    },
    {
      id: '4', title: 'SEO基礎', content: 'SEO または検索エンジン最適化は、Google や Bing などの検索エンジンでのランキングを向上させるために Web サイトを最適化するために使用される技術です。',
      cardId: '1'
    },
  ]

  const relations = [
    { start: '1', end: '2' },
    { start: '2', end: '3' },
    { start: '3', end: '4' },
    { start: '4', end: '5' },
    { start: '5', end: '6' },
    { start: '6', end: '7' },
    { start: '7', end: '8' }
  ];

  const lines = useRef<LeaderLine[]>([]);

  useEffect(() => {
    relations.forEach((relation, index) => {
      const startElement = document.getElementById(`card-${relation.start}`);
      const endElement = document.getElementById(`card-${relation.end}`);
      if (startElement && endElement) {
        const line = new LeaderLine(startElement, endElement,
          {
            // 線の形状
            path: "straight", // 直線
            // 線の色
            color: "blue",
            // 線の太さ
            size: 5,
            // 終了位置の形状
            endPlug: "arrow3", // 矢印
            endPlugSize: 1,
          });
        lines.current.push(line);
      }
    });

    return () => {
      lines.current.forEach(line => line.remove());
    };
  }, []);

  return (
    <div className="p-8 flex flex-col items-start justify-center">
      {cards.map(card => {
        const relatedSubcards = subcards.filter(subcard => subcard.cardId === card.id);
        return (
          <Card key={card.id} id={card.id} title={card.title} subcards={relatedSubcards} />
        );
      })}
    </div>
  );
}
