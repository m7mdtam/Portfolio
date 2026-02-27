import { useScroll } from "@/contexts/scroll-context";

const Contact = () => {
  const { register } = useScroll();

  return <div ref={register("contact")} className="min-h-screen w-full" />;
};

export default Contact;
