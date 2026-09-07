import type { Metadata } from "next";
import { Krona_One, Titillium_Web, Work_Sans } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SITE, siteUrl } from "@/lib/site";
import "./globals.css";

/** Display uniquement : titre du hero, chiffres du compte à rebours, logotype. */
const kronaOne = Krona_One({
  variable: "--font-krona-one",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

/** Copy courante. */
const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/** Micro-labels en capitales : libellés, bouton, mentions. */
const titillium = Titillium_Web({
  variable: "--font-titillium",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: SITE.title,
  description: SITE.description,
  applicationName: SITE.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE.fullName,
    title: SITE.title,
    description: SITE.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${kronaOne.variable} ${workSans.variable} ${titillium.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
