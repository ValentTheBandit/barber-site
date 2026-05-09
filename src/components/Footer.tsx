import { business } from "../data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 text-sm text-neutral-400 md:grid-cols-3">
        <div>
          <p className="mb-2 text-lg font-black text-white">{business.name}</p>
          <p>Prémium barber élmény modern férfiaknak.</p>
        </div>

        <div>
          <p className="mb-2 font-bold text-white">Kapcsolat</p>
          <p>{business.phone}</p>
          <p>{business.email}</p>
          <p>{business.address}</p>
        </div>

        <div>
          <p className="mb-2 font-bold text-white">Információk</p>
          <div className="flex flex-col gap-1">
            <a href="#services" className="hover:text-[#c9963e]">
              Szolgáltatások
            </a>
            <a href="#gallery" className="hover:text-[#c9963e]">
              Galéria
            </a>
            <a href="#contact" className="hover:text-[#c9963e]">
              Időpontkérés
            </a>
            <a href="/adatkezeles" className="hover:text-[#c9963e]">
              Adatkezelés
            </a>
            <a href="/impresszum" className="hover:text-[#c9963e]">
              Impresszum
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-neutral-500">
        © 2026 {business.name}. Minden jog fenntartva.
      </div>
    </footer>
  );
}