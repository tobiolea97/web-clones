import pkg from "pg";
import config from "../config/config";

const { Pool } = pkg;

const pool = new Pool({
  user: config.database.postgres.user,
  host: config.database.postgres.host,
  database: config.database.postgres.database,
  password: config.database.postgres.password,
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
