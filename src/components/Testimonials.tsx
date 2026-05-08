import { testimonials } from "../data/site";

export function Testimonials() {
  return (
    <section className="bg-neutral-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-4xl font-bold md:text-5xl">Vélemények</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((review) => (
            <div key={review.name} className="rounded-3xl bg-neutral-800 p-6">
              <p className="mb-6 text-neutral-300">“{review.text}”</p>
              <p className="font-bold">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}