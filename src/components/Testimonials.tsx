import { testimonials } from "../data/site";

export function Testimonials() {
  return (
    <section className="bg-[#f8f3ea] px-5 py-24 text-black">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#c9963e]">
            Vélemények
          </p>
          <h2 className="text-4xl font-black md:text-5xl">
            Amit a vendégeink mondanak.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((review) => (
            <article
              key={review.name}
              className="rounded-3xl bg-white p-7 shadow-lg shadow-black/5"
            >
              <p className="mb-5 text-4xl text-[#c9963e]">“</p>
              <p className="mb-6 leading-7 text-neutral-700">{review.text}</p>
              <p className="mb-3 font-black">{review.name}</p>
              <p className="text-[#c9963e]">★★★★★</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}