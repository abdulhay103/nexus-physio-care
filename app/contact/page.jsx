import ContactAddress from "@/components/contact/ContactAddress";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <section className="section-padding-minimal bg-gradient-to-t from-cyan-50 to-transparent">
      <div className="2xl:20 container mx-auto grid grid-flow-row grid-cols-2 lg:grid-flow-col lg:gap-12 xl:gap-16">
        <div className="col-span-2 pb-10 lg:col-span-1 lg:py-10">
          <ContactAddress />
        </div>
        <div className="col-span-2 lg:col-span-1 2xl:px-16">
          <ContactForm />
        </div>
      </div>
      {/* <GoogleMapArea /> */}
    </section>
  );
}
