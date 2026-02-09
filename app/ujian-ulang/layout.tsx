import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ujian Ulang Test TOEFL | Skill Education",
  description: "Syarat dan panduan untuk mengikuti ujian ulang Test TOEFL di Skill Education.",
};

export default function UjianUlangLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
