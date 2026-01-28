import { profile } from '@/lib/data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-green-500/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-green-500/70 text-sm font-mono">
            © {currentYear} {profile.name}. All rights reserved.
          </div>

          <div className="flex gap-6">
            <a
              href={`https://${profile.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition-colors text-sm font-mono"
            >
              [GITHUB]
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className="text-green-500 hover:text-green-400 transition-colors text-sm font-mono"
            >
              [EMAIL]
            </a>
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-green-500/50 font-mono">
          &gt; Built with Next.js 14+ • Styled with Tailwind CSS v4 • Powered by Matrix_
        </div>
      </div>
    </footer>
  )
}
