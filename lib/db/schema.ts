import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// Example table - modify according to your needs
export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});