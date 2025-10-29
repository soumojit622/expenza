import Image from "next/image";

export default function LoadingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 space-y-8">
      {/* Logo */}
      <div className="animate-fade-in">
        <Image
          src="/logo.svg"
          alt="Expenza Logo"
          width={70}
          height={70}
          className="opacity-95 drop-shadow-sm"
          priority
        />
      </div>

      {/* Clean Spinner */}
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 rounded-full border-4 border-border/40"></div>
        <div className="absolute inset-0 rounded-full border-4 border-t-primary animate-spin"></div>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-semibold text-foreground tracking-tight animate-fade-in-slow">
        Preparing your workspace
      </h2>

      {/* Description */}
      <p className="text-sm text-foreground/60 max-w-sm leading-relaxed animate-fade-in-slower">
        Fetching recent expenses, group data, balances and activity. Please hold
        on for a moment.
      </p>

      {/* Status line */}
      <p className="text-xs text-primary/80 animate-pulse">Syncing securely…</p>
    </main>
  );
}
