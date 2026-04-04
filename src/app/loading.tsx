export default function Loading() {
  return (
    <section className="flex items-center justify-center min-h-[70vh]">
      <div className="flex flex-col items-center gap-8">
        {/* Pulsing line — the projector warming up */}
        <div className="w-px h-24 bg-white/20 animate-pulse" />

        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/30 animate-pulse">
          Loading
        </span>
      </div>
    </section>
  );
}
