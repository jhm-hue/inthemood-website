import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tech | INTHEMOOD PICTURES",
  description:
    "Synthetic universes delivered at cinema and broadcast native resolution and fidelity.",
};

export default function Tech() {
  return (
    <div className="bg-background min-h-screen">
      {/* ── Hero Section ── */}
      <section className="px-8 md:px-16 pt-32 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left — Headline */}
          <div className="md:col-span-8">
            <h1 className="text-white font-heading font-bold text-4xl sm:text-6xl md:text-8xl tracking-[0.2em] uppercase leading-tight mb-12">
              We Can Deliver: Synthetic Universes
            </h1>
          </div>

          {/* Right — Body text */}
          <div className="md:col-span-4">
            <p className="font-sans font-light italic text-xl md:text-2xl leading-relaxed text-white/80 border-l border-white/10 pl-8">
              Our default is to provide content for cinema and broadcast native
              resolution and fidelity. When it comes to length and consistency,
              we are unlimited.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Visual: The Void Frame ── */}
      <section className="w-full h-[400px] md:h-[819px] bg-[#0e0e0e] relative overflow-hidden mb-40">
        {/* Cinematic background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-xFrKG8ZvwcmL7zXVzYrnoF4pEWPT4Qhksjwpp_ZbQBCxZTCcxT-wcwdws_x-3-odz-qHN7ojsg5EHzOrpDqCTlveBS715xPen9SFElA_vqpJ7AEvXC8PV_p4lGRnJYSsDCzuC4gK9Q1OVrFwzFGrH9vN3Fg_ONIkRCoYmTxktOzBh1Xj4Df4QpF6zQTbrpOzSGOHJSnQemBKefGDBsBTqSqR8_c_JqElA00y8UOGi5Q32rI7wDq9P42CEe5pmqd_G5s_tLvhJbw"
          alt="Abstract cinematic textures"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent" />

        {/* Floating tech specs overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-12">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
            {/* Current Pipeline */}
            <div>
              <span className="block font-sans text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2">
                Current Pipeline
              </span>
              <span className="font-heading font-bold text-lg tracking-[0.1em] text-white">
                8K NATIVE / NEURAL RENDER
              </span>
            </div>

            {/* Fidelity */}
            <div>
              <span className="block font-sans text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2">
                Fidelity
              </span>
              <span className="font-heading font-bold text-lg tracking-[0.1em] text-white">
                LOSSLESS
              </span>
            </div>

            {/* Latency */}
            <div>
              <span className="block font-sans text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2">
                Latency
              </span>
              <span className="font-heading font-bold text-lg tracking-[0.1em] text-white">
                0.00ms
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote Section ── */}
      <section className="px-8 md:px-16 mb-40">
        <div className="max-w-4xl mx-auto text-center py-20 bg-[#1c1b1b] border-y border-white/5">
          <blockquote className="px-8 md:px-16">
            <p className="font-heading font-bold text-2xl sm:text-3xl md:text-5xl tracking-[0.1em] uppercase leading-relaxed text-white mb-8">
              &ldquo;The future will be better tomorrow&rdquo;
            </p>
            <cite className="font-sans font-light italic text-lg text-white/60 not-italic">
              — Dan Quayle
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ── Tech Capabilities: Bento Grid ── */}
      <section className="px-8 md:px-16 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px]">
          {/* Card 1: Neural Architecture */}
          <div className="aspect-square flex flex-col items-center justify-center text-center p-12 md:p-16 bg-[#2a2a2a]">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-white/60 mb-10"
            >
              <circle cx="32" cy="12" r="5" />
              <circle cx="12" cy="52" r="5" />
              <circle cx="52" cy="52" r="5" />
              <circle cx="32" cy="36" r="3" />
              <line x1="32" y1="17" x2="32" y2="33" />
              <line x1="29" y1="37" x2="15" y2="48" />
              <line x1="35" y1="37" x2="49" y2="48" />
              <line x1="12" y1="52" x2="52" y2="52" />
            </svg>
            <h3 className="font-heading font-bold text-2xl md:text-3xl tracking-[0.15em] uppercase text-white mb-4">
              Neural Architecture
            </h3>
            <p className="font-sans font-light italic text-lg text-white/60 max-w-xs">
              Proprietary engines designed for pixel-perfect environmental
              generation.
            </p>
          </div>

          {/* Card 2: Unbounded Scaling */}
          <div className="aspect-square flex flex-col items-center justify-center text-center p-12 md:p-16 bg-[#1c1b1b]">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-white/60 mb-10"
            >
              <path d="M32 4 L60 32 L32 60 L4 32 Z" />
              <path d="M32 16 L48 32 L32 48 L16 32 Z" />
              <circle cx="32" cy="32" r="4" />
            </svg>
            <h3 className="font-heading font-bold text-2xl md:text-3xl tracking-[0.15em] uppercase text-white mb-4">
              Unbounded Scaling
            </h3>
            <p className="font-sans font-light italic text-lg text-white/60 max-w-xs">
              From individual particles to planetary systems without loss of
              detail.
            </p>
          </div>

          {/* Card 3: Native Delivery */}
          <div className="aspect-square flex flex-col items-center justify-center text-center p-12 md:p-16 bg-[#2a2a2a]">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-white/60 mb-10"
            >
              <rect x="6" y="10" width="52" height="34" />
              <line x1="6" y1="44" x2="58" y2="44" />
              <line x1="24" y1="50" x2="40" y2="50" />
              <line x1="32" y1="44" x2="32" y2="50" />
              <polygon points="24,22 24,36 40,29" fill="currentColor" stroke="none" />
            </svg>
            <h3 className="font-heading font-bold text-2xl md:text-3xl tracking-[0.15em] uppercase text-white mb-4">
              Native Delivery
            </h3>
            <p className="font-sans font-light italic text-lg text-white/60 max-w-xs">
              Seamless integration into modern cinema and broadcast workflows.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="px-8 md:px-16 flex justify-center mb-24">
        <Link
          href="/contact"
          className="rounded-none bg-white text-[#131313] px-12 py-6 font-heading font-bold text-sm tracking-[0.4em] uppercase hover:bg-[#d4d4d4] transition-colors"
        >
          Initialize Connection
        </Link>
      </section>
    </div>
  );
}
