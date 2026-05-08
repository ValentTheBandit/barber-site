import Image from "next/image";
import { galleryImages } from "../data/site";

export function Gallery() {
  return (
    <section id="gallery" className="bg-[#0b0b0b] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#c9963e]">
              Galéria
            </p>
            <h2 className="text-4xl font-black text-white md:text-5xl">
              Hangulat és precizitás.
            </h2>
          </div>

          <a
            href="#contact"
            className="w-fit rounded-xl border border-[#c9963e] px-5 py-3 text-sm font-bold text-[#c9963e] transition hover:bg-[#c9963e] hover:text-black"
          >
            Foglalás most
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image}
              className="group relative h-72 overflow-hidden rounded-3xl border border-[#c9963e]/30 bg-neutral-900"
            >
              <Image
                src={image}
                alt="Barber galéria"
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}