import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Epilimo } from "@/components/site/Epilimo";
import { Yoga } from "@/components/site/Yoga";
import { Testimonials } from "@/components/site/Testimonials";
import { Booking } from "@/components/site/Booking";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { useReveal } from "@/components/site/useReveal";
import { SEO } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { property: "og:title", content: SEO.title },
      { property: "og:description", content: SEO.description },
      { property: "og:url", content: SEO.siteUrl },
      { property: "og:image", content: SEO.ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: SEO.ogImageAlt },
      { property: "og:site_name", content: SEO.brandName },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SEO.title },
      { name: "twitter:description", content: SEO.description },
      { name: "twitter:image", content: SEO.ogImage },
      { name: "twitter:image:alt", content: SEO.ogImageAlt },
      { name: "twitter:site", content: "@orange_wellness_spa_" },
      { name: "twitter:creator", content: "@orange_wellness_spa_" },
    ],
    links: [
      { rel: "canonical", href: SEO.siteUrl },
      { rel: "preload", as: "image", href: "/assets/hero-spa.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-forest-deep focus:text-cream focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Epilimo />
        <Yoga />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

