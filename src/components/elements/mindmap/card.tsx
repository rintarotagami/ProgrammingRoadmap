import React, { useEffect, useRef } from 'react';
import LeaderLine from "leader-line-new";

interface CardProps {
    id: string;
    title: string;
    subcards: Array<{ id: string, title: string, content: string }>;
}

const Card = ({ id, title, subcards }: CardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const subcardRefs = useRef<Array<HTMLLIElement | null>>([]);

    useEffect(() => {
        subcardRefs.current = subcardRefs.current.slice(0, subcards.length);
        if (cardRef.current) {
            subcardRefs.current.forEach((subcardRef, index) => {
                if (subcardRef && cardRef.current) {
                    const line = new LeaderLine(cardRef.current, subcardRef,
                        {
                            // 線の形状
                            path: "straight", // 直線
                            // 線の色
                            color: "blue",
                            // 線の太さ
                            size: 3,
                            // 終了位置の形状
                            endPlug: "behind", // 矢印
                            endPlugSize: 1,
                            dash: true,
                        });
                    return () => line.remove();
                }
            });
        }
    }, [subcards]);

    return (
        <div className="flex items-center justify-center gap-10">
            <div ref={cardRef} id={`card-${id}`} className="min-w-[300px] h-auto bg-gradient-to-r from-blue-400 to-blue-500 hover:bg-gradient-to-r p-4 mb-4 flex flex-row justify-between items-center rounded-lg shadow-md">
                <div className="text-white font-bold">{title}</div>
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-700 mt-2" />
            </div>
            <ul className="text-white mt-2 ml-4">
                {subcards.map((subcard, index) => (
                    <li ref={el => { subcardRefs.current[index] = el; }} key={subcard.id} className="mt-1 bg-gradient-to-r from-green-300 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 rounded-lg shadow-lg flex justify-between items-center">
                        <strong className="text-lg">{subcard.title}</strong>
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-700 ml-2" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Card;
export type { CardProps };