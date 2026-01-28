'use client'

import { useState } from 'react'
import { profile } from '@/lib/data'
import { trackCVDownload } from '@/lib/actions'

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
    <button
      onClick={handleDownload}
      disabled={downloading}
      className="group relative px-8 py-4 bg-black border-2 border-green-500 text-green-500 font-mono font-bold text-lg hover:bg-green-500 hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span className="relative z-10">
        {downloading ? '[DOWNLOADING...]' : '[DOWNLOAD CV]'}
      </span>

      <div className="absolute inset-0 bg-green-500/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
    </button>
  )
}
