export default function StatsSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Expenza in numbers
          </h2>
          <p>
            Expenza continues to grow with a strong community, seamless
            features, and tools that help people and teams manage finances with
            confidence.
          </p>
        </div>

        <div className="grid gap-0.5 *:text-center md:grid-cols-3">
          <div className="rounded-(--radius) space-y-4 border py-12">
            <div className="text-5xl font-bold">+1200</div>
            <p>Active Users</p>
          </div>
          <div className="rounded-(--radius) space-y-4 border py-12">
            <div className="text-5xl font-bold">56%</div>
            <p>Faster Expense Processing</p>
          </div>
          <div className="rounded-(--radius) space-y-4 border py-12">
            <div className="text-5xl font-bold">+500</div>
            <p>Teams using Expenza</p>
          </div>
        </div>
      </div>
    </section>
  );
}
