import fs from 'fs';
import path from 'path';
import pool from './pool';

// read schema.sql
const schema = fs.readFileSync(path.resolve(__dirname, './schema.sql'), {
    encoding: 'utf8',
});

(async () => {
    try {
        await pool.query(schema);
        console.log('✅ Reset Database!');
    } catch (err) {
        console.error('❌ Error resetting database:', err);
    } finally {
        await pool.end();
    }
})();

module.exports