# フロントエンドの変遷（2024時点）

```mermaid

classDiagram
    class レガシーMPA {
        MPA#40;multiple page application#41;とは:  
        ユーザーがページを切り替える（ルート別にページ遷移）ごとに、
        各ページ毎に存在するHTMLをサーバーからユーザーに送信する方法
        \n
        レガシーMPAのデメリット: 
        ページ遷移が、本質的には他のサイトを読み込んでいる
        ことと同じなので処理が遅い。
        \n
        ページアクセス時:(SSR#40;server side rendering#41;)
        ページ遷移時:(SSR)
    }
    class MPA-withAjax {
        #91;レガシーMPAにAjaxを追加した手法#93;
        \n
        Ajaxとは:
        更新のあった部分だけを書き換えるために、
        ページをロードすることなく、データを取得するための技術
        \n
        Ajaxのデメリット:
        ページ遷移時の動きは古い形式のMPAと同じ
        なので処理が遅い
        \n
        ページアクセス時:(SSR)
        ページ遷移時:(SSR)
    }
    class レガシーSPA {
        SPA#40;Single Page Application#41;とは:
        Ajaxのデメリットを補うために生まれた手法。
        全てのページで同じhtmlを使いまわし、中身をjsで置き換えることで、各ページを遷移する。
        \n
        ページアクセス時:(CSR#40;client side rendering#41;)
        ページ遷移時:(CSR)
    }
    class SPA-withSSR {
        #91;SPAにサーバーサイドレンダリングを追加した手法#93;
        \n
        SPA#43;SSRのデメリット:
        結局、初回アクセス時にデータフェッチしてからレスポンスなので、初期表示が遅い。
        \n
        ページアクセス時:(SSR)
    }
    class Hydration{
        react,next.js#40;PageRouter#41;の根幹となる処理
        \n
        ページアクセス時:(SSR#40;Prerendering#41;)
        ページ遷移時:(CSR)
    }
    class PartialHydration {
        Nextjs_AppRouter.js
    }
    class Resumable{
        Qwickの根幹となる考え方
    }
    

graph TD
    レガシーMPA --> MPA-withAjax
    MPA-withAjax --> レガシーSPA
    レガシーSPA --> SPA-withSSR
    SPA-withSSR --> Hydration
    Hydration --> PartialHydration
    PartialHydration --> Resumable


