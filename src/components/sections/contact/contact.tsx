import { useScroll } from "@/contexts/scroll-context";
import Footer from "@/components/layout/footer";
import { contactData } from "@/data/contactData";
import Contact from "@/components/contact/contact";

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
