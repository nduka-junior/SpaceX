import Nav from "@/components/Nav";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import Footer from "@/components/Footer";
export const metadata = {
  title: "SpaceX",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
