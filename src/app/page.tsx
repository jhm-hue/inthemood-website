import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "INTHEMOOD PICTURES",
  description:
    "Norwegian production company and high-end tech house with an opportunistic mindset.",
};

export default function Home() {
  return (
    <div>
      {/* ── Hero Section ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background placeholder */}
        <div className="absolute inset-0 bg-[#1c1b1b]" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#131313] via-transparent to-[#131313]/60" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-8">
          <h1 className="hero-animate font-heading font-extrabold text-5xl md:text-8xl lg:text-[7.5rem] tracking-[0.25em] uppercase leading-none text-white" style={{ animationDelay: "0.2s" }}>
            INTHEMOOD PICTURES
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
          <span className="hero-animate font-sans text-[10px] uppercase tracking-[0.3em] text-white/30" style={{ animationDelay: "0.8s" }}>
            Scroll to Explore
          </span>
          <div className="hero-line-animate w-px h-12 bg-white/20" style={{ animationDelay: "1s" }} />
        </div>
      </section>

      {/* ── Our Story Section ── */}
      <section className="py-32 md:py-64 px-8 md:px-16 relative">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="glass-panel p-12 md:p-24 relative">
              <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-8">
                Origins / Protocol
              </span>
              <h2 className="font-heading font-bold text-4xl md:text-6xl tracking-[0.2em] uppercase mb-16">
                OUR STORY
              </h2>
              <div className="space-y-12 max-w-3xl">
                <p className="font-sans text-2xl md:text-3xl leading-relaxed font-light text-white/90">
                  INTHEMOOD is a Norwegian production company and high-end tech
                  house with an opportunistic mindset. We are based in Oslo. We
                  believe the future will be different than today.
                </p>
                <p className="font-sans text-xl md:text-2xl leading-relaxed font-light text-white/50">
                  By embracing intentional asymmetry and the luxury of negative
                  space, INTHEMOOD PICTURES defines the next era of architectural
                  cinema through technical precision.
                </p>
              </div>
              <div className="mt-24">
                <Link
                  href="/about"
                  className="inline-block px-12 py-6 border border-white/20 text-white font-sans uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500"
                >
                  Access Archive
                </Link>
              </div>
              <div className="absolute top-0 right-0 p-4 font-sans text-[8px] text-white/20 tracking-widest">
                v.04 // Oslo
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Selected Filmography ── */}
      <section className="py-32 md:py-48 px-8 md:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-24 flex flex-col md:flex-row justify-between items-baseline gap-8">
              <h2 className="font-heading font-bold text-4xl md:text-6xl tracking-[0.2em] uppercase">
                SELECTED
                <br />
                FILMOGRAPHY
              </h2>
              <p className="font-sans text-xs uppercase tracking-widest text-white/40">
                2019 — 2024
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {/* CATTLE HILL */}
            <Reveal delay={0}>
              <div className="glass-panel p-10 md:p-16 flex flex-col md:flex-row justify-between items-center group cursor-pointer hover:bg-white/[0.05] transition-all duration-500">
                <div className="flex flex-col gap-4">
                  <h3 className="font-heading font-bold text-4xl md:text-6xl tracking-widest uppercase text-white">
                    CATTLE HILL
                  </h3>
                  <p className="font-sans font-light text-lg text-white/50">
                    Best Children&apos;s Film — Amanda Nominated
                  </p>
                </div>
                <div className="mt-8 md:mt-0 text-right">
                  <span className="font-heading text-xl tracking-[0.2em] text-white/80 block">
                    2019
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40">
                    Nominated
                  </span>
                </div>
              </div>
            </Reveal>

            {/* MERCY */}
            <Reveal delay={60}>
              <div className="glass-panel p-10 md:p-16 flex flex-col md:flex-row justify-between items-center group cursor-pointer hover:bg-white/[0.05] transition-all duration-500">
                <div className="flex flex-col gap-4">
                  <h3 className="font-heading font-bold text-4xl md:text-6xl tracking-widest uppercase text-white">
                    MERCY
                  </h3>
                  <p className="font-sans font-light text-lg text-white/50">
                    Nominated for the Golden Bear — Feature Film
                  </p>
                </div>
                <div className="mt-8 md:mt-0 text-right">
                  <span className="font-heading text-xl tracking-[0.2em] text-white/80 block">
                    2024
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40">
                    Berlin Selection
                  </span>
                </div>
              </div>
            </Reveal>

            {/* NOW I AM ALSO HERE */}
            <Reveal delay={120}>
              <div className="glass-panel p-10 md:p-16 flex flex-col md:flex-row justify-between items-center group cursor-pointer hover:bg-white/[0.05] transition-all duration-500">
                <div className="flex flex-col gap-4">
                  <h3 className="font-heading font-bold text-4xl md:text-6xl tracking-widest uppercase text-white">
                    NOW I AM ALSO HERE
                  </h3>
                </div>
                <div className="mt-8 md:mt-0 text-right">
                  <span className="font-heading text-xl tracking-[0.2em] text-white/80 block">
                    2022
                  </span>
                </div>
              </div>
            </Reveal>

            {/* PLAY SCHENGEN */}
            <Reveal delay={180}>
              <div className="glass-panel p-10 md:p-16 flex flex-col md:flex-row justify-between items-center group cursor-pointer hover:bg-white/[0.05] transition-all duration-500">
                <div className="flex flex-col gap-4">
                  <h3 className="font-heading font-bold text-4xl md:text-6xl tracking-widest uppercase text-white">
                    PLAY SCHENGEN
                  </h3>
                  <p className="font-sans font-light text-lg text-white/50">
                    Official Selection — Short Film
                  </p>
                </div>
                <div className="mt-8 md:mt-0 text-right">
                  <span className="font-heading text-xl tracking-[0.2em] text-white/80 block">
                    2022
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40">
                    Locarno / Chicago
                  </span>
                </div>
              </div>
            </Reveal>

            {/* PLATTFORM */}
            <Reveal delay={240}>
              <div className="glass-panel p-10 md:p-16 flex flex-col md:flex-row justify-between items-center group cursor-pointer hover:bg-white/[0.05] transition-all duration-500">
                <div className="flex flex-col gap-4">
                  <h3 className="font-heading font-bold text-4xl md:text-6xl tracking-widest uppercase text-white">
                    PLATTFORM
                  </h3>
                </div>
                <div className="mt-8 md:mt-0 text-right">
                  <span className="font-heading text-xl tracking-[0.2em] text-white/80 block">
                    2021
                  </span>
                </div>
              </div>
            </Reveal>

            {/* HÁLDI */}
            <Reveal delay={300}>
              <div className="glass-panel p-10 md:p-16 flex flex-col md:flex-row justify-between items-center group cursor-pointer hover:bg-white/[0.05] transition-all duration-500">
                <div className="flex flex-col gap-4">
                  <h3 className="font-heading font-bold text-4xl md:text-6xl tracking-widest uppercase text-white">
                    H&Aacute;LDI
                  </h3>
                  <p className="font-sans font-light text-lg text-white/50">
                    Opening Exhibition — National Museum
                  </p>
                </div>
                <div className="mt-8 md:mt-0 text-right">
                  <span className="font-heading text-xl tracking-[0.2em] text-white/80 block">
                    2021
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40">
                    Exhibition
                  </span>
                </div>
              </div>
            </Reveal>

            {/* APART */}
            <Reveal delay={360}>
              <div className="glass-panel p-10 md:p-16 flex flex-col md:flex-row justify-between items-center group cursor-pointer hover:bg-white/[0.05] transition-all duration-500">
                <div className="flex flex-col gap-4">
                  <h3 className="font-heading font-bold text-4xl md:text-6xl tracking-widest uppercase text-white">
                    APART
                  </h3>
                </div>
                <div className="mt-8 md:mt-0 text-right">
                  <span className="font-heading text-xl tracking-[0.2em] text-white/80 block">
                    2020
                  </span>
                </div>
              </div>
            </Reveal>

            {/* I WAS A KILLER FOR THE POPE */}
            <Reveal delay={420}>
              <div className="glass-panel p-10 md:p-16 flex flex-col md:flex-row justify-between items-center group cursor-pointer hover:bg-white/[0.05] transition-all duration-500">
                <div className="flex flex-col gap-4">
                  <h3 className="font-heading font-bold text-4xl md:text-6xl tracking-widest uppercase text-white">
                    I WAS A KILLER FOR THE POPE
                  </h3>
                </div>
                <div className="mt-8 md:mt-0 text-right">
                  <span className="font-heading text-xl tracking-[0.2em] text-white/80 block">
                    2020
                  </span>
                </div>
              </div>
            </Reveal>

            {/* MIND OF MODERNISM */}
            <Reveal delay={480}>
              <div className="glass-panel p-10 md:p-16 flex flex-col md:flex-row justify-between items-center group cursor-pointer hover:bg-white/[0.05] transition-all duration-500">
                <div className="flex flex-col gap-4">
                  <h3 className="font-heading font-bold text-4xl md:text-6xl tracking-widest uppercase text-white">
                    MIND OF MODERNISM
                  </h3>
                  <p className="font-sans font-light text-lg text-white/50">
                    Feature Documentary — Premiered Haugesund
                  </p>
                </div>
                <div className="mt-8 md:mt-0 text-right">
                  <span className="font-heading text-xl tracking-[0.2em] text-white/80 block">
                    2020
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40">
                    Premiere
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Synthetic Universes / Tech Section ── */}
      <section className="py-32 md:py-48 px-8 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 technical-grid opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <Reveal>
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-8">
                  Technical Labs / R&amp;D
                </span>
                <h2 className="font-heading font-bold text-4xl md:text-6xl tracking-[0.2em] uppercase leading-tight mb-12">
                  SYNTHETIC
                  <br />
                  UNIVERSES
                </h2>
                <p className="font-sans text-xl leading-relaxed font-light text-white/60 max-w-lg mb-16">
                  We architect new physics, lighting, and textures that bypass the
                  &ldquo;uncanny valley&rdquo; to reach pure cinematic truth
                  through high-fidelity digital craftsmanship.
                </p>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Reveal delay={100}>
                  <div className="glass-panel p-8">
                    <h4 className="font-sans uppercase text-[10px] tracking-[0.3em] mb-4 text-white">
                      Unreal Integration
                    </h4>
                    <p className="font-sans text-sm text-white/40">
                      Real-time photogrammetry workflows for architectural
                      fidelity.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={200}>
                  <div className="glass-panel p-8">
                    <h4 className="font-sans uppercase text-[10px] tracking-[0.3em] mb-4 text-white">
                      Volumetric Capture
                    </h4>
                    <p className="font-sans text-sm text-white/40">
                      Preserving human soul within coordinate-based 3D space.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
            <Reveal delay={150}>
              <div className="lg:mt-32">
                <div className="glass-panel p-16 aspect-square flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-24 h-px bg-white/20 mx-auto mb-8" />
                    <span className="font-sans text-[8px] uppercase tracking-[1.5em] text-white/60 block mb-4">
                      RENDER STATUS
                    </span>
                    <div className="font-heading font-bold text-7xl tracking-tighter text-white/90">
                      99.9%
                    </div>
                    <div className="w-24 h-px bg-white/20 mx-auto mt-8" />
                  </div>
                  <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-white/20" />
                  <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-white/20" />
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 font-sans text-[8px] text-white/10 rotate-90 tracking-widest">
                    PROTOCOL_8821
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
