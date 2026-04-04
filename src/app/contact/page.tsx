import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | INTHEMOOD PICTURES",
};

export default function Contact() {
  return (
    <div>
      <p className="text-xl font-light text-white font-noto italic">
        INGVILD EVJEMO <br />
        CEO and Producer <br />
        ingvild@inthemoodfilm.com <br />
        +47 97664222
      </p>
      <p className="text-xl font-light text-white font-noto italic">
        GENERAL INQUIRIES: <br />
        post@inthemoodfilm.com
      </p>
    </div>
  );
}
