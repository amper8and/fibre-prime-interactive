import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MTN Fibre Prime - Interactive Home Experience",
  description: "Explore how MTN Fibre Prime transforms your home into a connected lifestyle ecosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
