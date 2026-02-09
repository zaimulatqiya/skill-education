"use client";

import { useLandingPageLinks } from "@/hooks/use-landing-page-links";

export default function LandingPageLinks() {
  const { links, loading } = useLandingPageLinks();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {/* Contoh Penggunaan Data Test TOEFL */}
      <a href={links?.test_toefl.whatsapp} target="_blank">
        Join Channel WA
      </a>

      <a href={links?.test_toefl.group} target="_blank">
        Join Grup WA
      </a>

      {/* Contoh Penggunaan Data Ujian Ulang */}
      <a href={links?.ujian_ulang.instagram_post} target="_blank">
        Lihat Info Instagram
      </a>
    </div>
  );
}
