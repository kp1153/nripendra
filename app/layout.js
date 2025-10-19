import { Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-sans-devanagari",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title:
    "विस्तार प्रीमियम सोलर एजेंसी - बनारस | APN Solar Master Premium Franchise",
  description:
    "बनारस और आसपास के क्षेत्रों में सोलर ऊर्जा समाधान। पीएम सूर्य घर मुफ्त बिजली योजना के अंतर्गत सोलर पैनल इंस्टालेशन। Master Premium Franchise अवसर उपलब्ध।",
  keywords:
    "सोलर एनर्जी बनारस, solar panel varanasi, PM Surya Ghar Yojana, solar franchise, APN Solar, विस्तार प्रीमियम सोलर",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body
        className={`${notoSansDevanagari.variable} antialiased`}
        style={{ fontFamily: "var(--font-noto-sans-devanagari)" }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
