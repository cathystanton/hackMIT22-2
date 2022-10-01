DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    -- not displayed
    postID INTEGER PRIMARY KEY AUTOINCREMENT,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    userID TEXT NOT NULL,
    
    -- displayed
    songID TEXT NOT NULL,
    journalEntry TEXT NOT NULL,
    emotion TEXT NOT NULL
);