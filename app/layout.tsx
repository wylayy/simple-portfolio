import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import settings from '@/settings.json';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${settings.personal.name} - ${settings.personal.title}`,
  description: settings.seo.siteDescription,
  keywords: settings.seo.keywords,
  authors: [{ name: settings.personal.name }],
  creator: settings.personal.name,
  metadataBase: new URL(settings.seo.siteUrl),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: settings.seo.googleSiteVerification,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: settings.seo.siteUrl,
    title: `${settings.personal.name} - ${settings.personal.title}`,
    description: settings.seo.siteDescription,
    siteName: settings.seo.siteName,
    images: [
      {
        url: settings.seo.ogImage,
        width: 1200,
        height: 630,
        alt: settings.seo.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${settings.personal.name} - ${settings.personal.title}`,
    description: settings.seo.siteDescription,
    creator: settings.seo.twitterHandle,
    images: [settings.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
