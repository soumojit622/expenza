"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";

export default function FAQsThree() {
  const faqItems = [
    {
      id: "item-1",
      icon: "clock",
      question: "What are your support hours?",
      answer:
        "Our support team is available Monday to Friday from 9:00 AM to 8:00 PM EST, and on weekends from 10:00 AM to 6:00 PM EST. Holiday hours may vary and will be announced on our site.",
    },
    {
      id: "item-2",
      icon: "credit-card",
      question: "How does billing work for subscriptions?",
      answer:
        "Your subscription is billed automatically each month or year, depending on your chosen plan. You can update payment methods, download invoices, and view transaction history in your Expenza dashboard.",
    },
    {
      id: "item-3",
      icon: "truck",
      question: "Can I speed up delivery of my card or device?",
      answer:
        "Yes. If your plan includes physical cards or devices, expedited shipping options will be available at checkout. Most orders placed before 2:00 PM EST qualify for next-day or 2-day delivery in the U.S.",
    },
    {
      id: "item-4",
      icon: "globe",
      question: "Do you offer regional or multilingual support?",
      answer:
        "Expenza provides support in English, Spanish, French, German, and Japanese. Our team is available via email, chat, and phone during standard business hours for each region.",
    },
    {
      id: "item-5",
      icon: "package",
      question: "How can I track my order or card shipment?",
      answer:
        "Once your order ships, you’ll receive an email with a tracking number. You can track it on our website or the carrier site. All order updates are also visible in your Expenza dashboard under “Orders”.",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h2 className="mt-4 text-3xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mt-4">
                Didn’t find the answer you needed? Reach out to our{" "}
                <Link
                  href="#"
                  className="text-primary font-medium hover:underline"
                >
                  support team
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-background shadow-xs rounded-lg border px-4 last:border-b"
                >
                  <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex size-6">
                        <DynamicIcon
                          name={item.icon}
                          className="m-auto size-4"
                        />
                      </div>
                      <span className="text-base">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="px-9">
                      <p className="text-base">{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
