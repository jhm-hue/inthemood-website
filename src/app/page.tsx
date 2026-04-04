import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "INTHEMOOD PICTURES",
};

export default function Home() {
  return (
    <div>
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider text-white font-noto">
        INTHEMOOD STUDIO
      </h1>
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white font-noto italic mt-4">
      </h3>
    </div>
  );
}
