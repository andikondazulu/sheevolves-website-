import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "SheEvolves Co. | Women celebrate women",
  description:
    "A not-for-profit community of women in Lusaka, Zambia. Women celebrate women, through the ups and the downs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}