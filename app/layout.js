import BacktoTop from "@/components/BacktoTop";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { HeroHeader } from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { DM_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

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
      <body className={`${font.className}`}>
        <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
          <ConvexClientProvider>
            <HeroHeader />
            <BacktoTop/>
            {children}
            <Toaster richColors closeButton />
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
