import Head from "next/head";
import React from "react";

const defaultMeta = {
  title: "Capriconoous",
  siteName: "capriconous.com",
  description:
    "An online portfolio and blog by Zanuar Bagus Ramadhan. Showcase of my projects, and some of my thoughts about website development.",
  // url: 'https://theodorusclarence.com',
  // image: 'https://theodorusclarence.com/favicon/large-og.jpg',
  type: "website",
  robots: "follow, index",
};

type SEOProps = {
  date?: string;
} & Partial<typeof defaultMeta>;

export default function Seo({ title }: SEOProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon/logo.ico" />
      </Head>
    </>
  );
}
