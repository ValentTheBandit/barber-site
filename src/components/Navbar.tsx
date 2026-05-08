export function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold">
          SharpCut Barber
        </a>

        <nav className="hidden gap-8 text-sm text-neutral-300 md:flex">
          <a href="#services" className="hover:text-white">Szolgáltatások</a>
          <a href="#gallery" className="hover:text-white">Galéria</a>
          <a href="#contact" className="hover:text-white">Kapcsolat</a>
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-neutral-200"
        >
          Foglalás
        </a>
      </div>
    </header>
  );
}