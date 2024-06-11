```mermaid
erDiagram

%% ER図のエンティティとその関連を表すコード
User {
    int id(PK)
    string username
    string displayName
    string bio
    string profile_image
    string date_of_birth
    string email    
    string googleId
    string twitterId
}

Roadmap {
    int id(PK)
    string title
    string description
    int userId
}

Card {
    int id(PK)
    string title
    string content
    int roadmapId
}

SubCard {
    int id(PK)
    string title
    string content
    int cardId
    boolean isCompleted
}

CardRelation {
    int id(PK)
    int start(startCardId)
    int endCardId
}

AuthenticationProvider {
    int id(PK)
    string name
}

%% リレーションの定義
User ||--o{ Roadmap : "has"
Roadmap ||--o{ Card : "contains"
Card ||--o{ SubCard : "includes"
Roadmap ||--o{ CardRelation : "connects"
User ||--o{ AuthenticationProvider : "uses"

%%  ユーザーは複数のロードマップを持つことができる
%%  ロードマップは複数のカードを持つことができる
%%  カードは複数のサブカードを持つことができる
%%  カード間の接続情報を保存する
%%  ユーザーは複数の認証プロバイダーを使用することができる

