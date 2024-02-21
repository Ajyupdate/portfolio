import { Box } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ajibade Emmanuel",
  description: "Ajibade Emmanuel. Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Box minH="100vh" bg={"#0A192F"}>
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
