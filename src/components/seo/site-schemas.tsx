import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site";

export function SiteSchemas() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Femi Taylor",
    url: siteConfig.url,
    jobTitle: ["Actress", "Author", "Dancer"],
    description: siteConfig.description,
    knowsAbout: [
      "Star Wars",
      "Return of the Jedi",
      "Cats musical",
      "Memoir writing",
    ],
    sameAs: [
      "https://www.instagram.com/",
      "https://twitter.com/",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/book?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLd data={[person, website]} />;
}
