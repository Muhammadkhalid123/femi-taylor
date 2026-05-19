export const siteConfig = {
  name: "Femi Taylor",
  title: "Femi Taylor | Star Wars Icon, Cats Legend & Author",
  description:
    "Official site of Femi Taylor — Oola in Star Wars: Return of the Jedi, original Cats cast member, and author. Order her memoir, explore her legacy, and find upcoming events.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://femitaylor.com",
  ogImage:
    "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&h=630&q=80",
  email: "contact@femitaylor.com",
  twitter: "@femitaylor",
};

export const routes = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/book", label: "The Book" },
  { path: "/legacy", label: "Legacy" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/events", label: "Events" },
  { path: "/press", label: "Press" },
  { path: "/contact", label: "Contact" },
] as const;
