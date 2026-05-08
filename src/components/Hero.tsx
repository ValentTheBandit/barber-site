import Image from "next/image";
import { business } from "../data/site";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden px-5 pt-28">
      <Image
        src="/images/barber-hero.jpg"
        alt="Prémium barber shop"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-center">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#d5a34f]">
            Prémium barber élmény
          </p>

          <h1 className="mb-6 text-5xl font-black leading-tight text-white md:text-7xl">
            Stílusos hajvágás modern férfiaknak.
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-8 text-neutral-200">
            Precíz férfi hajvágás, szakáll igazítás és prémium ügyfélélmény
            Budapest szívében.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-xl bg-[#d5a34f] px-7 py-4 text-center font-bold text-black transition hover:bg-[#f0c36a]"
            >
              Időpont foglalás
            </a>

            <a
              href={`tel:${business.phone}`}
              className="rounded-xl border border-white/30 px-7 py-4 text-center font-bold text-white transition hover:border-[#d5a34f] hover:text-[#d5a34f]"
            >
              {business.phone}
            </a>
          </div>

          <div className="mt-10 grid gap-4 text-sm text-neutral-200 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              ⭐ Profi szakértelem
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              💈 Minőségi termékek
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              🕒 Pontos időpontok
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}