import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import "./globals.css"; // your global styles
import "slick-carousel/slick/slick.css"; // slick carousel base styles
import "slick-carousel/slick/slick-theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Elegant Photography | Capturing Timeless Moments",
  description:
    "Elegant Photography captures moments and turns them into timeless memories with professional photography services.",
  icons: {
    icon: "https://i.pinimg.com/736x/02/0a/49/020a4973533647e76c4104fa231d1569.jpg", // tab icon
    shortcut:
      "https://i.pinimg.com/736x/02/0a/49/020a4973533647e76c4104fa231d1569.jpg", // shortcut icon
  },
  openGraph: {
    title: "Elegant Photography | Capturing Timeless Moments",
    description:
      "Elegant Photography captures moments and turns them into timeless memories with professional photography services.",
    url: "https://yourwebsite.com", // replace with your actual website URL
    images: [
      "https://i.pinimg.com/736x/c1/b6/78/c1b678b672fa25aef15c2ca57dbe98f0.jpg", // preview image for social shares
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elegant Photography | Capturing Timeless Moments",
    description:
      "Elegant Photography captures moments and turns them into timeless memories with professional photography services.",
    images: [
      "https://i.pinimg.com/736x/c1/b6/78/c1b678b672fa25aef15c2ca57dbe98f0.jpg", // same preview image as OG
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
