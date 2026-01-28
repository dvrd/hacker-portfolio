import { NextResponse } from 'next/server'
import { db, isDatabaseAvailable } from '@/lib/db'
import { cvDownloads, pageViews } from '@/lib/schema'
import { sql } from 'drizzle-orm'

export const dynamic = 'force-dynamic'

export async function GET() {
  if (!isDatabaseAvailable()) {
    return NextResponse.json({
      cv_downloads: { total: 0, by_country: {} },
      page_views: { total: 0, by_page: {} },
    })
  }

  try {
    // Get total CV downloads
    const cvDownloadCount = await db!
      .select({ count: sql<number>`count(*)::int` })
      .from(cvDownloads)

    // Get downloads by country (if available)
    const cvDownloadsByCountry = await db!
      .select({
        country: cvDownloads.country,
        count: sql<number>`count(*)::int`,
      })
      .from(cvDownloads)
      .where(sql`${cvDownloads.country} IS NOT NULL`)
      .groupBy(cvDownloads.country)

    // Get total page views
    const pageViewCount = await db!
      .select({ count: sql<number>`count(*)::int` })
      .from(pageViews)

    // Get views by page
    const pageViewsByPage = await db!
      .select({
        page: pageViews.pagePath,
        count: sql<number>`count(*)::int`,
      })
      .from(pageViews)
      .groupBy(pageViews.pagePath)

    return NextResponse.json({
      cv_downloads: {
        total: cvDownloadCount[0]?.count || 0,
        by_country: cvDownloadsByCountry.reduce(
          (acc, row) => {
            if (row.country) {
              acc[row.country] = row.count
            }
            return acc
          },
          {} as Record<string, number>
        ),
      },
      page_views: {
        total: pageViewCount[0]?.count || 0,
        by_page: pageViewsByPage.reduce(
          (acc, row) => {
            acc[row.page] = row.count
            return acc
          },
          {} as Record<string, number>
        ),
      },
    })
  } catch (error) {
    console.error('Error fetching analytics:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    )
  }
}
