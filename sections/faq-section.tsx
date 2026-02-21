"use client";

import SectionTitle from "@/components/section-title";
import { faqContent } from "@/data/content";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

export default function FaqSection() {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  return (
    <section className="flex flex-col items-center justify-center mt-40">
      <SectionTitle title={faqContent.title} subtitle={faqContent.subtitle} />
      <div className="mx-auto mt-12 w-full max-w-xl">
        {faqContent.items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border-b border-gray-200 bg-white"
          >
            <h3
              className="flex cursor-pointer items-start justify-between gap-4 py-4 font-medium"
              onClick={() => setIsOpen(isOpen === index ? null : index)}
            >
              {item.question}
              {isOpen === index ? (
                <MinusIcon className="size-5 text-gray-500" />
              ) : (
                <PlusIcon className="size-5 text-gray-500" />
              )}
            </h3>
            <p
              className={`pb-4 text-sm/6 text-gray-500 ${isOpen === index ? "block" : "hidden"}`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
