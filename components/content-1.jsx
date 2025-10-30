import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          The Expenza ecosystem brings your finances together.
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/image.jpg"
                className="hidden rounded-[15px] dark:block"
                alt="expense dashboard dark"
                width={1207}
                height={929}
              />
              <Image
                src="/image.jpg"
                className="rounded-[15px] shadow dark:hidden"
                alt="expense dashboard light"
                width={1207}
                height={929}
              />
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              Expenza is more than a budgeting tool.
              <span className="text-accent-foreground font-bold">
                It powers a complete financial ecosystem
              </span>
              — from tracking expenses to automating payments and insights.
            </p>

            <p className="text-muted-foreground">
              Manage spending, connect your accounts, and simplify money
              decisions with a single platform built for individuals and
              businesses.
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 pl-4">
                <p>
                  Expenza changed the way we handle our finances. Smart
                  analytics, clean design, and effortless automation make it a
                  tool we now rely on every day.
                </p>

                <div className="mt-6 space-y-3">
                  <cite className="block font-medium">
                    Jensen Huang, Founder
                  </cite>
                  <img
                    className="h-5 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                    alt="Company Logo"
                    height="20"
                    width="auto"
                  />
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
