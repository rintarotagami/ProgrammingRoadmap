import React from 'react';

const RoadmapIntroPage = () => {
    return (
        <div className="p-8">
            <h1 className="text-xl font-bold text-center mb-4">ロードマップアプリ紹介</h1>
            <p className="text-lg mb-4">
                このアプリは、ユーザーが自分の学習プロセスを計画し、追跡するためのロードマップを作成できるツールです。
                各ロードマップは、特定のスキルや知識を習得するためのステップを段階的に示しています。
            </p>
            <p className="text-lg mb-4">
                ユーザーは自分だけのカスタマイズされたロードマップを作成することができ、
                学習の進捗に応じて各ステップの状態を更新することができます。
            </p>
            <p className="text-lg">
                さらに、コミュニティのロードマップを参照したり、他のユーザーと協力して学習目標を達成することも可能です。
            </p>
        </div>
    );
};

export default RoadmapIntroPage;
