'use client'

import { useState } from 'react'
import { profile } from '@/lib/data'
import { trackCVDownload } from '@/lib/actions'
import { Button } from './ui/button'

export function DownloadCVButton() {
  const [downloading, setDownloading] = useState(false)

  const handleDownload = async () => {
    setDownloading(true)

    try {
      // Track the download
      await trackCVDownload({
        ip: null, // In production, get from headers
        userAgent: navigator.userAgent,
        referer: document.referrer || null,
      })

      // Trigger download
      const link = document.createElement('a')
      link.href = profile.cv_url
      link.download = `${profile.name.replace(/\s+/g, '_')}_CV.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Download failed:', error)
    } finally {
      setTimeout(() => setDownloading(false), 1000)
    }
  }

  return (
    <Button
      onClick={handleDownload}
      disabled={downloading}
      size="lg"
      className="font-bold text-base"
    >
      {downloading ? 'DOWNLOADING...' : 'DOWNLOAD CV'}
    </Button>
  )
}
