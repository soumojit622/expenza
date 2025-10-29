import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { HeroHeader } from "@/components/header";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Expenza – Intelligent Group Expense Management",
  description:
    "Track shared expenses, split bills accurately, and settle payments with AI assistance.",
  keywords: [
    "Expenza",
    "expense manager",
    "bill splitting",
    "AI expense tracker",
    "group payments",
    "shared expenses",
  ],
  authors: [
    { name: "Soumojit Banerjee", url: "https://github.com/soumojit622" },
  ],
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo-s.png" sizes="any" />
      </head>
      <body className={`${font.className}`}>
        <HeroHeader />
        {children}
        <Toaster richColors closeButton />
      </body>
    </html>
  );
}
