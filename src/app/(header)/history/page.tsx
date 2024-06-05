export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24 pt-8">
      <h1 className="text-4xl font-bold">閲覧履歴</h1>
      <div className="w-full">
        <ul className="flex flex-wrap justify-start mt-2">
          <li className="mt-2 mr-2 mb-2">
            <button className="px-4 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500">すべて</button>
          </li>
          <li className="mt-2 mr-2 mb-2">
            <button className="px-4 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500">ゲーム</button>
          </li>
          <li className="mt-2 mr-2 mb-2">
            <button className="px-4 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500">音楽</button>
          </li>
          <li className="mt-2 mr-2 mb-2">
            <button className="px-4 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500">ECサイト</button>
          </li>
          <li className="mt-2 mr-2 mb-2">
            <button className="px-4 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500">ボタン</button>
          </li>
        </ul>
      </div>
      <ul className="flex flex-wrap">
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index} className="mb-4 w-1/3">
            <div className="py-2 pr-2">
              <img src="sample\dummy-thumbnail.jpg" alt="サムネイル" className="w-full rounded-lg" />
              <div className="flex items-start justify-start pt-2">
                <img src="sample\dummy-icon.jpg" alt="投稿者アイコン" className="w-10 h-10 rounded-full mr-2" />
                <div>
                  <p className="font-bold">じゃんけんを作ろう</p>
                  <div className="text-sm mt-1">
                    <p className="text-sm">RinIogi</p>
                    <span>プレイ回数: 1234回</span> ・ <span>3日前</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}


