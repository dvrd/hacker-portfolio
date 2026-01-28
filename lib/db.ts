import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

// Check if we have a database URL
const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  console.warn('⚠️  DATABASE_URL not set - database features will be disabled')
}

// Create postgres client (only if DATABASE_URL exists)
const client = connectionString ? postgres(connectionString) : null

// Create drizzle instance
export const db = client ? drizzle(client, { schema }) : null

// Helper to check if database is available
export function isDatabaseAvailable(): boolean {
  return db !== null && connectionString !== undefined
}

// Export for migrations
export { client }
