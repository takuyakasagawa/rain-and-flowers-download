export default function Footer() {
  return (
    <footer className="px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 py-20 sm:grid-cols-2 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-black/40">
              Rain and Flowers
            </p>

            <p className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
              FOLLOW US
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-4 text-xs tracking-[0.15em]">
            <a
              href="https://push.fm/fl/rainandflowers"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-transparent pb-1 transition hover:border-black"
            >
              MUSIC ↗
            </a>

            <a
              href="https://www.instagram.com/rain_n_flowers/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-transparent pb-1 transition hover:border-black"
            >
              INSTAGRAM ↗
            </a>

            <a
              href="https://www.youtube.com/@rainandflowers3125"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-transparent pb-1 transition hover:border-black"
            >
              YOUTUBE ↗
            </a>

            <a
              href="https://x.com/rain_and_flower"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-transparent pb-1 transition hover:border-black"
            >
              X ↗
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-black/20 py-6 text-[9px] tracking-[0.18em] text-black/40 sm:flex-row sm:justify-between">
          <p>© 2026 Rain and Flowers</p>
        </div>
      </div>
    </footer>
  );
}