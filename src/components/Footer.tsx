import { business } from "../data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-neutral-400 md:flex-row">
        <p>© 2026 {business.name}. Minden jog fenntartva.</p>
        <p>Next.js + TypeScript + Tailwind CSS</p>
      </div>
    </footer>
  );
}