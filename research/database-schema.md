# PostgreSQL Database Schema for Portfolio Analytics

## Overview
Minimal schema design for tracking CV downloads, page views, and contact form submissions with privacy considerations.

---

## Schema Design with Drizzle ORM

### 1. CV Download Tracking

```typescript
// src/db/schema/cvDownloads.ts
import { pgTable, serial, timestamp, varchar, inet, text } from 'drizzle-orm/pg-core';

export const cvDownloads = pgTable('cv_downloads', {
  id: serial('id').primaryKey(),
  downloadedAt: timestamp('downloaded_at', { withTimezone: true }).defaultNow().notNull(),
  ipAddress: inet('ip_address'), // Nullable for privacy - can be hashed or omitted
  userAgent: text('user_agent'), // Nullable for privacy
  referrer: varchar('referrer', { length: 500 }),
  country: varchar('country', { length: 2 }), // ISO country code (from IP, optional)
  // Privacy-friendly alternative: store only aggregated data
  sessionHash: varchar('session_hash', { length: 64 }), // One-way hash for deduplication
});
```

**Key Decisions:**
- `ipAddress` stored as PostgreSQL `inet` type for efficient querying and validation
- `sessionHash` allows deduplication without storing PII
- All tracking fields except `id` and `downloadedAt` are nullable for privacy flexibility
- Timezone-aware timestamps for accurate analytics across regions

---

### 2. Page View Analytics (Optional)

```typescript
// src/db/schema/pageViews.ts
import { pgTable, serial, timestamp, varchar, inet, text, integer } from 'drizzle-orm/pg-core';

export const pageViews = pgTable('page_views', {
  id: serial('id').primaryKey(),
  viewedAt: timestamp('viewed_at', { withTimezone: true }).defaultNow().notNull(),
  path: varchar('path', { length: 255 }).notNull(), // e.g., '/about', '/projects'
  ipAddress: inet('ip_address'),
  userAgent: text('user_agent'),
  referrer: varchar('referrer', { length: 500 }),
  sessionHash: varchar('session_hash', { length: 64 }),
  durationSeconds: integer('duration_seconds'), // Time spent on page (optional)
});
```

**Key Decisions:**
- `path` is required to identify which pages are most popular
- Similar privacy-friendly approach as CV downloads
- `durationSeconds` can be calculated via JavaScript before page unload

---

### 3. Contact Form Submissions

```typescript
// src/db/schema/contactSubmissions.ts
import { pgTable, serial, timestamp, varchar, text, boolean } from 'drizzle-orm/pg-core';

export const contactSubmissions = pgTable('contact_submissions', {
  id: serial('id').primaryKey(),
  submittedAt: timestamp('submitted_at', { withTimezone: true }).defaultNow().notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  subject: varchar('subject', { length: 255 }),
  message: text('message').notNull(),
  isRead: boolean('is_read').default(false).notNull(),
  isReplied: boolean('is_replied').default(false).notNull(),
  // Optional spam protection
  honeypotTriggered: boolean('honeypot_triggered').default(false).notNull(),
});
```

**Key Decisions:**
- Store actual contact data (necessary for communication)
- `isRead` and `isReplied` flags for admin dashboard
- `honeypotTriggered` for basic spam detection (hidden field that bots fill)
- Consider adding rate limiting at application level

---

### 4. Aggregated Analytics (Recommended)

For better privacy, consider storing only aggregated data:

```typescript
// src/db/schema/dailyStats.ts
import { pgTable, serial, date, varchar, integer } from 'drizzle-orm/pg-core';

export const dailyStats = pgTable('daily_stats', {
  id: serial('id').primaryKey(),
  date: date('date').notNull(),
  metric: varchar('metric', { length: 50 }).notNull(), // 'cv_downloads', 'page_views', etc.
  path: varchar('path', { length: 255 }), // For page-specific stats
  count: integer('count').default(0).notNull(),
  uniqueCount: integer('unique_count').default(0).notNull(), // Based on session hash
});
```

**Key Decisions:**
- Pre-aggregate data daily via cron job
- Delete raw tracking data after aggregation (GDPR-friendly)
- Keeps analytics useful while minimizing PII storage

---

## Index Recommendations

### Performance Indexes

```typescript
// Add to schema files
import { index } from 'drizzle-orm/pg-core';

// CV Downloads indexes
export const cvDownloads = pgTable('cv_downloads', {
  // ... fields
}, (table) => ({
  downloadedAtIdx: index('cv_downloads_downloaded_at_idx').on(table.downloadedAt),
  sessionHashIdx: index('cv_downloads_session_hash_idx').on(table.sessionHash),
  countryIdx: index('cv_downloads_country_idx').on(table.country),
}));

// Page Views indexes
export const pageViews = pgTable('page_views', {
  // ... fields
}, (table) => ({
  viewedAtIdx: index('page_views_viewed_at_idx').on(table.viewedAt),
  pathIdx: index('page_views_path_idx').on(table.path),
  pathViewedAtIdx: index('page_views_path_viewed_at_idx').on(table.path, table.viewedAt),
  sessionHashIdx: index('page_views_session_hash_idx').on(table.sessionHash),
}));

// Contact Submissions indexes
export const contactSubmissions = pgTable('contact_submissions', {
  // ... fields
}, (table) => ({
  submittedAtIdx: index('contact_submissions_submitted_at_idx').on(table.submittedAt),
  isReadIdx: index('contact_submissions_is_read_idx').on(table.isRead),
  emailIdx: index('contact_submissions_email_idx').on(table.email),
}));

// Daily Stats indexes
export const dailyStats = pgTable('daily_stats', {
  // ... fields
}, (table) => ({
  dateMetricIdx: index('daily_stats_date_metric_idx').on(table.date, table.metric),
  metricPathIdx: index('daily_stats_metric_path_idx').on(table.metric, table.path),
}));
```

**Rationale:**
- **Timestamp indexes**: Fast queries for date ranges (e.g., "last 30 days")
- **Session hash indexes**: Quick deduplication for unique visitor counts
- **Path indexes**: Efficient page-specific analytics
- **Composite indexes**: Optimize common query patterns (path + date)

---

## Migration Strategy

### Phase 1: Initial Setup

```bash
# Install dependencies
npm install drizzle-orm pg
npm install -D drizzle-kit @types/pg
```

```typescript
// drizzle.config.ts
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema/*',
  out: './drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
```

### Phase 2: Create Migrations

```bash
# Generate initial migration
npx drizzle-kit generate:pg

# This creates SQL files in drizzle/migrations/
# Example: 0000_initial_schema.sql
```

### Phase 3: Apply Migrations

```typescript
// src/db/migrate.ts
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

async function main() {
  console.log('Running migrations...');
  await migrate(db, { migrationsFolder: './drizzle/migrations' });
  console.log('Migrations complete!');
  process.exit(0);
}

main().catch((err) => {
  console.error('Migration failed!', err);
  process.exit(1);
});
```

```bash
# Run migrations
npm run db:migrate
```

### Phase 4: Seeding (Optional)

```typescript
// src/db/seed.ts
import { db } from './index';
import { dailyStats } from './schema/dailyStats';

async function seed() {
  // Insert test data if needed
  await db.insert(dailyStats).values([
    { date: new Date('2026-01-01'), metric: 'cv_downloads', count: 5, uniqueCount: 4 },
    { date: new Date('2026-01-02'), metric: 'cv_downloads', count: 8, uniqueCount: 7 },
  ]);
}
```

---

## Privacy & GDPR Considerations

### 1. Data Minimization
- **Only collect necessary data**: IP addresses are optional; consider omitting entirely
- **Use session hashes**: One-way hashing (SHA-256) prevents reverse lookup
- **Aggregate early**: Daily stats table allows deletion of raw events

### 2. Anonymization Strategy

```typescript
// src/utils/privacy.ts
import crypto from 'crypto';

/**
 * Create one-way hash for deduplication without storing IP
 */
export function createSessionHash(ipAddress: string, userAgent: string): string {
  const salt = process.env.SESSION_SALT || 'default-salt-change-me';
  return crypto
    .createHash('sha256')
    .update(ipAddress + userAgent + salt)
    .digest('hex');
}

/**
 * Hash IP address for storage (optional)
 */
export function hashIpAddress(ip: string): string {
  const salt = process.env.IP_SALT || 'default-ip-salt-change-me';
  return crypto
    .createHash('sha256')
    .update(ip + salt)
    .digest('hex');
}
```

### 3. Data Retention Policy

```typescript
// src/db/cleanup.ts
import { db } from './index';
import { cvDownloads, pageViews } from './schema';
import { sql } from 'drizzle-orm';

/**
 * Delete raw tracking data older than 90 days
 * Run via cron job: 0 0 * * 0 (weekly)
 */
export async function cleanupOldData() {
  const ninetyDaysAgo = new Date();
  ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);

  // Delete old CV download records
  await db
    .delete(cvDownloads)
    .where(sql`${cvDownloads.downloadedAt} < ${ninetyDaysAgo}`);

  // Delete old page view records
  await db
    .delete(pageViews)
    .where(sql`${pageViews.viewedAt} < ${ninetyDaysAgo}`);

  console.log(`Deleted records older than ${ninetyDaysAgo.toISOString()}`);
}
```

### 4. GDPR Rights Implementation

```typescript
// src/api/gdpr.ts

/**
 * Right to access: Export user's data
 */
export async function exportUserData(email: string) {
  const submissions = await db
    .select()
    .from(contactSubmissions)
    .where(eq(contactSubmissions.email, email));

  return {
    contact_submissions: submissions,
    // Note: Analytics data is anonymized and cannot be linked to individuals
  };
}

/**
 * Right to erasure: Delete user's contact submissions
 */
export async function deleteUserData(email: string) {
  await db
    .delete(contactSubmissions)
    .where(eq(contactSubmissions.email, email));

  return { success: true, message: 'Data deleted' };
}
```

### 5. Privacy Policy Requirements

Your portfolio should include:
- Statement about what data is collected (CV downloads, page views, contact forms)
- Purpose of collection (analytics, communication)
- Data retention period (e.g., "90 days for analytics, indefinite for contact submissions")
- User rights (access, deletion)
- Contact method for privacy requests

### 6. Cookie Consent (EU Requirement)

```typescript
// src/utils/consent.ts

/**
 * Check if user has consented to analytics
 */
export function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('analytics_consent') === 'true';
}

/**
 * Only track if user consented
 */
export function trackCvDownload() {
  if (!hasAnalyticsConsent()) return;
  // Proceed with tracking
}
```

---

## Analytics Aggregation Queries

### Daily Aggregation Job

```typescript
// src/jobs/aggregateAnalytics.ts
import { db } from '../db';
import { cvDownloads, pageViews, dailyStats } from '../db/schema';
import { sql, eq, and, gte, lt } from 'drizzle-orm';

export async function aggregateDailyStats(date: Date) {
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);

  // Aggregate CV downloads
  const cvStats = await db
    .select({
      count: sql<number>`count(*)`,
      uniqueCount: sql<number>`count(distinct ${cvDownloads.sessionHash})`,
    })
    .from(cvDownloads)
    .where(
      and(
        gte(cvDownloads.downloadedAt, startOfDay),
        lt(cvDownloads.downloadedAt, endOfDay)
      )
    );

  await db.insert(dailyStats).values({
    date: startOfDay,
    metric: 'cv_downloads',
    count: cvStats[0]?.count || 0,
    uniqueCount: cvStats[0]?.uniqueCount || 0,
  });

  // Aggregate page views by path
  const pageStats = await db
    .select({
      path: pageViews.path,
      count: sql<number>`count(*)`,
      uniqueCount: sql<number>`count(distinct ${pageViews.sessionHash})`,
    })
    .from(pageViews)
    .where(
      and(
        gte(pageViews.viewedAt, startOfDay),
        lt(pageViews.viewedAt, endOfDay)
      )
    )
    .groupBy(pageViews.path);

  for (const stat of pageStats) {
    await db.insert(dailyStats).values({
      date: startOfDay,
      metric: 'page_views',
      path: stat.path,
      count: stat.count,
      uniqueCount: stat.uniqueCount,
    });
  }
}
```

### Analytics Dashboard Queries

```typescript
// src/queries/analytics.ts
import { db } from '../db';
import { dailyStats, contactSubmissions } from '../db/schema';
import { sql, eq, gte, desc } from 'drizzle-orm';

/**
 * Get CV download stats for last N days
 */
export async function getCvDownloadStats(days: number = 30) {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  return db
    .select({
      date: dailyStats.date,
      totalDownloads: dailyStats.count,
      uniqueDownloads: dailyStats.uniqueCount,
    })
    .from(dailyStats)
    .where(
      and(
        eq(dailyStats.metric, 'cv_downloads'),
        gte(dailyStats.date, startDate)
      )
    )
    .orderBy(dailyStats.date);
}

/**
 * Get most popular pages
 */
export async function getPopularPages(days: number = 30) {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  return db
    .select({
      path: dailyStats.path,
      totalViews: sql<number>`sum(${dailyStats.count})`,
      uniqueViews: sql<number>`sum(${dailyStats.uniqueCount})`,
    })
    .from(dailyStats)
    .where(
      and(
        eq(dailyStats.metric, 'page_views'),
        gte(dailyStats.date, startDate)
      )
    )
    .groupBy(dailyStats.path)
    .orderBy(desc(sql`sum(${dailyStats.count})`))
    .limit(10);
}

/**
 * Get unread contact submissions
 */
export async function getUnreadContacts() {
  return db
    .select()
    .from(contactSubmissions)
    .where(eq(contactSubmissions.isRead, false))
    .orderBy(desc(contactSubmissions.submittedAt));
}

/**
 * Get overall statistics
 */
export async function getOverallStats() {
  const totalDownloads = await db
    .select({
      total: sql<number>`sum(${dailyStats.count})`,
      unique: sql<number>`sum(${dailyStats.uniqueCount})`,
    })
    .from(dailyStats)
    .where(eq(dailyStats.metric, 'cv_downloads'));

  const totalPageViews = await db
    .select({
      total: sql<number>`sum(${dailyStats.count})`,
      unique: sql<number>`sum(${dailyStats.uniqueCount})`,
    })
    .from(dailyStats)
    .where(eq(dailyStats.metric, 'page_views'));

  const totalContacts = await db
    .select({
      total: sql<number>`count(*)`,
      unread: sql<number>`count(*) filter (where ${contactSubmissions.isRead} = false)`,
    })
    .from(contactSubmissions);

  return {
    cvDownloads: totalDownloads[0],
    pageViews: totalPageViews[0],
    contacts: totalContacts[0],
  };
}
```

---

## Implementation Checklist

- [ ] Install Drizzle ORM and PostgreSQL dependencies
- [ ] Set up database connection (environment variables)
- [ ] Create schema files for each table
- [ ] Configure `drizzle.config.ts`
- [ ] Generate initial migrations
- [ ] Apply migrations to database
- [ ] Implement session hashing utility
- [ ] Create API endpoints for tracking
- [ ] Set up daily aggregation cron job
- [ ] Implement data cleanup job (90-day retention)
- [ ] Build analytics dashboard queries
- [ ] Add cookie consent banner
- [ ] Create privacy policy page
- [ ] Implement GDPR data export/deletion endpoints
- [ ] Test tracking in production environment
- [ ] Monitor query performance and optimize indexes

---

## Recommended Tech Stack

- **Database**: PostgreSQL 15+ (or managed service like Neon, Supabase)
- **ORM**: Drizzle ORM
- **Runtime**: Node.js 18+ or Bun
- **Hosting**: Vercel, Railway, or any Node.js host
- **Cron Jobs**: Vercel Cron, GitHub Actions, or dedicated service

---

## Alternative: Serverless-Friendly Approach

For serverless environments (Vercel, Cloudflare Workers), consider:

1. **Connection pooling**: Use `@neondatabase/serverless` or PgBouncer
2. **Edge-compatible**: Drizzle works with edge runtimes
3. **Lazy aggregation**: Aggregate on-demand instead of via cron

```typescript
// Serverless-friendly connection
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);
```

---

## Conclusion

This schema provides:
- **Minimal footprint**: Only essential tables
- **Privacy-first**: Session hashing, optional IP storage, aggregation
- **Performance**: Strategic indexes for common queries
- **GDPR compliance**: Data retention, anonymization, user rights
- **Scalability**: Aggregation strategy prevents unbounded growth

For a personal portfolio, start with `cvDownloads` and `contactSubmissions` tables. Add `pageViews` and `dailyStats` only if detailed analytics are needed.
