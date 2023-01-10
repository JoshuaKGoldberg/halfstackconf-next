import Head from "next/head";

import { ExpectationPhotos } from "~/components/ExpectationPhotos";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { EventsList } from "~/components/Index/EventsList";
import { Intro } from "~/components/Index/Intro";
import { Newsletter } from "~/components/Index/Newsletter";
import { SponsorStacksList } from "~/components/SponsorStacksList";

import { getEventDataCurrentAndDefault } from "../data";
import { ReturnedProps } from "../utils";

export default function Index({
  events,
  sponsors,
}: ReturnedProps<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>HalfStack | Open Web Conferences</title>
      </Head>
      <Header />
      <Intro />
      <EventsList events={events} />
      <h1>Intentionally wrong!</h1>
      <h1>Intentionally very wrong!</h1>
      <ExpectationPhotos />
      <Newsletter />
      <SponsorStacksList {...sponsors} />;
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const eventsOrder = (await import("~/data/events.json")).default;
  return {
    props: {
      events: await Promise.all(eventsOrder.map(getEventDataCurrentAndDefault)),
      sponsors: (await import("~/data/sponsors.json")).default,
    },
  };
}
