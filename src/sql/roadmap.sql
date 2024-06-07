CREATE TABLE User (
    id VARCHAR(255) PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(256) NOT NULL,
    googleId VARCHAR(255),
    twitterId VARCHAR(255)
);

CREATE TABLE Roadmap (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    userId VARCHAR(255),
    FOREIGN KEY (userId) REFERENCES User(id)
);

CREATE TABLE Card (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    roadmapId VARCHAR(255),
    FOREIGN KEY (roadmapId) REFERENCES Roadmap(id)
);

CREATE TABLE SubCard (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    cardId VARCHAR(255),
    isCompleted BOOLEAN NOT NULL,
    FOREIGN KEY (cardId) REFERENCES Card(id)
);

CREATE TABLE CardRelation (
    id VARCHAR(255) PRIMARY KEY,
    startCardId VARCHAR(255),
    endCardId VARCHAR(255),
    FOREIGN KEY (startCardId) REFERENCES Card(id),
    FOREIGN KEY (endCardId) REFERENCES Card(id)
);

CREATE TABLE AuthenticationProvider (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
