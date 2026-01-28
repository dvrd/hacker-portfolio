import { pgTable, serial, varchar, text, timestamp, integer, uuid } from 'drizzle-orm/pg-core'

// CV Downloads tracking table
export const cvDownloads = pgTable('cv_downloads', {
  id: serial('id').primaryKey(),
  sessionHash: varchar('session_hash', { length: 64 }),
  ipAddress: varchar('ip_address', { length: 45 }),
  userAgent: text('user_agent'),
  referer: text('referer'),
  downloadedAt: timestamp('downloaded_at').defaultNow().notNull(),
  country: varchar('country', { length: 2 }),
  city: varchar('city', { length: 100 }),
})

// Page Views tracking table
export const pageViews = pgTable('page_views', {
  id: serial('id').primaryKey(),
  pagePath: varchar('page_path', { length: 255 }).notNull(),
  sessionHash: varchar('session_hash', { length: 64 }),
  ipAddress: varchar('ip_address', { length: 45 }),
  userAgent: text('user_agent'),
  referer: text('referer'),
  viewedAt: timestamp('viewed_at').defaultNow().notNull(),
  sessionId: uuid('session_id'),
  durationSeconds: integer('duration_seconds'),
})

// Type exports for TypeScript
export type CVDownload = typeof cvDownloads.$inferSelect
export type InsertCVDownload = typeof cvDownloads.$inferInsert
export type PageView = typeof pageViews.$inferSelect
export type InsertPageView = typeof pageViews.$inferInsert
