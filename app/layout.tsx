import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-next",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});

const roboto = Roboto({
  variable: "--font-roboto-next",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Цахилгаан машин, нарны эрчим хүч | Tesla",
  description: "Цахилгаан машин, нарны хавтан, гэрийн батарей болон сэргээгдэх эрчим хүчний шийдлүүд.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="mn" className={`${inter.variable} ${roboto.variable} antialiased`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
