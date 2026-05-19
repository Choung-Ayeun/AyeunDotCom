import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Choung A Yeun — Portfolio",
  description:
    "Year 2 Information Systems student at SMU, specialising in Business Analytics and FinTech.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
