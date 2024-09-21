import ContactDetails from "@/components/contact/ContactDetails";
import Hero from "@/components/home/Hero";
import WhatWeDo from "@/components/home/WhatWeDo";
import MarqueeUi from "@/components/marquee-items/MarqueeUi";
import ServiceArea from "@/components/service/ServiceArea";
import Services from "@/components/service/Services";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <WhatWeDo />
      <Services />
      <ServiceArea />
      <MarqueeUi />
      <ContactDetails />
    </Fragment>
  );
}
