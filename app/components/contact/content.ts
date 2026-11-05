export const TOPICS = ["A project", "A job opportunity", "Collaboration", "Just saying hi"] as const;
export type Topic = (typeof TOPICS)[number];

export const MESSAGE_MAX = 1000;

export const CONTACT = {
  // Shown on the page, used as the "send it from my email app" fallback, and the
  // address every contact-form message is forwarded to.
  email: "tautoanwendylljay@gmail.com",
  location: "Cebu City, Philippines",
  timeZone: "Asia/Manila",
  status: "Available",
};

/**
 * Where the contact form posts its messages.
 *
 * By default this is FormSubmit (https://formsubmit.co), a free service that needs no
 * account or API key: it emails every message to CONTACT.email. The first message you
 * send makes FormSubmit email you a link to activate the form (check spam too).
 *
 * To use another service (Formspree, Web3Forms, your own API...), set
 * NEXT_PUBLIC_CONTACT_ENDPOINT in .env.local and in Vercel. It must accept a JSON POST.
 */
export const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || `https://formsubmit.co/ajax/${CONTACT.email}`;

export type ChannelIcon = "mail" | "github" | "linkedin";

export type Channel = {
  id: string;
  title: string;
  /** Text shown on the card. */
  value: string;
  href: string;
  icon: ChannelIcon;
  /** Adds a "copy" button next to the card. */
  copyable?: boolean;
};

const ALL_CHANNELS: Channel[] = [
  {
    id: "email",
    title: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: "mail",
    copyable: true,
  },
  {
    id: "github",
    title: "GitHub",
    value: "github.com/Dyllj",
    href: "https://github.com/Dyllj",
    icon: "github",
  },
  {
    // TODO: fill in your real LinkedIn address. The card stays hidden until href is set.
    id: "linkedin",
    title: "LinkedIn",
    value: "",
    href: "",
    icon: "linkedin",
  },
];

// Channels without a link are hidden, so visitors never see a dead card.
export const CHANNELS = ALL_CHANNELS.filter((channel) => channel.href);