import type { ContactData } from "../types/contact.types";

export const contactData: ContactData = {
  tag: "Contact",
  title: "Contact",
  intro:
    "I am always open to new opportunities, collaborations, or just a conversation about tech.",
  infoItems: [
    {
      icon: "email",
      label: "Email",
      value: "mohammedtamimi72@gmail.com",
      href: "mailto:mohammedtamimi72@gmail.com",
    },
    {
      icon: "phone",
      label: "WhatsApp",
      value: "+972 595 631 401",
      href: "https://wa.me/972595631401",
    },
    {
      icon: "location",
      label: "Location",
      value: "Hebron, West Bank, Palestine",
    },
  ],
  socialLinks: [
    {
      icon: "github",
      href: "https://github.com/m7mdtam",
      label: "GitHub",
    },
    {
      icon: "linkedin",
      href: "https://www.linkedin.com/in/mohammed-tamimi-b252b0321/",
      label: "LinkedIn",
    },
  ],
  form: {
    nameLabel: "Full Name",
    namePlaceholder: "Your name",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Your message",
    submitLabel: "Send Message",
    sendingLabel: "Sending...",
    successMessage: "Message sent successfully! I will get back to you soon.",
    errorMessage:
      "Something went wrong. Please try again or contact me directly.",
    retryLabel: "Retry",
  },
  footer: {
    copyright: "© 2025 Mohammed Tamimi. All rights reserved.",
    links: [
      {
        icon: "github",
        href: "https://github.com/m7mdtam",
        label: "GitHub",
      },
      {
        icon: "linkedin",
        href: "https://www.linkedin.com/in/mohammed-tamimi-b252b0321/",
        label: "LinkedIn",
      },
    ],
  },
};
