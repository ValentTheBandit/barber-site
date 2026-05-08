export function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-3">
          <span className="text-2xl">✂️</span>
          <div className="leading-none">
            <p className="text-xl font-black tracking-wide text-white">
              SharpCut
            </p>
            <p className="text-xs font-bold tracking-[0.35em] text-[#d5a34f]">
              BARBER
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-10 text-sm font-medium text-neutral-200 md:flex">
          <a href="#services" className="hover:text-[#d5a34f]">
            Szolgáltatások
          </a>
          <a href="#gallery" className="hover:text-[#d5a34f]">
            Galéria
          </a>
          <a href="#contact" className="hover:text-[#d5a34f]">
            Kapcsolat
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-lg bg-[#d5a34f] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-[#f0c36a]"
        >
          Foglalás
        </a>
      </div>
    </header>
  );
}