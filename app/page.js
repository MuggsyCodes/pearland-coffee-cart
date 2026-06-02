"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarCheck,
  Check,
  Church,
  Clock3,
  Dumbbell,
  GraduationCap,
  MapPin,
  PartyPopper,
  Send,
  Store,
} from "lucide-react";
import Image from "next/image";

const serviceCards = [
  {
    title: "Gyms & Wellness Centers",
    icon: Dumbbell,
    copy:
      "Serve early arrivals, class traffic, and member mornings with a clean setup that stays out of your team's way.",
  },
  {
    title: "Churches & Community Gatherings",
    icon: Church,
    copy:
      "Simple coffee service for Sunday mornings, volunteer events, meetings, and community programs.",
  },
  {
    title: "Schools & Youth Sports",
    icon: GraduationCap,
    copy:
      "Coffee for parent mornings, staff appreciation, tournaments, field days, and school community events.",
  },
  {
    title: "Corporate & Office Coffee",
    icon: BriefcaseBusiness,
    copy:
      "An easy way to make office mornings, trainings, tenant events, and team gatherings feel more thoughtful.",
  },
  {
    title: "Outdoor Events & Local Markets",
    icon: Store,
    copy:
      "Brewed and cold coffee options for markets, festivals, pop-ups, and neighborhood events.",
  },
  {
    title: "Private Events",
    icon: PartyPopper,
    copy:
      "Friendly coffee service for showers, parties, open houses, family events, and milestone mornings.",
  },
];

const menuItems = [
  "Fresh brewed coffee",
  "Cold coffee",
  "Cream and sweetener station",
  "Optional seasonal flavor add-ons",
  "Simple event packages",
];

function ButtonLink({ href, children, variant = "primary" }) {
  const styles =
    variant === "primary"
      ? "bg-charcoal text-white hover:bg-espresso"
      : "border border-charcoal/20 bg-white/70 text-charcoal hover:border-charcoal/40 hover:bg-white";

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition ${styles}`}
    >
      {children}
      <ArrowRight size={17} strokeWidth={2.4} />
    </a>
  );
}

function SectionHeader({ eyebrow, title, copy }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-clay">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black text-charcoal sm:text-4xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-4 text-base leading-7 text-charcoal/72 sm:text-lg">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-espresso/10 bg-paper/92 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-espresso text-lg font-black text-paper">
            P
          </span>
          <span className="text-base font-black text-charcoal sm:text-lg">
            Pearland Coffee Cart
          </span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-bold text-charcoal/70 md:flex">
          <a className="hover:text-charcoal" href="#services">
            Services
          </a>
          <a className="hover:text-charcoal" href="#events">
            Events
          </a>
          <a className="hover:text-charcoal" href="#how-it-works">
            How It Works
          </a>
          <a className="hover:text-charcoal" href="#contact">
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="hidden rounded-md bg-clay px-4 py-2.5 text-sm font-black text-white transition hover:bg-espresso sm:inline-flex"
        >
          Book a Coffee Cart
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-espresso/10 bg-paper"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(207,165,111,0.24),transparent_34%),linear-gradient(135deg,rgba(220,233,234,0.7),rgba(255,250,242,0)_46%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-md border border-clay/25 bg-white/65 px-3 py-2 text-sm font-bold text-espresso">
            <MapPin size={16} />
            Mobile coffee service in Pearland, Texas
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] text-charcoal sm:text-5xl lg:text-6xl">
            Mobile Coffee Service for Pearland Events, Workplaces, and Early
            Mornings
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/75">
            A simple, professional coffee cart serving brewed coffee and cold
            coffee for local events, gyms, churches, schools, and community
            spaces in Pearland, Texas.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#pilot">Request a Pilot</ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Plan an Event
            </ButtonLink>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-lg border border-espresso/12 bg-white shadow-soft">
            <div className="relative aspect-[4/3]">
              <Image
                src="/pearland-coffee-cart-hero.jpg"
                alt="A simple mobile coffee cart setup for a Pearland community facility"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/78 via-charcoal/20 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-lg border border-white/18 bg-paper/95 p-5 shadow-soft backdrop-blur">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-clay">
                  Now booking
                </p>
                <h2 className="mt-2 text-2xl font-black text-charcoal sm:text-3xl">
                  Coffee made easy.
                </h2>
                <div className="mt-4 grid gap-2">
                  {[
                    "Events and facilities",
                    "Brewed and cold coffee",
                    "Simple setup and cleanup",
                  ].map((item) => (
                    <div
                      className="flex items-center gap-3 text-sm font-bold text-charcoal"
                      key={item}
                    >
                      <Check className="shrink-0 text-sage" size={18} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocalCredibility() {
  return (
    <section className="bg-cream px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-clay">
            Built local
          </p>
          <h2 className="mt-3 text-3xl font-black text-charcoal">
            Made for Pearland and nearby communities.
          </h2>
        </div>
        <p className="text-lg leading-8 text-charcoal/72">
          Pearland Coffee Cart is designed for the real places people gather:
          neighborhood gyms, church halls, school campuses, office lobbies,
          parks, fields, and local markets across Pearland, Manvel, Friendswood,
          Alvin, South Houston, and surrounding Houston-area communities.
        </p>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section id="services" className="bg-paper px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Services"
        title="Coffee service for practical local needs."
        copy="A compact mobile cart, a focused menu, and a team built to make coffee easy for your staff, guests, members, or families."
      />
      <div
        id="events"
        className="mx-auto mt-12 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {serviceCards.map(({ title, icon: Icon, copy }) => (
          <article
            className="rounded-lg border border-espresso/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            key={title}
          >
            <div className="grid h-11 w-11 place-items-center rounded-md bg-sky text-charcoal">
              <Icon size={22} strokeWidth={2.2} />
            </div>
            <h3 className="mt-5 text-xl font-black text-charcoal">{title}</h3>
            <p className="mt-3 leading-7 text-charcoal/70">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section className="border-y border-espresso/10 bg-charcoal px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-tan">
            Simple menu
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Focused coffee service without the complicated menu.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/72">
            Built for steady lines, quick decisions, and event hosts who want a
            dependable coffee option that is easy to explain.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {menuItems.map((item) => (
            <div
              className="flex items-center gap-3 rounded-md border border-white/12 bg-white/8 px-4 py-4 text-sm font-bold"
              key={item}
            >
              <Check className="shrink-0 text-tan" size={19} />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EarlyCoverage() {
  return (
    <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-lg border border-espresso/10 bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-clay text-white">
            <Clock3 size={23} />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-clay">
              Early coverage
            </p>
            <h2 className="mt-3 text-3xl font-black text-charcoal">
              Coffee before the day gets busy.
            </h2>
          </div>
        </div>
        <div>
          <p className="text-lg leading-8 text-charcoal/74">
            Many facilities open before their coffee service is active.
            Pearland Coffee Cart helps fill that gap with a clean, simple setup
            that serves early arrivals without adding operational work for your
            staff.
          </p>
          <p className="mt-4 text-lg leading-8 text-charcoal/74">
            Ideal for gyms, community centers, wellness facilities, and
            member-based organizations that want to serve members before the day
            gets busy.
          </p>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    "Tell us your location, date, and expected crowd",
    "We recommend a simple coffee setup",
    "We show up, serve, clean up, and keep it easy",
  ];

  return (
    <section
      id="how-it-works"
      className="bg-paper px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeader
        eyebrow="How it works"
        title="A straightforward process for busy hosts."
      />
      <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <article
            className="rounded-lg border border-espresso/10 bg-white p-6 text-center shadow-sm"
            key={step}
          >
            <div className="mx-auto grid h-11 w-11 place-items-center rounded-md bg-espresso text-lg font-black text-white">
              {index + 1}
            </div>
            <h3 className="mt-5 text-lg font-black leading-7 text-charcoal">
              {step}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function PilotProgram() {
  return (
    <section id="pilot" className="bg-sky px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-lg bg-paper p-6 shadow-soft sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-clay">
            Low-risk start
          </p>
          <h2 className="mt-3 text-3xl font-black text-charcoal">
            Start With a Low-Risk Pilot
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-charcoal/74">
            For local facilities and recurring events, we can start with a short
            pilot to test demand before making anything long-term. This is ideal
            for early-morning member traffic, community events, or recurring
            weekly programs.
          </p>
        </div>
        <ButtonLink href="#contact">Talk About a Pilot</ButtonLink>
      </div>
    </section>
  );
}

function ContactForm() {
  const fields = [
    ["Name", "name", "text"],
    ["Organization", "organization", "text"],
    ["Email", "email", "email"],
    ["Phone", "phone", "tel"],
    ["Event type", "eventType", "text"],
    ["Location", "location", "text"],
    ["Estimated number of guests", "guests", "text"],
  ];

  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    console.log("Coffee cart inquiry", data);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="bg-paper px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-clay">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-black text-charcoal sm:text-4xl">
            Bring coffee to your next Pearland event or facility.
          </h2>
          <p className="mt-5 text-lg leading-8 text-charcoal/74">
            Share the basics and we will help you think through the right setup:
            event size, timing, location, and whether a pilot makes sense.
          </p>
          <div className="mt-8 rounded-lg border border-espresso/10 bg-cream p-5">
            <p className="font-black text-charcoal">Pearland Coffee Cart</p>
            <p className="mt-2 text-charcoal/70">
              Serving Pearland, Manvel, Friendswood, Alvin, and nearby
              Houston-area communities.
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-espresso/10 bg-white p-5 shadow-soft sm:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {fields.map(([label, name, type]) => (
              <label className="grid gap-2 text-sm font-bold text-charcoal" key={name}>
                {label}
                <input
                  name={name}
                  type={type}
                  className="min-h-12 rounded-md border border-espresso/15 bg-paper px-4 text-base font-normal outline-none transition focus:border-clay focus:ring-4 focus:ring-clay/15"
                />
              </label>
            ))}
            <label className="grid gap-2 text-sm font-bold text-charcoal sm:col-span-2">
              Message
              <textarea
                name="message"
                rows={5}
                className="rounded-md border border-espresso/15 bg-paper px-4 py-3 text-base font-normal outline-none transition focus:border-clay focus:ring-4 focus:ring-clay/15"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-clay px-5 py-3 text-sm font-black text-white transition hover:bg-espresso sm:w-auto"
          >
            Send Inquiry
            <Send size={17} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/12 pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-black">Pearland Coffee Cart</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/68">
            Serving Pearland, Manvel, Friendswood, Alvin, and nearby
            Houston-area communities.
          </p>
        </div>
        <div className="text-sm leading-6 text-white/72 md:text-right">
          <a className="block hover:text-white" href="mailto:hello@pearlandcoffeecart.com">
            hello@pearlandcoffeecart.com
          </a>
          <a className="block hover:text-white" href="tel:+1XXXXXXXXXX">
            (XXX) XXX-XXXX
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LocalCredibility />
        <UseCases />
        <MenuSection />
        <EarlyCoverage />
        <HowItWorks />
        <PilotProgram />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
