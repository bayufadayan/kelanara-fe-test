import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aviary Birds",
  description: "Animal Rescue Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
