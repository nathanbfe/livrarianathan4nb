import pool from "../config/database";

const createBooksTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS books (
        id SERIAL PRIMARY KEY,
        author VARCHAR(100) NOT NULL,
        title VARCHAR(100) UNIQUE NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
      );
    `;
    await client.query(queryText);
    console.log('Tabela "users" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  } finally {
    client.release();
  }
};

createBooksTable().then(() => process.exit(0));
