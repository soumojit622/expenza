import Image from "next/image";
import { cn } from "@/lib/utils";

export const Logo = ({ className, uniColor }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Added Image logo */}
      <div className="relative h-8 w-8">
        <Image
          src="/logo.svg" 
          alt="Expenza Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Added text */}
      <span className="font-semibold text-lg tracking-tight text-foreground">
        Expenza
      </span>
    </div>
  );
};
