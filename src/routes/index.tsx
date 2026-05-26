import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { useReveal } from "@/components/site/useReveal";

import { SpecialOffer } from "@/components/site/SpecialOffer";

const About = lazy(() => import("@/components/site/About").then((m) => ({ default: m.About })));
const Services = lazy(() => import("@/components/site/Services").then((m) => ({ default: m.Services })));
const WhyUs = lazy(() => import("@/components/site/WhyUs").then((m) => ({ default: m.WhyUs })));
const Shirodhara = lazy(() => import("@/components/site/Shirodhara").then((m) => ({ default: m.Shirodhara })));
const Yoga = lazy(() => import("@/components/site/Yoga").then((m) => ({ default: m.Yoga })));
const Testimonials = lazy(() => import("@/components/site/Testimonials").then((m) => ({ default: m.Testimonials })));
const Booking = lazy(() => import("@/components/site/Booking").then((m) => ({ default: m.Booking })));
const Contact = lazy(() => import("@/components/site/Contact").then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import("@/components/site/Footer").then((m) => ({ default: m.Footer })));
const LeadPopup = lazy(() => import("@/components/site/LeadPopup").then((m) => ({ default: m.LeadPopup })));

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useReveal();
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-cream text-ink rounded font-medium shadow-lg"
      >
        Skip to main content
      </a>
      <Header />
      <main>
        <Hero />
        <SpecialOffer />
        <Suspense fallback={<div className="min-h-screen" />}>
          <About />
          <Services />
          <WhyUs />
          <Shirodhara />
          <Yoga />
          <Testimonials />
          <Booking />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <LeadPopup />
      </Suspense>
      <WhatsAppFab />
    </>
  );
}
