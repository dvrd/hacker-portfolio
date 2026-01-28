export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-500">
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold glitch" data-text="> DAN CASTRILLO">
              &gt; DAN CASTRILLO
            </h1>
            <p className="text-xl md:text-2xl text-green-400">
              SOFTWARE ENGINEER
            </p>
            <p className="text-sm md:text-base text-green-500/70 terminal-cursor">
              10 YEARS BUILDING SYSTEMS
            </p>
            <div className="mt-8 pt-8 border-t border-green-500/20">
              <p className="text-xs text-green-500/50">
                🚀 Next.js 14+ initialized with Matrix theme
              </p>
              <p className="text-xs text-green-500/50 mt-2">
                📦 Ready for implementation - See ui-specs/hacker-portfolio/
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
