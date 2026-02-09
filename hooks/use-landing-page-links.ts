import { useState, useEffect } from "react";

export type LinkData = {
  test_toefl: {
    whatsapp: string;
    telegram: string;
    group: string;
  };
  ujian_ulang: {
    instagram_post: string;
    instagram_account: string;
    group: string;
  };
};

export function useLandingPageLinks() {
  const [links, setLinks] = useState<LinkData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_SKILL_EDUCATION_DASHBOARD_API;

        if (!apiUrl) {
          throw new Error("API URL is not defined");
        }

        const response = await fetch(apiUrl);
        const json = await response.json();

        if (json.success) {
          setLinks(json.data);
        } else {
          setError("Failed to load data");
        }
      } catch (err: any) {
        console.error("Gagal mengambil data link:", err);
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  return { links, loading, error };
}
