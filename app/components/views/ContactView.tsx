"use client";

import Reveal from "../about/Reveal";
import AvailabilityCard from "../contact/AvailabilityCard";
import ChannelCards from "../contact/ChannelCards";
import ContactForm from "../contact/ContactForm";
import ContactHeader from "../contact/ContactHeader";
import Backdrop from "../landing/Backdrop";

const styles = {
  page: "relative isolate overflow-hidden",
  // Full-screen backdrop: fixed to the viewport so it never ends partway down a long page
  backdrop: "fixed inset-0 -z-10",
  main: "relative mx-auto w-full max-w-[1160px] px-5 pb-8 pt-10 sm:px-8 sm:pt-14 xl:px-0",
  // Intro and channels on the left, form on the right
  grid: "grid grid-cols-1 items-start gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16",
};

export default function ContactView() {
  return (
    <div className={styles.page}>
      <div className={styles.backdrop}>
        <Backdrop />
      </div>

      {/* id is referenced by the Contact tab in PageNav (aria-controls) */}
      <main className={styles.main} id="contact-view">
        <div className={styles.grid}>
          <div className="min-w-0">
            <Reveal>
              <ContactHeader />
            </Reveal>
            <Reveal delay={150} className="mt-10">
              <ChannelCards />
            </Reveal>
            <Reveal delay={250} className="mt-4">
              <AvailabilityCard />
            </Reveal>
          </div>

          <Reveal delay={150} className="min-w-0">
            <ContactForm />
          </Reveal>
        </div>
      </main>
    </div>
  );
}