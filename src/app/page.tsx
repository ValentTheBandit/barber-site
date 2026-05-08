import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Gallery } from "../components/Gallery";
import { Hero } from "../components/Hero";
import { Location } from "../components/Location";
import { Navbar } from "../components/Navbar";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Location />
      <Footer />
    </main>
  );
}