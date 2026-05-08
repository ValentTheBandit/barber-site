import Image from "next/image";
import { galleryImages } from "../data/site";

export function Gallery() {
  return (
    <section id="gallery" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-4xl font-bold md:text-5xl">Galéria</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {galleryImages.map((image) => (
            <div key={image} className="relative h-80 overflow-hidden rounded-3xl">
              <Image src={image} alt="Barber galéria" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}