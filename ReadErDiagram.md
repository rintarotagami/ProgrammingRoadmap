```mermaid
erDiagram

%% ER図のエンティティとその関連を表すコード
User {
    string id
    string username
    string email
    string googleId
    string twitterId
}

Roadmap {
    string id
    string title
    string description
    string userId
}

Card {
    string id
    string title
    string content
    string roadmapId
}

SubCard {
    string id
    string title
    string content
    string cardId
    boolean isCompleted
}

CardRelation {
    string id
    string startCardId
    string endCardId
}

AuthenticationProvider {
    string id
    string name
}

%% リレーションの定義
User ||--o{ Roadmap : "has"
Roadmap ||--o{ Card : "contains"
Card ||--o{ SubCard : "includes"
Card ||--o{ CardRelation : "connects"
User ||--o{ AuthenticationProvider : "uses"

%%  ユーザーは複数のロードマップを持つことができる
%%  ロードマップは複数のカードを持つことができる
%%  カードは複数のサブカードを持つことができる
%%  カード間の接続情報を保存する
%%  ユーザーは複数の認証プロバイダーを使用することができる
