import type { ReactNode } from 'react'

export const metadata = {
  title: 'Get Your AI-Matched Car Quote | Visio Lead Gen',
  description:
    'Find your perfect car in 60 seconds. AI matches you with the best deals from top Gauteng dealerships.',
}

export default function GetQuoteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col bg-[#0a0f0d]">
      {/* Minimal header — logo only */}
      <header className="px-4 py-4 flex items-center justify-center sm:justify-start sm:px-6">
        <a href="/" className="flex items-center gap-2 group">
          <div className="size-8 rounded-lg bg-blue-500 flex items-center justify-center text-black font-bold text-sm group-hover:bg-blue-400 transition-colors">
            VA
          </div>
          <span className="text-lg font-semibold text-white tracking-tight">
            Visio <span className="text-blue-400">Auto</span>
          </span>
        </a>
      </header>

      <main className="flex-1 flex flex-col">{children}</main>

      {/* Minimal footer */}
      <footer className="px-4 py-6 text-center text-xs text-zinc-500">
        Powered by Visio Lead Gen AI &middot; Gauteng, South Africa
      </footer>
    </div>
  )
}
