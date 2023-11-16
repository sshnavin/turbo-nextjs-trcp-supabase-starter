import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const connectionString = process.env['SUPABASE_CONNECTION_STRING'] ?? '';
const client = postgres(connectionString);
export const db = drizzle(client);
