import { pgTable, serial, text, timestamp, varchar, pgEnum } from 'drizzle-orm/pg-core';

export const postStatusEnum = pgEnum('post_status', ['draft', 'published', 'archived']);

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 256 }).notNull(),
  content: text('content').notNull(),
  status: postStatusEnum('status').default('draft').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

// If you plan to use Drizzle relational queries
// export const postsRelations = relations(posts, ({ one }) => ({
//   // example relation:
//   // author: one(users, {
//   //   fields: [posts.authorId],
//   //   references: [users.id],
//   // }),
// }));
