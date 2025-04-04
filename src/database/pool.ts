import { Pool } from 'pg';
import dotenv from 'dotenv';
// dotenv.config();
const port = process.env.DB_PORT
const NumberPORT = parseInt(port as string);

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: NumberPORT,
    application_name: process.env.DB_NAME
})

export default pool;