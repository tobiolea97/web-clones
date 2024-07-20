import dotenv from "dotenv";

dotenv.config();

const config = {
  database: {
    mongo: {
      url: "mongodb://localhost:37017/continuum",
    },
    postgres: {
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      endpoint_id: process.env.ENDPOINT_ID,
    },
  },
};

export default config;
