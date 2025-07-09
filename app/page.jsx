import HomeContactDetails from "@/components/contact/HomeContactDetails";
import Hero from "@/components/home/Hero";
import WhatWeDo from "@/components/home/WhatWeDo";
import MarqueeUi from "@/components/shared/marquee/MarqueeUi";
import PricingPlan from "@/components/shared/PricingPlan";
import ServiceArea from "@/components/service/ServiceArea";
import Services from "@/components/service/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <Services />
      <ServiceArea />
      <PricingPlan />
      <MarqueeUi />
      <HomeContactDetails />
    </main>
  );
}
