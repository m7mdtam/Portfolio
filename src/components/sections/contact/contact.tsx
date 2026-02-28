import { useScroll } from "@/contexts/scroll-context";
import { Footer } from "@/components/layout";
import { contactData } from "@/data";
import { Contact } from "@/components/contact";

const ContactSection = () => {
  const { register } = useScroll();
  const { footer, ...contactProps } = contactData;

  return (
    <div ref={register("contact")}>
      <Contact {...contactProps} />
      <Footer {...footer} />
    </div>
  );
};

export default ContactSection;
