export function Location() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Könnyen megközelíthető helyen.
          </h2>

          <p className="mb-8 text-neutral-300">
            Budapest belvárosában, tömegközlekedéssel és autóval is könnyen elérhető.
          </p>

          <p><strong>Nyitvatartás:</strong> Hétfő - Péntek, 9:00 - 19:00</p>
          <p><strong>Szombat:</strong> 10:00 - 16:00</p>
          <p><strong>Vasárnap:</strong> Zárva</p>
        </div>

        <iframe
          title="Google Maps"
          src="https://www.google.com/maps?q=Budapest&output=embed"
          className="h-96 w-full rounded-3xl border-0"
          loading="lazy"
        />
      </div>
    </section>
  );
}