"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-white px-6 py-24 text-black">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Kérj időpontot pár kattintással.
          </h2>

          <p className="mb-8 text-neutral-600">
            Töltsd ki az űrlapot, és visszajelzünk az elérhető időpontokról.
          </p>

          <p><strong>Telefon:</strong> +36 30 123 4567</p>
          <p><strong>Email:</strong> hello@sharpcut.hu</p>
          <p><strong>Cím:</strong> Budapest, Barber utca 12.</p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="rounded-3xl border p-6">
          <input name="name" required placeholder="Név" className="mb-4 w-full rounded-xl border px-4 py-3" />
          <input name="email" required type="email" placeholder="Email" className="mb-4 w-full rounded-xl border px-4 py-3" />
          <select name="service" className="mb-4 w-full rounded-xl border px-4 py-3">
            <option>Férfi hajvágás</option>
            <option>Szakáll igazítás</option>
            <option>Haj + szakáll csomag</option>
            <option>Gyerek hajvágás</option>
          </select>
          <textarea name="message" rows={5} placeholder="Mikor szeretnél jönni?" className="mb-6 w-full rounded-xl border px-4 py-3" />

          <button disabled={status === "loading"} className="w-full rounded-full bg-black px-8 py-3 font-semibold text-white">
            {status === "loading" ? "Küldés..." : "Időpontkérés küldése"}
          </button>

          {status === "success" && <p className="mt-4 text-green-700">Sikeres küldés!</p>}
          {status === "error" && <p className="mt-4 text-red-700">Hiba történt. Próbáld újra.</p>}
        </form>
      </div>
    </section>
  );
}