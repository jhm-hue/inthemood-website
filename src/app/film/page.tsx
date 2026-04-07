import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Film | INTHEMOOD PICTURES",
  description:
    "Filmography of Ingvild Evjemo — producer with over 16 years of international experience in the film industry.",
};

export default function Film() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-40 pb-24 px-8 md:px-16 max-w-[1600px] mx-auto">
        {/* Hero Editorial Section */}
        <Reveal>
          <header className="flex flex-col md:flex-row gap-12 items-end mb-32">
            <div className="md:w-2/3">
              <h1 className="font-heading font-extrabold text-7xl md:text-9xl tracking-[0.15em] uppercase leading-none text-white">
                FILMO
                <br />
                GRAPHY
              </h1>
            </div>
            <div className="md:w-1/3 mb-4">
              <p className="font-sans font-light text-xl leading-relaxed text-white/70 max-w-md">
                Ingvild Evjemo has over 16 years of international experience
                in the film industry, and is a certified Diversity Leader.
              </p>
            </div>
          </header>
        </Reveal>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Bio Label */}
          <div className="md:col-span-4 flex flex-col gap-12">
            <Reveal>
              <div className="p-8">
                <div className="h-px w-12 bg-white/40 mb-6" />
                <span className="font-heading text-xs tracking-[0.3em] uppercase text-white/50">
                  Berlin / Oslo
                </span>
              </div>
            </Reveal>
          </div>

          {/* Project Grid */}
          <div className="md:col-span-8 flex flex-col gap-12">
            {/* Featured — CATTLE HILL */}
            <Reveal>
              <div className="glass-panel p-10 md:p-16 flex flex-col md:flex-row gap-12">
                <div className="flex-1 space-y-6">
                  <div className="flex justify-end">
                    <span className="font-heading text-sm tracking-[0.2em] text-white">
                      2019
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-5xl tracking-widest uppercase text-white">
                    CATTLE HILL
                  </h2>
                  <p className="font-sans font-light text-sm text-white/50">
                    Director: Lise I. Osvoll, Animation Director: Will Ashurst.
                    Screenplay: Anne Elvedal
                  </p>
                  <p className="font-sans font-light text-xl text-white/70">
                    Reimagining heritage through the lens of modern displacement.
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-white"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="font-sans text-xs tracking-[0.2em] uppercase text-white">
                      Nominated for Best Children&apos;s Film
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Film Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* MERCY */}
              <Reveal delay={0}>
                <div className="glass-panel p-8 space-y-6">
                  <div className="flex justify-end">
                    <span className="font-heading text-[10px] tracking-[0.2em] text-white">
                      2024
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl tracking-widest uppercase text-white">
                    MERCY
                  </h3>
                  <p className="font-sans font-light text-sm text-white/50">
                    Director: Matthias Glasner. Screenplay: Kim Fupz Aakeson
                  </p>
                  <p className="font-sans font-light text-sm text-white/70">
                    A profound exploration of human frailty and the weight of
                    forgiveness in a stark landscape.
                  </p>
                  <div className="pt-4">
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/60">
                      Nominated for the Golden Bear, Berlin
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* NOW I AM ALSO HERE */}
              <Reveal delay={100}>
                <div className="glass-panel p-8 space-y-6">
                  <div className="flex justify-end">
                    <span className="font-heading text-[10px] tracking-[0.2em] text-white">
                      2022
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl tracking-widest uppercase text-white">
                    NOW I AM ALSO HERE
                  </h3>
                  <p className="font-sans font-light text-sm text-white/50">
                    Director and Screenplay: Camille Figenschou
                  </p>
                </div>
              </Reveal>

              {/* PLAY SCHENGEN */}
              <Reveal delay={100}>
                <div className="glass-panel p-8 space-y-6">
                  <div className="flex justify-end">
                    <span className="font-heading text-[10px] tracking-[0.2em] text-white">
                      2022
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl tracking-widest uppercase text-white">
                    PLAY SCHENGEN
                  </h3>
                  <p className="font-sans font-light text-sm text-white/50">
                    Director and Screenplay: Gunhild Enger
                  </p>
                  <p className="font-sans font-light text-sm text-white/70">
                    A satirical dive into the bureaucracy of borders and identity.
                  </p>
                  <div className="pt-4">
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/60">
                      Official Selection Locarno
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* PLATTFORM */}
              <Reveal delay={200}>
                <div className="glass-panel p-8 space-y-6">
                  <div className="flex justify-end">
                    <span className="font-heading text-[10px] tracking-[0.2em] text-white">
                      2021
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl tracking-widest uppercase text-white">
                    PLATTFORM
                  </h3>
                  <p className="font-sans font-light text-sm text-white/50">
                    Director and Screenplay: Paul Tunge
                  </p>
                </div>
              </Reveal>

              {/* HÁLDI */}
              <Reveal delay={200}>
                <div className="glass-panel p-8 space-y-6">
                  <div className="flex justify-end">
                    <span className="font-heading text-[10px] tracking-[0.2em] text-white">
                      2021
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl tracking-widest uppercase text-white">
                    H&Aacute;LDI
                  </h3>
                  <p className="font-sans font-light text-sm text-white/50">
                    Director: Ann Holmgren. Screenplay: Ann Holmgren and Mette
                    Henriette
                  </p>
                  <p className="font-sans font-light text-sm text-white/70">
                    Visual poetry capturing the unseen connection between land and
                    spirit.
                  </p>
                  <div className="pt-4">
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/60">
                      Experimental Vision Award
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* APART */}
              <Reveal delay={300}>
                <div className="glass-panel p-8 space-y-6">
                  <div className="flex justify-end">
                    <span className="font-heading text-[10px] tracking-[0.2em] text-white">
                      2020
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl tracking-widest uppercase text-white">
                    APART
                  </h3>
                  <p className="font-sans font-light text-sm text-white/50">
                    Created by: Cecilie Semec and Silas Henriksen. DOP: Cecilie
                    Semec. Dancers: Douglas Letheren, Silas Henriksen, Anette
                    Antal
                  </p>
                </div>
              </Reveal>

              {/* I WAS A KILLER FOR THE POPE */}
              <Reveal delay={300}>
                <div className="glass-panel p-8 space-y-6">
                  <div className="flex justify-end">
                    <span className="font-heading text-[10px] tracking-[0.2em] text-white">
                      2020
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl tracking-widest uppercase text-white">
                    I WAS A KILLER FOR THE POPE
                  </h3>
                  <p className="font-sans font-light text-sm text-white/50">
                    Leif Henning Broch Johnsen and Christian Mona
                  </p>
                </div>
              </Reveal>

              {/* MIND OF MODERNISM */}
              <Reveal delay={300}>
                <div className="glass-panel p-8 space-y-6">
                  <div className="flex justify-end">
                    <span className="font-heading text-[10px] tracking-[0.2em] text-white">
                      2020
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl tracking-widest uppercase text-white">
                    MIND OF MODERNISM
                  </h3>
                  <p className="font-sans font-light text-sm text-white/70">
                    Documenting the architectural soul of post-war Scandinavia.
                  </p>
                  <div className="pt-4">
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/60">
                      Cultural Heritage Prize
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
