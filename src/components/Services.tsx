import { services } from "../data/site";

export function Services() {
  return (
    <section id="services" className="bg-white px-6 py-24 text-black">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-4xl font-bold md:text-5xl">
          Szolgáltatások és árak
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border p-6">
              <div className="mb-4 flex justify-between gap-4">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <span className="font-bold">{service.price}</span>
              </div>
              <p className="text-neutral-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}