import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mood | INTHEMOOD PICTURES",
};

export default function Mood() {
  return (
    <div>
      <Image src="/mood.svg" alt="Mood" width={400} height={300} className="mx-auto mb-4" />
    </div>
  );
}
