import Head from "next/head";
import React from "react";

import { BodyArea } from "../../components/BodyArea";
import { FAQsList } from "../../components/FAQs";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Text } from "../../components/Text";

const faqs: [string, React.ReactNode][] = [
  [
    "Why 8 HalfStack Events?",
    "We wanted to bring HalfStack beyond London to other great JavaScript communities. If you&apos;re interested in bringing HalfStack to your city, let us know!",
  ],
  [
    "Does HalfStack include paid vendor pitches?",
    "No, never. Occasionally a company that has a talk accepted also chooses to sponsor HalfStack, but we have a strict policy decoupling sponsorships from speakers.",
  ],
  [
    "Do you sell my contact information to sponsors or send annoying emails?",
    <>
      Never. We will send you a few emails with information about the event, and
      one email after the event with follow-up information. Beyond that, if you
      want to hear from us again, you may opt-in to our{" "}
      <a href="https://halfstackconf.com/newsletter/">
        monthly HalfStack newsletter
      </a>
      .
    </>,
  ],
  [
    "What is your position on COVID-19?",
    <>
      Due to COVID-19, all in-person indoor HalfStack events originally
      scheduled from March 2020 were postponed indefinitely and we&apos;re in
      the process of cautiously reopening.
      <br />
      <br />
      COVID-19 refund policy: Full refunds are available up to 7 days prior to a
      scheduled in-person event. If you wake up ill, stay home and we&apos;ll credit
      you with a ticket for a future event.
    </>,
  ],
];

export default function FAQs() {
  return (
    <>
      <Head>
        <title>HalfStack | FAQs</title>
      </Head>
      <Header />
      <BodyArea>
        <Text as="h1" fontSize="extra-large">
          Frequently Asked Questions
        </Text>
        <FAQsList faqs={faqs} />
      </BodyArea>
      <Footer />
    </>
  );
}
