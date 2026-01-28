import { profile } from '@/lib/data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
        <div className="text-muted-foreground text-sm md:text-base font-mono">
          © {currentYear} {profile.name}. All rights reserved.
        </div>

        <div className="flex gap-8">
          <a
            href={`https://${profile.contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline transition-colors text-sm md:text-base font-mono underline-offset-4"
          >
            [GITHUB]
          </a>
          <a
            href={`mailto:${profile.contact.email}`}
            className="text-primary hover:underline transition-colors text-sm md:text-base font-mono underline-offset-4"
          >
            [EMAIL]
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-xs md:text-sm text-muted-foreground font-mono">
        &gt; Built with Next.js 15+ • Styled with Tailwind CSS v4 • Powered by Matrix_
      </div>
    </footer>
  )
}
