import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Built for teams, trusted by thousands
          </h2>
          <p>
            Expenza makes managing expenses simple, accurate, and fast.
            Businesses and individuals rely on it to stay organized and save
            time.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
            <CardHeader>
              <img
                className="h-6 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/nike.svg"
                alt="Nike Logo"
                height="24"
                width="auto"
              />
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  Expenza has completely changed the way we handle company
                  expenses. Every entry is organized, approvals are quick, and
                  reports that used to take hours now only take a few seconds.
                  Our finance team finally has a system they can trust, and it’s
                  easily the most reliable platform we’ve used so far.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Arjun Mehta"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>

                  <div>
                    <cite className="text-sm font-medium">Arjun Mehta</cite>
                    <span className="text-muted-foreground block text-sm">
                      Finance Manager
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  Expenza is simple, fast, and clean. No complications, no
                  confusion. It saves hours of manual work every week.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Priya Sharma"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>PS</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">Priya Sharma</cite>
                    <span className="text-muted-foreground block text-sm">
                      Product Lead
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  Clean dashboard, easy approvals, and fast reports. Expenza has
                  made our accounting workflow a lot smoother.
                </p>

                <div className="grid items-center gap-3 grid-cols-[auto_1fr]">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://randomuser.me/api/portraits/men/67.jpg"
                      alt="Rohit Das"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>RD</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">Rohit Das</cite>
                    <span className="text-muted-foreground block text-sm">
                      Founder, SmartOps
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          <Card className="card variant-mixed">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  We onboarded our team in minutes. Everyone understood the
                  interface immediately. Great product for fast, paperless
                  expense handling.
                </p>

                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://randomuser.me/api/portraits/women/29.jpg"
                      alt="Sara Fernandes"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>SF</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Sara Fernandes</p>
                    <span className="text-muted-foreground block text-sm">
                      Creator, FinKit
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
