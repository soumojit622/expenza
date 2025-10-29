import React from "react";
import Link from "next/link";
import { ArrowLeftCircle, Search } from "lucide-react";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center space-y-8">
      {/* Icon */}
      <div className="text-7xl">❗</div>

      {/* Title */}
      <h1 className="text-4xl font-semibold tracking-tight text-foreground">
        Page Not Found
      </h1>

      {/* Description */}
      <p className="text-foreground/70 leading-relaxed max-w-md">
        The page you’re looking for doesn’t exist, was moved, or may be under
        construction. You can continue exploring Expenza using the options
        below.
      </p>

      {/* Helpful suggestions */}
      <div className="text-sm text-foreground/60 space-y-1">
        <p>• Check if the URL is correct</p>
        <p>• Try searching for a page or expense</p>
        <p>• Or go back to the home or dashboard</p>
      </div>

      {/* Search Field */}
      <div className="flex items-center border border-border rounded-lg w-full max-w-sm bg-transparent px-3 py-2">
        <Search size={18} className="text-foreground/60" />
        <input
          type="text"
          placeholder="Search pages or expenses..."
          className="w-full bg-transparent px-2 text-sm outline-none text-foreground placeholder-foreground/40"
        />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition"
        >
          <ArrowLeftCircle size={18} />
          Back to Home
        </Link>

        <Link
          href="/dashboard"
          className="px-6 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-foreground/5 transition"
        >
          Go to Dashboard
        </Link>
      </div>

      {/* Error Code */}
      <p className="text-xs text-foreground/50 mt-4">
        Error Code: <span className="font-medium text-foreground/80">404</span>
      </p>
    </main>
  );
}
