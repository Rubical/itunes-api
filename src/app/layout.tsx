import React from "react";
import { PT_Sans } from "next/font/google";
import StoreProvider from "@/app/StoreProvider";
import Header from "@/components/Layout/Header/Header";
import "../styles/globals.scss";

const ptSans = PT_Sans({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ptSans.className}>
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
