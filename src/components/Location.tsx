import { business } from "../data/site";

export function Location() {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    business.mapQuery
  )}&output=embed`;

  return (
    <section className="bg-[#f8f3ea] px-5 py-24 text-black">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#c9963e]">
            Lokáció
          </p>

          <h2 className="mb-6 text-4xl font-black md:text-5xl">
            Könnyen megközelíthető helyen.
          </h2>

          <p className="mb-8 leading-7 text-neutral-700">
            Szalonunk Budapest belvárosában található, kényelmesen elérhető
            tömegközlekedéssel és autóval is.
          </p>

          <div className="space-y-3 text-neutral-700">
            <p>📍 {business.address}</p>
            {business.openingHours.map((item) => (
              <p key={item}>🕘 {item}</p>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-black/10 shadow-xl">
          <iframe
            title="Google Maps"
            src={mapUrl}
            className="h-[420px] w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}