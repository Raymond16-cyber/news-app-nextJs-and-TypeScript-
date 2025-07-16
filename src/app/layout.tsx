import "./globals.css";
import { ReactNode } from "react";
import Providers from "@/components/Providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AfriScope News - African & Global News",
  description:
    "Stay informed with the latest news from Africa and beyond. Modern, responsive news application with category filtering, bookmarking, and search functionality.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>AfriScope News</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
