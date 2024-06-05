export default function CreateQuizPage() {
    return (
        <main className="flex min-h-screen flex-col items-start p-24 pt-8">
            <h1 className="text-4xl font-bold">問題を作成</h1>
            <div className="w-full max-w-4xl">
                <form className="mt-8">
                    <div className="mb-6">
                        <label htmlFor="quizTitle" className="block mb-2 text-sm font-medium text-gray-900">問題のタイトル</label>
                        <input type="text" id="quizTitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="例：JavaScriptでじゃんけんを作ろう！" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="quizDescription" className="block mb-2 text-sm font-medium text-gray-900">問題の説明</label>
                        <textarea id="quizDescription" rows={4} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="クイズの詳細説明を入力してください" required></textarea>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="quizDescription" className="block mb-2 text-sm font-medium text-gray-900">お手本のコード</label>
                        <textarea id="quizDescription" rows={4} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="お手本のコードを入力してください" required></textarea>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">クイズを作成</button>
                </form>
            </div>
        </main>
    );
}
