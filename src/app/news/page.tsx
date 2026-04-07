import type { Metadata } from "next";
import Image from "next/image";
import { getPublishedNews } from "@/features/news/queries";

export const metadata: Metadata = {
  title: "News | INTHEMOOD PICTURES",
};

export const revalidate = 3600;

export default async function News() {
  const articles = await getPublishedNews();

  return (
    <div className="min-h-screen pt-32 pb-16 px-8 md:px-16 lg:px-32">
      {/* Header */}
      <header className="mb-24">
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/30 block">
          Press &amp; Updates
        </span>
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-[0.2em] uppercase mt-4 text-white">
          News
        </h1>
      </header>

      {/* Articles */}
      <div className="space-y-24 max-w-3xl">
        {articles.map((article) => (
          <article key={article.id}>
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/30">
              {article.published_at
                ? new Date(article.published_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : ""}
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mt-3 text-white">
              {article.title}
            </h2>
            {article.excerpt && (
              <p className="font-sans font-light text-lg text-white/60 mt-4 leading-relaxed">
                {article.excerpt}
              </p>
            )}
            {article.body && (
              <p className="font-sans font-light text-white/50 mt-6 leading-relaxed">
                {article.body}
              </p>
            )}
            <div className="mt-8 h-px bg-white/5" />
          </article>
        ))}

        {articles.length === 0 && (
          <p className="font-sans font-light text-white/40">
            No news articles yet.
          </p>
        )}
      </div>

      {/* EU MEDIA Logo — required by funding agreement */}
      <div className="mt-24 max-w-3xl">
        <Image
          src="/eu-media-logo.png"
          alt="Co-funded by the European Union — Creative Europe MEDIA"
          width={200}
          height={69}
          className="invert opacity-70"
          style={{ height: "auto" }}
        />
      </div>
    </div>
  );
}
