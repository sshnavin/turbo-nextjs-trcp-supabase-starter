import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import 'dotenv/config';

const pool = new Pool({
    connectionString: process.env['SUPABASE_CONNECTION_STRING'] ?? '',
});

const db = drizzle(pool);

async function main() {
    console.log('migration started...');
    await migrate(db, { migrationsFolder: './backend/drizzle/migrations' });
    console.log('migration ended...');
    process.exit(0);
}

main().catch((err) => {
    console.log(err);
    process.exit(0);
});
