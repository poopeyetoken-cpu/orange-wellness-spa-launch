export const SEO = {
  siteUrl: "https://orangewellnessspa.in/",
  title: "Massage Spa in Calicut - Orange Wellness Spa | Kozhikode",
  description:
    "Massage Spa in Calicut for Ayurvedic rituals, facials, body scrubs, Epilimo DNA testing and yoga at Orange Wellness Spa in Eranjipalam, Kozhikode, Kerala.",
  keywords:
    "massage spa Calicut, spa Kozhikode, Ayurvedic massage Calicut, wellness spa Eranjipalam, facial treatment Kozhikode, body scrub Calicut, Epilimo DNA test, yoga classes Calicut",
  author: "Orange Wellness Spa & Salon Calicut",
  brandName: "Orange Wellness Spa & Salon Calicut",
  themeColor: "#1c2e25",
  ogImage: "https://orangewellnessspa.in/og-image.jpg",
  ogImageAlt:
    "Warm candlelit massage room at Orange Wellness Spa & Salon Calicut in Kozhikode",
  instagram: "https://www.instagram.com/orange_wellness_spa_",
  facebook: "https://www.facebook.com/spaorangewellness",
  phonePrimary: "+91 9169169109",
  phoneSecondary: "+91 7788994198",
  email: "orange.wellness.spa.calicut@gmail.com",
  streetAddress:
    "1st, Kulirani Arcade, Ashokapura, Jawahar Nagar, Sales Tax Office Road, Eranjipalam",
  city: "Kozhikode",
  region: "Kerala",
  postalCode: "673006",
  country: "IN",
};

export const CSP_CONTENT =
  "default-src 'self'; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:; frame-src https:; frame-ancestors 'self';";

export const themeInitScript = `
try {
  const stored = localStorage.getItem('orange-wellness-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = stored ? stored === 'dark' : prefersDark;
  document.documentElement.classList.toggle('dark', isDark);
  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
} catch (error) {}
`;

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": `${SEO.siteUrl}#business`,
  name: SEO.brandName,
  url: SEO.siteUrl,
  description: SEO.description,
  image: SEO.ogImage,
  logo: `${SEO.siteUrl}apple-touch-icon.png`,
  telephone: SEO.phonePrimary,
  email: SEO.email,
  priceRange: "INR",
  address: {
    "@type": "PostalAddress",
    streetAddress: SEO.streetAddress,
    addressLocality: SEO.city,
    addressRegion: SEO.region,
    postalCode: SEO.postalCode,
    addressCountry: SEO.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.2715304,
    longitude: 75.7835134,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
  ],
  sameAs: [SEO.instagram, SEO.facebook],
  areaServed: [
    { "@type": "City", name: "Kozhikode" },
    { "@type": "Place", name: "Calicut" },
    { "@type": "Place", name: "Eranjipalam" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Orange Wellness Spa services",
    itemListElement: [
      "Full Body Massage & Body Scrub",
      "Ayurvedic Spa Treatments",
      "Western Spa Therapies",
      "Facial Treatments",
      "Skin Care Treatments",
      "Hair Care Treatments",
      "Nail Care Treatments",
      "Wellness Consultation",
      "Epilimo DNA Genetic Testing",
      "Yoga Classes",
    ].map((serviceName) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: serviceName,
        provider: { "@id": `${SEO.siteUrl}#business` },
      },
    })),
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: `${SEO.siteUrl}#book`,
    result: { "@type": "Reservation", name: "Spa appointment" },
  },
};

export const seoJsonLd = JSON.stringify(localBusinessJsonLd);

