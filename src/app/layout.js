import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Provider from "@/components/Provider";

export const metadata = {
  title: "יאיר ברזל ועץ",
  description: "יאיר ברזל ועץ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          <div className="container">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
