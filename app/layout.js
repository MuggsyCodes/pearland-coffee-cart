import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://pearlandcoffeecart.com"),
  title:
    "Pearland Coffee Cart | Mobile Coffee Cart & Coffee Catering in Pearland, TX",
  description:
    "Pearland Coffee Cart provides mobile coffee service for events, gyms, churches, schools, offices, and community gatherings in Pearland, Texas and nearby areas.",
  keywords: [
    "coffee cart Pearland TX",
    "mobile coffee cart Pearland",
    "coffee catering Pearland Texas",
    "coffee cart for events in Pearland",
    "Pearland event coffee service",
    "coffee service for gyms Pearland",
    "coffee cart for church events Pearland",
    "coffee cart for schools Pearland",
    "coffee catering near Pearland TX",
  ],
  openGraph: {
    title:
      "Pearland Coffee Cart | Mobile Coffee Cart & Coffee Catering in Pearland, TX",
    description:
      "Simple, professional mobile coffee service for Pearland events, facilities, offices, churches, schools, and community gatherings.",
    url: "https://pearlandcoffeecart.com",
    siteName: "Pearland Coffee Cart",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/pearland-coffee-cart-hero.jpg",
        width: 1000,
        height: 548,
        alt: "Pearland Coffee Cart mobile coffee service setup",
      },
    ],
  },
  alternates: {
    canonical: "https://pearlandcoffeecart.com",
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "Pearland Coffee Cart",
  url: "https://pearlandcoffeecart.com",
  email: "hello@pearlandcoffeecart.com",
  telephone: "(XXX) XXX-XXXX",
  description:
    "Mobile coffee cart and coffee catering service for events, gyms, churches, schools, offices, and community gatherings in Pearland, Texas.",
  servesCuisine: "Coffee",
  priceRange: "$$",
  areaServed: [
    "Pearland, TX",
    "Manvel, TX",
    "Friendswood, TX",
    "Alvin, TX",
    "South Houston, TX",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pearland",
    addressRegion: "TX",
    addressCountry: "US",
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Mobile coffee cart service",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Coffee catering for events and facilities",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
