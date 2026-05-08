import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <Image
        src="/images/barber-hero.jpg"
        alt="Modern barber shop"
        fill
        priority
        className="object-cover opacity-35"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-neutral-400">
            Prémium barber élmény
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Modern hajvágás és szakáll igazítás férfiaknak.
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-neutral-300">
            Profi barber szolgáltatás, időpontkéréssel, átlátható árakkal és prémium ügyfélélménnyel.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="rounded-full bg-white px-8 py-3 text-center font-semibold text-black">
              Időpontot kérek
            </a>
            <a href="#services" className="rounded-full border border-white/30 px-8 py-3 text-center font-semibold">
              Árlista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}