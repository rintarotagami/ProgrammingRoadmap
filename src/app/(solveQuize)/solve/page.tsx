export default function example() {
    return (
        <main className="flex flex-col items-start flex-1">
            <div className="w-full flex flex-1">
                <div className="w-1/5 bg-gray-100 border-r border-gray-400 overflow-hidden resize-x">
                    <h2 className="text-lg font-bold mb-2">ファイル一覧</h2>
                    {/* ファイル一覧を表示するコンポーネント */}
                </div>
                
                <div className="relative w-2/3 bg-white flex flex-col min-h-scree">
                    <ul className="flex bg-gray-200">
                        <li className="bg-gray-200 p-2">ファイル1.html</li>
                        <li className="bg-gray-200 p-2">ファイル2.css</li>
                        <li className="bg-gray-200 p-2">ファイル3.js</li>
                    </ul>
                    <p className="text-sm p-2">. index.html</p>
                    <div className="flex-1">
                        <textarea className="h-full w-full flex-1 p-2 border border-gray-300" style={{ fontFamily: 'monospace', resize: 'none' }}>
                            {/* ここにコードを書く */}
                        </textarea>
                        <div className="absolute top-0 left-0 h-full">
                            <ul className="list-decimal list-inside m-0 p-0">
                                {/* 行数を動的に表示するためのリスト */}
                            </ul>
                        </div>
                    </div>
                    <div className="bottom-0 w-full">
                        <div className="bg-black text-white text-sm p-4">
                            <ul className="flex gap-4">
                                <li>問題</li>
                                <li>出力</li>
                                <li>デバッグコンソール</li>
                                <li>ターミナル</li>
                                <li>ポート</li>
                            </ul>
                            <div className="flex flex-col gap-4 mt-4">
                                <p>ここにターミナルの出力が表示されます。</p>
                                {/* ここにターミナルの出力を動的に表示するコードを追加する */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-1/4 bg-gray-200 border-l border-gray-400">
                    <h2 className="text-lg font-bold mb-2">プレビュー</h2>
                    <iframe className="w-full h-full" sandbox="allow-scripts allow-same-origin">
                        {/* コードのプレビューを表示するiframe */}
                    </iframe>
                </div>
            </div>
        </main>
    );
}
