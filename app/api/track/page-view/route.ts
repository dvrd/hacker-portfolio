import { NextRequest, NextResponse } from 'next/server'
import { trackPageView } from '@/lib/actions'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { pagePath } = body

    if (!pagePath) {
      return NextResponse.json(
        { error: 'pagePath is required' },
        { status: 400 }
      )
    }

    const ip = request.headers.get('x-forwarded-for') || request.ip
    const userAgent = request.headers.get('user-agent')
    const referer = request.headers.get('referer')

    await trackPageView({
      pagePath,
      ip,
      userAgent,
      referer,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error tracking page view:', error)
    return NextResponse.json(
      { error: 'Failed to track page view' },
      { status: 500 }
    )
  }
}
