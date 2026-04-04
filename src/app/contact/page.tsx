import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | INTHEMOOD PICTURES",
};

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center pt-32 pb-16 px-6">
      {/* Header */}
      <header className="mb-24 text-center">
        <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-[0.2em] uppercase text-white mb-6">
          CONTACT
        </h1>
        <p className="font-sans font-light italic text-white/70 text-lg tracking-wide max-w-xl mx-auto">
          We are always looking for the next story to tell. Reach out for
          collaborations, press inquiries, or general thoughts on cinema.
        </p>
      </header>

      {/* Two-Column Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full max-w-4xl">
        {/* Left: Contact Information */}
        <div className="flex flex-col space-y-12">
          <section>
            <h2 className="font-heading font-bold uppercase tracking-[0.15em] text-xs text-white mb-4">
              Leadership
            </h2>
            <div className="font-sans font-light italic text-white/80 leading-relaxed">
              <span className="font-bold uppercase tracking-widest text-[10px] block mb-1 not-italic">
                INGVILD EVJEMO, CEO and Producer
              </span>
              ingvild@inthemoodfilm.com
              <br />
              +47 97664222
            </div>
          </section>

          <section>
            <h2 className="font-heading font-bold uppercase tracking-[0.15em] text-xs text-white mb-4">
              General Inquiries
            </h2>
            <p className="font-sans font-light italic text-white/80">
              post@inthemoodfilm.com
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold uppercase tracking-[0.15em] text-xs text-white mb-4">
              The Studio
            </h2>
            <div className="font-sans font-light italic text-white/80 leading-relaxed">
              INTHEMOOD PICTURES
              <br />
              Rathkes gate 9 A
              <br />
              0558 Oslo, Norway
            </div>
          </section>

          <section>
            <h2 className="font-heading font-bold uppercase tracking-[0.15em] text-xs text-white mb-4">
              Social Presence
            </h2>
            <div className="flex gap-8">
              <a
                href="https://www.instagram.com/inthemood_film/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-light italic text-white/70 hover:text-white transition-colors duration-500 underline decoration-white/20"
              >
                Instagram
              </a>
            </div>
          </section>
        </div>

        {/* Right: Contact Form */}
        <div className="flex flex-col">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
