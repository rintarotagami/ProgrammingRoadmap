```mermaid
erDiagram

%% ユーザーと会員のエンティティ
USER {
    uid id PK
}

MEM {
    uid id PK
    uid user_id FK
}



%% 会員ステータスアクティビティ
MEM_ACTVS {
    uid id PK
    uid member_id FK
    status MEMBER_STATUS
    datetime created_at
}

MEM_ACTVS_LATEST {
    uid id PK
    uid member_id FK
    status MEMBER_STATUS
    datetime created_at
}

%% 会員ステータスに基づくテーブル
MEM_PEND_ACT {
    uid status_activity_id(PK)(FK)
}

MEM_VERIFIED {
    uid status_activity_id(PK)(FK)
}

MEM_ACT {
    uid status_activity_id(PK)(FK)
}

MEM_BAN {
    uid status_activity_id(PK)(FK)
    varchar operated_by(FK)
    varchar reason
}

MEM_RSN {
    uid status_activity_id(PK)(FK)
    varchar reason
}

MEM_DIS {
    uid status_activity_id(PK)(FK)
}

MEM_RST {
    uid status_activity_id(PK)(FK)
    varchar reason
    varchar operated_by(FK)
}

%% 管理者
OPES {
    uid id(PK)
    uid user_id(FK)
    varchar name
}

%% リレーションの定義
USER ||--o{ MEM : "has"
MEM ||--o{ MEM_ACTVS : "tracked_by"
MEM ||--o{ MEM_ACTVS_LATEST : "tracked_by_latest"
MEM ||--o{ MEM_PEND_ACT : "pending_verification"
MEM ||--o{ MEM_VERIFIED : "verified"
MEM ||--o{ MEM_ACT : "active"
MEM ||--o{ MEM_BAN : "banned"
MEM ||--o{ MEM_RSN : "resigned"
MEM ||--o{ MEM_DIS : "disabled"
MEM ||--o{ MEM_RST : "restored"
MEM_BAN ||--|| OPES : "operated_by"
MEM_RST ||--|| OPES : "restored_by"

