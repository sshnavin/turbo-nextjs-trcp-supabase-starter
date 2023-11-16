import { boolean, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const test = pgTable('test', {
    id: serial('id').primaryKey(),
    created_at: text('created_at').default(new Date().toISOString()),
    works: boolean('works').default(false),
});
