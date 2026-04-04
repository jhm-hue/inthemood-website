import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mood | INTHEMOOD PICTURES",
};

export default function Mood() {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/mood.svg" alt="Mood" className="mx-auto mb-4" />
    </div>
  );
}
