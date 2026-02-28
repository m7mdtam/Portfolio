import ScrollReveal from "@/components/react-bits/ScrollReveal";
import type { ContactProps } from "@/types/contact.types";
import ContactInfo from "./contact-info";
import ContactForm from "./contact-form";

const Contact = ({
  tag,
  title,
  intro,
  infoItems,
  socialLinks,
  form,
}: ContactProps) => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20">
      <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-border" />
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        {/* header */}
        <div className="flex flex-col gap-6 max-w-3xl">
          <ScrollReveal>
            <span className="text-sm font-mono uppercase tracking-widest text-primary">
              {tag}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-h1 font-bold text-foreground">{title}</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="w-10 h-1 bg-primary" />
          </ScrollReveal>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <ScrollReveal direction="left" className="md:w-1/2">
            <ContactInfo
              intro={intro}
              infoItems={infoItems}
              socialLinks={socialLinks}
            />
          </ScrollReveal>

          <ScrollReveal direction="right" className="md:w-1/2">
            <ContactForm labels={form} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
