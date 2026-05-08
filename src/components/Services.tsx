import { services } from "../data/site";

export function Services() {
  return (
    <section id="services" className="bg-[#f8f3ea] px-5 py-24 text-black">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#c9963e]">
            Árlista
          </p>
          <h2 className="text-4xl font-black md:text-5xl">
            Szolgáltatások és árak
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-black/10 bg-white p-7 text-center shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#c9963e] text-3xl">
                {service.icon}
              </div>

              <h3 className="mb-3 text-xl font-black">{service.title}</h3>

              <p className="mb-5 text-sm leading-6 text-neutral-600">
                {service.description}
              </p>

              <p className="text-2xl font-black text-[#c9963e]">
                {service.price}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}