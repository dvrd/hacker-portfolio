'use server'

import { db, isDatabaseAvailable } from './db'
import { cvDownloads, pageViews, type InsertCVDownload, type InsertPageView } from './schema'
import { hashSessionId } from './utils'
import { revalidatePath } from 'next/cache'

/**
 * Track CV download in database
 */
export async function trackCVDownload(data: {
  ip?: string | null
  userAgent?: string | null
  referer?: string | null
}) {
  if (!isDatabaseAvailable()) {
    console.warn('⚠️  Database not available - CV download not tracked')
    return
  }

  try {
    const sessionHash = await hashSessionId(data.ip || null, data.userAgent || null)

    const downloadData: InsertCVDownload = {
      sessionHash,
      ipAddress: data.ip || null,
      userAgent: data.userAgent || null,
      referer: data.referer || null,
      downloadedAt: new Date(),
      country: null, // TODO: Add IP geolocation if needed
      city: null,
    }

    await db!.insert(cvDownloads).values(downloadData)
    revalidatePath('/api/analytics/stats')
  } catch (error) {
    console.error('Error tracking CV download:', error)
  }
}

/**
 * Track page view in database
 */
export async function trackPageView(data: {
  pagePath: string
  sessionId?: string | null
  referer?: string | null
  ip?: string | null
  userAgent?: string | null
}) {
  if (!isDatabaseAvailable()) {
    console.warn('⚠️  Database not available - page view not tracked')
    return
  }

  try {
    const sessionHash = await hashSessionId(data.ip || null, data.userAgent || null)

    const viewData: InsertPageView = {
      pagePath: data.pagePath,
      sessionHash,
      ipAddress: data.ip || null,
      userAgent: data.userAgent || null,
      referer: data.referer || null,
      viewedAt: new Date(),
      sessionId: data.sessionId || null,
      durationSeconds: null,
    }

    await db!.insert(pageViews).values(viewData)
    revalidatePath('/api/analytics/stats')
  } catch (error) {
    console.error('Error tracking page view:', error)
  }
}

/**
 * Get analytics statistics
 */
export async function getAnalyticsStats(period: 'day' | 'week' | 'month' | 'all' = 'all') {
  if (!isDatabaseAvailable()) {
    return {
      cv_downloads: { total: 0, by_country: {} },
      page_views: { total: 0, by_page: {} },
    }
  }

  try {
    // TODO: Add date filtering based on period
    // TODO: Add aggregation by country and page

    return {
      cv_downloads: {
        total: 0,
        by_country: {},
      },
      page_views: {
        total: 0,
        by_page: {},
      },
    }
  } catch (error) {
    console.error('Error getting analytics stats:', error)
    return {
      cv_downloads: { total: 0, by_country: {} },
      page_views: { total: 0, by_page: {} },
    }
  }
}
