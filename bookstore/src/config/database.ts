import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://natchan_user:KCQ5xNpZ5jTHJhiCCTqN2xfVbKmXnrVn@dpg-cshbdsjqf0us7381lp40-a.oregon-postgres.render.com/natchan";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
