import localFont from "next/font/local";
import "./globals.css";
import NavbarUi from "@/components/nav-menu/NavbarUi";
import FooterUi from "@/components/footer/FooterUi";

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
  src: "./fonts/HindSiliguri-Bold.ttf",
  variable: "--font-hind-siliguri",
  weight: "700",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.variable} antialiased`}
      >
        <NavbarUi />
        {children}
        <FooterUi/>
          </body>
    </html>
  );
}
