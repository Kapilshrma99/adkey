import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Digital Marketing Agency",
  description: "Adkey Media is a digital marketing agency.",
    keywords: ["digital marketing", "SEO", "website development", "agency"],
  authors: [{ name: "Adkey Media" }],
  creator: "Adkey Media",
  twitter: {
    card: "summary",
    title: "digital marketing agency",
    description:"Adkey Media is a digital marketing agency.",
  },
  icons: {
    icon: '/favicon.jpg',
  },
};

export default function RootLayout({ children }) {
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
