"use client";

import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: "Szolgáltatások" },
    { href: "#gallery", label: "Galéria" },
    { href: "#contact", label: "Kapcsolat" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/85 backdrop-blur-xl">
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
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[#d5a34f]">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-lg bg-[#d5a34f] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-[#f0c36a] md:block"
        >
          Foglalás
        </a>

        <button
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg border border-white/10 px-3 py-2 text-white md:hidden"
          aria-label="Menü megnyitása"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl bg-white/5 px-4 py-3 text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-[#d5a34f] px-4 py-3 text-center font-bold text-black"
            >
              Foglalás
            </a>
          </div>
        </div>
      )}
    </header>
  );
}