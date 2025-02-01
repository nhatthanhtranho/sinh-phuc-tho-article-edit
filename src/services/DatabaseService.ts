import Database from "better-sqlite3";

const db = new Database("db/database.sqlite");

export function insertArticle(title: string, body: string, category: string) {
    try {
      const stmt = db.prepare(`
        INSERT INTO article (title, body, thumbnail, category)
        VALUES (?, ?, ?, ?)
      `);
      
      const info = stmt.run(title, body, title, category);
      console.log(`✅ Article inserted with ID: ${info.lastInsertRowid}`);
    } catch (error) {
      console.error("❌ Error inserting article:", error);
    }
  }
