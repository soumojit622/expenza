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
          appearance={{
            variables: {
              colorPrimary: "#c96442",
              colorBackground: "var(--background)",
              colorText: "var(--foreground)",
              colorInputBackground: "var(--background)",
              colorInputText: "var(--foreground)",
            },
            layout: {
              logoPlacement: "inside",
              shimmer: true,
              helpPageUrl: "",
            },
            elements: {
              card: "shadow-lg rounded-2xl border bg-background/80 backdrop-blur-xl",
              formButtonPrimary:
                "bg-[#c96442] text-white hover:bg-[#b25738] transition font-medium rounded-xl shadow",
              formButtonSecondary:
                "bg-muted text-muted-foreground hover:bg-muted/70 transition rounded-xl",
              headerTitle: "text-2xl font-bold tracking-tight",
              headerSubtitle: "text-muted-foreground text-sm",
              footerActionLink: "text-[#c96442] hover:underline",

              input:
                "border rounded-xl px-4 py-2 bg-background focus:ring-2 ring-offset-0 ring-[#c96442]/40 outline-none transition",
              inputLabel: "font-medium text-sm mb-1",

              socialButtonsBlockButton:
                "rounded-xl border hover:bg-muted transition",
              socialButtonsBlockButtonText: "text-sm font-medium",

              userButtonPopoverCard:
                "shadow-xl border rounded-2xl p-2 bg-background/95 backdrop-blur-xl",
              userButtonTrigger: "shadow-none hover:opacity-90 transition",
              userPreviewMainIdentifier: "font-medium",
            },
          }}
        >
          <ConvexClientProvider>
            <HeroHeader />
            <BacktoTop />
            {children}
            <Toaster richColors closeButton />
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
