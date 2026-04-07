import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0e0e0e] flex flex-col md:flex-row justify-between items-center px-8 md:px-16 py-12 gap-8">
      <div className="text-lg font-bold tracking-[0.2em] text-white font-heading">
        INTHEMOOD PICTURES
      </div>
      <div className="flex gap-8 font-sans font-light text-xs tracking-widest text-white/40">
        <a
          href="https://www.instagram.com/inthemood_film/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          INSTAGRAM
        </a>
<Link href="/contact" className="hover:text-white transition-colors">
          CONTACT
        </Link>
      </div>
      <div className="font-sans font-light text-xs tracking-widest text-white/40">
        &copy; 2026 INTHEMOOD PICTURES. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
