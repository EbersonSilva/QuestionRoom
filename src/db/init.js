const Database = require('./config')

const initDb = {
  async init() {
    const db =
      await Database() /* Await vai esperar a o retorno do database, para depois ir para a proxima linha*/

    await db.exec(`CREATE TABLE rooms (
      id INTEGER PRIMARY KEY,
      pass TEXT
    )`)

    await db.exec(`CREATE TABLE questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      read INT,
      room INT
    )`)

    await db.close()
  }
}

initDb.init()
