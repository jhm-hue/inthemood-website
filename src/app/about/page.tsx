import type { Metadata } from "next";

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
            <h1 className="font-heading font-bold text-7xl md:text-9xl tracking-[0.2em] uppercase leading-tight text-white mb-12">
              OUR
              <br />
              STORY
            </h1>
            <div className="w-24 h-px bg-white/20" />
          </header>

          {/* Minimalist Content Flow */}
          <div className="space-y-48">
            {/* Primary Intro */}
            <section className="max-w-3xl">
              <p className="font-sans font-light italic text-2xl md:text-3xl leading-[1.8] text-white/90">
                INTHEMOOD is a Norwegian production company and high-end tech
                house with an opportunistic mindset. We are based in Oslo. We
                believe the future will be different than today. In the years
                that lies ahead, the past will provide insight to the path best
                suitable for achieving the curve that will land us on the perfect
                wave.
              </p>
            </section>

            {/* Production & Vision — right-aligned */}
            <section className="max-w-3xl ml-auto">
              <p className="font-sans font-light italic text-xl md:text-2xl leading-[1.8] text-white/80">
                The company produces all types of formats such as feature,
                animation, TV drama, commercials and documentary. We work with
                both fresh and established talent for long-term relationships. We
                focus on innovation, quality, diversity, at all levels, for
                reaching an audience both locally and globally.
              </p>
            </section>

            {/* Team Section */}
            <section className="max-w-3xl py-24 border-y border-white/5">
              <h2 className="font-heading font-bold tracking-[0.4em] uppercase text-sm text-white/60 mb-12">
                TEAM
              </h2>
              <p className="font-sans font-light italic text-xl md:text-2xl leading-[1.8] text-white/90">
                The team holds a broad capacity with long experience from both
                media, film, commercials, tech, entrepreneurship, art and
                digital integration. We know that R&amp;D is the name of the
                game, so we are committed to allocating a majority of our
                resources to innovation.
              </p>
            </section>

            {/* Final Statement */}
            <section className="text-center py-24">
              <div className="w-px h-24 bg-white/20 mx-auto mb-16" />
              <p className="font-sans font-light italic text-xl tracking-wide text-white/60 uppercase">
                Innovation through curation.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
