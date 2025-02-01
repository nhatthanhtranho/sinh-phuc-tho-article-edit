const Database = require("better-sqlite3");

const db = new Database("db/database.sqlite");

db.prepare(`
  CREATE TABLE IF NOT EXISTS article (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    thumbnail TEXT,
    category TEXT
  )
`).run();

console.log("Table created successfully!");