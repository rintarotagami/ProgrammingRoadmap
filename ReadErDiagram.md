```mermaid
erDiagram

%% ER図のエンティティとその関連を表すコード
User {
    int id(PK)
    string username
    string displayName
    string bio
    %%biographyの略。profile
    string profile_imageKey
    string date_of_birth

    string email
    string password
    string kanri_flg
}

Roadmap {
    int id(PK)
    string title
    string description
    int userId(FK)
}

Card {
    int id(PK)
    string title
    string content
    int roadmapId(FK)
    boolean isCompleted
    int parentId 
    %%接続先のカードID
}


%% リレーションの定義
User ||--o{ Roadmap : "has"
Roadmap ||--o{ Card : "contains"

%%  ユーザーは複数のロードマップを持つことができる
%%  ロードマップは複数のカードを持つことができる
%%  カードは複数のサブカードを持つことができる
%%  カード間の接続情報を保存する
%%  ユーザーは複数の認証プロバイダーを使用することができる

