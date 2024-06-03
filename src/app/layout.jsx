import Head from "next/head";
import "./globals.css";


const metadata = {
  title: "Grupo Yatab",
  description: "La mejor consultoría de negocios en Guatemala",
  openGraph: {
    title: "Grupo Yatab",
    description: "La mejor consultoría de negocios en Guatemala",
    url: "https://www.grupoyatab.com",
    type: "website",
    images: [
      {
        url: "https://www.grupoyatab.com/logo grupo yatab_Mesa de trabajo 1.jpg",
        width: 800,
        height: 600,
        alt: "Grupo Yatab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@grupoyatab",
    creator: "@grupoyatab",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="consultoría de negocios, Guatemala, Grupo Yatab" />
        <link rel="canonical" href="https://www.grupoyatab.com" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Meta Tags */}
        {metadata.openGraph && (
          <>
            <meta property="og:title" content={metadata.openGraph.title} />
            <meta property="og:description" content={metadata.openGraph.description} />
            <meta property="og:url" content={metadata.openGraph.url} />
            <meta property="og:type" content={metadata.openGraph.type} />
            {metadata.openGraph.images && metadata.openGraph.images.length > 0 && (
              <>
                <meta property="og:image" content={metadata.openGraph.images[0].url} />
                <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
                <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
                <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
              </>
            )}
          </>
        )}
        {/* Twitter Meta Tags */}
        {metadata.twitter && (
          <>
            <meta name="twitter:card" content={metadata.twitter.card} />
            <meta name="twitter:site" content={metadata.twitter.site} />
            <meta name="twitter:creator" content={metadata.twitter.creator} />
            <meta name="twitter:title" content={metadata.openGraph.title} />
            <meta name="twitter:description" content={metadata.openGraph.description} />
            <meta name="twitter:image" content={metadata.openGraph.images[0].url} />
          </>
        )}
        {/* Datos estructurados JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Grupo Yatab",
            url: "https://www.grupoyatab.com",
            logo: "https://www.grupoyatab.com/logo.jpg",
            sameAs: [
              "https://www.facebook.com/grupoyatab",
              "https://www.twitter.com/grupoyatab",
              "https://www.instagram.com/grupoyatab",
            ],
          })}
        </script>
      </Head>
      <body>{children}</body>
    </html>
  );
}
