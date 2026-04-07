import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About | INTHEMOOD PICTURES",
};

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-48 pb-32">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          {/* Hero Heading */}
          <header className="mb-32">
            <Reveal>
              <h1 className="font-heading font-bold text-7xl md:text-9xl tracking-[0.2em] uppercase leading-tight text-white mb-12">
                OUR
                <br />
                STORY
              </h1>
              <div className="w-24 h-px bg-white/20" />
            </Reveal>
          </header>

          {/* Content */}
          <Reveal>
            <section className="max-w-3xl">
              <p className="font-sans font-light text-lg md:text-xl leading-[1.8] text-white/90">
                INTHEMOOD is a Norwegian production company, based in Oslo.
                We develop and produces feature, TV drama and animation with
                relevance for today. We work with both fresh and established
                talents for long-term relationships. We focus on innovation,
                quality, diversity, at all levels, for reaching an audience
                both locally and globally.
              </p>
            </section>
          </Reveal>
        </div>
      </main>
    </div>
  );
}
