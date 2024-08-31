import "../../globals.css";
import { Poppins } from "next/font/google";

import Footer from "@/components/Footer";

const quicksand = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "NewTech Diagnostic",
  description:
    "NEWTECH Diagnostics, a renowned and reputable Diagnostic & Health Services Provider, offers a comprehensive range of diagnostic facilities, including a wide array of specialties in Pathology services.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${quicksand.className} scrollbar-hide `}>
        <div className="flex flex-col w-full overflow-hidden h-fit ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
