"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";
import {
  Menu,
  X,
  CheckCircle,
  Boxes,
  DollarSign,
  Info,
  LogIn,
  UserPlus,
  Rocket,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { useStoreUser } from "@/hooks/use-store-user";
import { BarLoader } from "react-spinners";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Features", href: "#link", icon: CheckCircle },
  { name: "Solution", href: "#link", icon: Boxes },
  { name: "Pricing", href: "#link", icon: DollarSign },
  { name: "About", href: "#link", icon: Info },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { isLoading } = useStoreUser();
  const path = usePathname();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            {/* Logo + Mobile Toggle */}
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              {/* Toggle Button */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                {/* Hamburger */}
                <Menu
                  data-state={!menuState ? "active" : "inactive"}
                  className="m-auto size-6 transition-all duration-200 data-[state=active]:opacity-100 data-[state=active]:scale-100 data-[state=inactive]:opacity-0 data-[state=inactive]:scale-0"
                />
                {/* X Icon */}
                <X
                  data-state={menuState ? "active" : "inactive"}
                  className="absolute inset-0 m-auto size-6 transition-all duration-200 data-[state=active]:opacity-100 data-[state=active]:scale-100 data-[state=inactive]:opacity-0 data-[state=inactive]:scale-0"
                />
              </button>
            </div>

            {/* Desktop Menu */}
            {path === "/" && (
              <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-accent-foreground flex items-center gap-1 transition"
                        >
                          <Icon size={14} />
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* ✅ FIXED MOBILE MENU VISIBILITY */}
            <div
              data-state={menuState ? "active" : "inactive"}
              className="bg-background data-[state=active]:block lg:data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none"
            >
              {/* Mobile Menu List */}
              {path === "/" && (
                <div className="lg:hidden">
                  <ul className="space-y-6 text-base">
                    {menuItems.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <li key={index}>
                          <Link
                            href={item.href}
                            className="text-muted-foreground hover:text-accent-foreground flex items-center gap-2 transition"
                          >
                            <Icon size={16} />
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* AUTH LOGIC */}
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Authenticated>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className={cn(isScrolled && "lg:hidden")}
                  >
                    <Link href="/dashboard" className="flex items-center gap-1">
                      <LayoutDashboard size={15} />
                      Dashboard
                    </Link>
                  </Button>

                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-9 h-9",
                        userButtonPopoverCard: "shadow-xl",
                      },
                    }}
                    afterSignOutUrl="/"
                  />
                </Authenticated>

                <Unauthenticated>
                  <SignInButton>
                    <Button
                      variant="outline"
                      size="sm"
                      className={cn(isScrolled && "lg:hidden")}
                    >
                      <LogIn size={15} className="mr-1" />
                      Login
                    </Button>
                  </SignInButton>

                  <SignUpButton>
                    <Button size="sm" className={cn(isScrolled && "lg:hidden")}>
                      <UserPlus size={15} className="mr-1" />
                      Sign Up
                    </Button>
                  </SignUpButton>

                  <SignUpButton>
                    <Button
                      size="sm"
                      className={cn(isScrolled ? "lg:inline-flex" : "hidden")}
                    >
                      <Rocket size={15} className="mr-1" />
                      Get Started
                    </Button>
                  </SignUpButton>
                </Unauthenticated>
              </div>
            </div>
          </div>
        </div>

        {isLoading && <BarLoader width="100%" color="#c96442" />}
      </nav>
    </header>
  );
};
