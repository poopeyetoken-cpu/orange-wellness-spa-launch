export const SEO = {
  siteUrl: "https://myspaayurvedichub.in/",
  title: "Massage Spa in Calicut - My Spa Ayurvedic Hub | Kozhikode",
  description:
    "Massage Spa in Calicut for Ayurvedic rituals, facials, body scrubs, Shirodhara and yoga at My Spa Ayurvedic Hub in Mavoor Road, Kozhikode, Kerala.",
  keywords:
    "massage spa Calicut, spa Kozhikode, Ayurvedic massage Calicut, wellness spa Mavoor Road, facial treatment Kozhikode, body scrub Calicut, Shirodhara, yoga classes Calicut",
  author: "My Spa Ayurvedic Hub",
  brandName: "My Spa Ayurvedic Hub",
  themeColor: "#1c2e25",
  ogImage: "https://myspaayurvedichub.in/og-image.jpg",
  ogImageAlt:
    "Warm candlelit massage room at My Spa Ayurvedic Hub in Kozhikode",
  instagram: "https://www.instagram.com",
  facebook: "https://www.facebook.com",
  phonePrimary: "+91 8137833588",
  phoneSecondary: "+91 8921043599",
  email: "myspagr8@gmail.com",
  streetAddress:
    "1st Floor, Sky Tower Mavoor Road Junction Kozhikode (Calicut) 673001",
  city: "Kozhikode",
  region: "Kerala",
  postalCode: "673001",
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

