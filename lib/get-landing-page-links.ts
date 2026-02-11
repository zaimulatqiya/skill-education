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

export async function getLandingPageLinks(): Promise<LinkData | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_SKILL_EDUCATION_DASHBOARD_API;

    if (!apiUrl) {
      throw new Error("API URL is not defined");
    }

    const response = await fetch(apiUrl, { cache: "no-store" });
    const json = await response.json();

    if (json.success) {
      return json.data;
    }
    return null;
  } catch (err) {
    console.error("Gagal mengambil data link:", err);
    return null;
  }
}
