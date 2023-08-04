import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Heading from "@/components/Home/Heading";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import MobileHeader from "@/components/Home/MobileHeader";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "NewTech Diagnostic",
  description:
    "NEWTECH Diagnostics, a renowned and reputable Diagnostic & Health Services Provider, offers a comprehensive range of diagnostic facilities, including a wide array of specialties in Pathology services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${poppins.className} scrollbar-hide `}>
        <Heading />
        <Header />
        <MobileHeader />

        <div className="flex flex-col w-full overflow-hidden h-fit ">
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
