import localFont from "next/font/local";
import "./globals.css";
import NavbarUi from "@/components/shared/nav-menu/NavbarUi";
import FooterUi from "@/components/shared/footer/FooterUi";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const hindSiliguri = localFont({
  src: "./fonts/HindSiliguri-Bold.woff",
  variable: "--font-hind-siliguri",
  weight: "500, 600, 700, 800, 900",
});
const safodi = localFont({
  src: "./fonts/SofadiOne-Regular.woff",
  variable: "--font-safodi",
  weight: "100 900",
});

export const metadata = {
  title: "Nexus Physio Care",
  description: "A home base physiotherapy service point.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.variable} ${safodi.variable} antialiased`}
      >
        <Toaster position="bottom-left" />
        <NavbarUi />
        {children}
        <FooterUi />
      </body>
    </html>
  );
}
