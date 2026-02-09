import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daftar TOEFL | Skill Education",
  description: "Syarat dan panduan untuk mendaftar TOEFL di Skill Education.",
};

export default function DaftarToeflLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
