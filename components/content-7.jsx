import { Cpu, Zap } from "lucide-react";
import Image from "next/image";

export default function ContentSections() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          The Expenza ecosystem powers every part of expense management.
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              Expenza is more than a simple tracking tool.
              <span className="text-accent-foreground font-bold">
                It works as a complete ecosystem
              </span>
              — from employee spending to approvals, analytics, and compliance.
            </p>

            <p className="text-muted-foreground">
              Teams use Expenza to automate receipts, issue spending cards, set
              policy rules, and get real-time expense insights without manual
              work.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4" />
                  <h3 className="text-sm font-medium">Fast</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Receipts, approvals, and reimbursements happen in seconds, not
                  days.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4" />
                  <h3 className="text-sm font-medium">Powerful</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Smart rules, AI categorization, and real-time tracking keep
                  finances clean and accurate.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-6 sm:mt-0">
            <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/image.jpg"
                className="hidden rounded-[15px] dark:block"
                alt="Expenza dashboard dark"
                width={1206}
                height={612}
              />
              <Image
                src="/image.jpg"
                className="rounded-[15px] shadow dark:hidden"
                alt="Expenza dashboard light"
                width={1206}
                height={612}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
