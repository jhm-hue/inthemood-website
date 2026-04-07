import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white font-heading mb-4">404</h1>
      <p className="text-xl font-light text-white font-sans mb-8">
        Page not found
      </p>
      <Link
        href="/"
        className="text-white underline text-sm font-normal tracking-wide"
      >
        Go back home
      </Link>
    </div>
  );
}
