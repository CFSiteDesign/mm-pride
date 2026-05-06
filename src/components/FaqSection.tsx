import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What's included in the ticket?",
    a: "Entry to your local Mad Monkey Pride party — drag show, queer quiz, and access to the Pride drink deals. Every hostel runs Pride a little differently, so check your location's lineup before booking.",
  },
  {
    q: "Is this event for everyone?",
    a: "Hell yes. Pride is for queers, allies, and everyone in between. Come as you are, bring your people, leave the bigotry at the door. This is a safe, glittery, all-in space.",
  },
  {
    q: "What if I'm already staying at Mad Monkey?",
    a: "Love that for you — shortest commute home. But your bed doesn't get you in. You'll still need a ticket for the wristband, drag show seating and drink deals. Don't be the person napping while the dorm is downstairs lip-syncing.",
  },
  {
    q: "How long does the party go?",
    a: "Drag show kicks off early evening, queer quiz mid-night, dance floor and drink deals running until the bar shuts. Pace yourself — Pride is a marathon, not a sprint.",
  },
  {
    q: "Can I book multiple locations?",
    a: "Pride runs all month, so technically yes — chase the rainbow across the region. But each ticket is for one specific party at one specific hostel. Pick your spot and commit.",
  },
  {
    q: "Refund policy?",
    a: "No refunds, but tickets are fully transferable. Can't make it? Pass it to a mate and let them have the glittery night of their life instead.",
  },
];

const FaqSection = () => {
  return (
    <section className="relative py-12 md:py-24 px-4 md:px-16 border-b-4 border-divider" style={{ backgroundColor: '#FF6B1F' }}>
      <h2 className="text-4xl md:text-8xl font-black uppercase text-center mb-8 md:mb-16 text-foreground leading-none tracking-tighter">
        Need to Know
      </h2>
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border-2 border-border px-4 md:px-6"
            >
              <AccordionTrigger className="text-left font-black uppercase text-base md:text-2xl hover:no-underline py-4 md:py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg font-bold leading-snug pb-4 md:pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
