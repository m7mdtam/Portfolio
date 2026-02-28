import { useScroll } from "@/contexts/scroll-context";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";
import { contactData } from "@/data/contactData";

const ContactSection = () => {
  const { register } = useScroll();

  return (
    <div ref={register("contact")}>
      <Contact
        tag={contactData.tag}
        title={contactData.title}
        intro={contactData.intro}
        infoItems={contactData.infoItems}
        socialLinks={contactData.socialLinks}
        form={contactData.form}
      />
      <Footer
        copyright={contactData.footer.copyright}
        links={contactData.footer.links}
      />
    </div>
  );
};

export default ContactSection;
