import { getLandingPageLinks } from "@/lib/get-landing-page-links";
import TestToeflContent from "./content";

export default async function TestToeflPage() {
  const links = await getLandingPageLinks();
  return <TestToeflContent links={links} />;
}
