import { BlurFade } from "@/components/react-bits";
import type { ContactProps } from "@/types/contact.types";
import { ContactInfo, ContactForm } from ".";

const Contact = ({
  tag,
  title,
  intro,
  infoItems,
  socialLinks,
  form,
}: ContactProps) => (
  <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
    <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-border" />
    <div className="max-w-5xl mx-auto flex flex-col gap-14">
      <BlurFade delay={0}>
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="text-sm font-mono uppercase tracking-widest text-primary">
            {tag}
          </span>
          <h2 className="text-h1 font-title font-bold text-foreground">
            {title}
          </h2>
          <div className="w-10 h-1 bg-primary" />
        </div>
      </BlurFade>

      <div className="flex flex-col md:flex-row gap-10">
        <BlurFade delay={0.1} className="md:w-1/2">
          <ContactInfo
            intro={intro}
            infoItems={infoItems}
            socialLinks={socialLinks}
          />
        </BlurFade>

        <BlurFade delay={0.2} className="md:w-1/2">
          <ContactForm labels={form} />
        </BlurFade>
      </div>
    </div>
  </section>
);

export default Contact;
