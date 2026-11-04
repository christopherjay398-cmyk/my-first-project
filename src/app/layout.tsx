import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Zedrent | Find your place",
  description: "Discover verified properties and connect with trusted agents on Zedrent."
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
