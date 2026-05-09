"use client";

import { useState } from "react";
import { business } from "../data/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("success");
    event.currentTarget.reset();
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0b0b0b] px-5 py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#c9963e22,transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#c9963e]">
            Időpontkérés
          </p>

          <h2 className="mb-6 text-4xl font-black text-white md:text-5xl">
            Kérj időpontot pár kattintással.
          </h2>

          <p className="mb-8 leading-7 text-neutral-300">
            Töltsd ki az űrlapot, és visszajelzünk az elérhető időpontokról.
          </p>

          <div className="space-y-4 text-neutral-200">
            <p>📞 {business.phone}</p>
            <p>✉️ {business.email}</p>
            <p>📍 {business.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white p-6 text-black shadow-2xl"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="name"
              required
              placeholder="Név"
              className="rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#c9963e]"
            />

            <input
              name="email"
              required
              type="email"
              placeholder="Email"
              className="rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#c9963e]"
            />
          </div>

          <input
            name="phone"
            placeholder="Telefonszám"
            className="mt-4 w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#c9963e]"
          />

          <select
            name="service"
            className="mt-4 w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#c9963e]"
          >
            <option>Férfi hajvágás</option>
            <option>Szakáll igazítás</option>
            <option>Haj + szakáll csomag</option>
            <option>Gyerek hajvágás</option>
          </select>

          <textarea
            name="message"
            rows={5}
            placeholder="Mikor szeretnél jönni?"
            className="mt-4 w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#c9963e]"
          />

          <button className="mt-5 w-full rounded-xl bg-[#c9963e] px-8 py-4 font-black text-black transition hover:bg-[#f0c36a]">
            Időpontkérés küldése
          </button>

          {status === "success" && (
            <p className="mt-4 rounded-xl bg-green-100 p-4 text-sm text-green-800">
              Demo sikeres! Éles oldalon ez EmailJS / saját backend felé küldene.
            </p>
          )}

          <p className="mt-4 text-xs text-neutral-500">
            Az adataidat bizalmasan kezeljük, és csak az időpont egyeztetésére
            használjuk.
          </p>
        </form>
      </div>
    </section>
  );
}