import "./globals.css";
import { Red_Hat_Display } from "next/font/google";
import StoreProvider from "@/_redux/StoreProvider";
const redHat = Red_Hat_Display({ subsets: ["latin"] })
export const metadata = {
  title: "Local Reviews",
  description: "get and give reviews",
  // icons: {
  //   icon: '../public/LocalReviews-LOGO1.svg',
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body
        className={`${redHat.className} text-secondary font-medium bg-white`}>
        <StoreProvider>
          {children}
          </StoreProvider>
      </body>
    </html>
  );
}
