import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Esta es la pagina de informacion",
  keywords: ["About Page", "Johan", "informacion", "..."],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}
