import Link from "next/link";
import React from "react";

import { BodyArea } from "../BodyArea";
import { FAQsList } from "../FAQs";

export interface EventFAQsProps {
  faqs: [string, React.ReactNode][] | undefined;
}

const defaultFAQs: [string, React.ReactNode][] = [
  [
    "Does HalfStack include paid vendor pitches?",
    "No, never. Occasionally a company that has a talk accepted also chooses to sponsor HalfStack, but we have a strict policy decoupling sponsorships from speakers.",
  ],
  [
    "Do you sell my contact information to sponsors or send annoying emails?",
    <>
      Never. We will send you a few emails with information about the event, and
      one email after the event with follow-up information. Beyond that, if you
      want to hear from us again, you may opt-in to our monthly HalfStack
      newsletter.
    </>,
  ],
  [
    "Why does HalfStack cost what it does?",
    <>
      HalfStack delivers an authentic, high-quality experience and provide meals
      and drinks and have speakers traveling from out of the area. Because we do
      not compromise on attendee experience, we don't accept some
      sponsorship offers that ask for things that degrade the attendee
      experience. We want to make HalfStack inclusive for everyone that wants to
      attend (until we run out of seats). If you cannot afford our ticket prices
      and want to attend, we have opportunities for volunteers, students,
      diversity, and other discounts. <Link href="/contact">Contact us</Link>{" "}
      and tell us how we can make sure you can attend HalfStack!
    </>,
  ],
  [
    "Where is the HalfStack imprint and privacy policy?",
    <>
      We are incorporated in the USA. We are VAT registered in the UK (GB316217429) and Austria (ATU74390367). You may also{" "}
      <Link href="/contact">contact HalfStack</Link>.
    </>,
  ],
];

export function EventFAQs({ faqs }: EventFAQsProps) {
  return (
    <BodyArea>
      <FAQsList faqs={[...(faqs ?? []), ...defaultFAQs]} />
    </BodyArea>
  );
}
