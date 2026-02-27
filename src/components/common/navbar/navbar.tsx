import CardNav, { type CardNavItem } from "@/components/CardNav";
import { useScroll, type Section } from "@/contexts/scroll-context";

const Navbar = () => {
  const { scrollTo } = useScroll();

  const go = (section: Section) => () => scrollTo(section);

  const navItems: CardNavItem[] = [
    {
      label: "Explore",
      bgColor: "#1a1d2e",
      textColor: "#e0e6f0",
      links: [
        { label: "About", ariaLabel: "Go to About section", onClick: go("about") },
        { label: "Skills", ariaLabel: "Go to Skills section", onClick: go("skills") },
      ],
    },
    {
      label: "Work",
      bgColor: "#2d3555",
      textColor: "#e0e6f0",
      links: [
        { label: "Projects", ariaLabel: "Go to Projects section", onClick: go("projects") },
      ],
    },
    {
      label: "Connect",
      bgColor: "#5b8def",
      textColor: "#0d1117",
      links: [
        { label: "Contact", ariaLabel: "Go to Contact section", onClick: go("contact") },
      ],
    },
  ];

  return (
    <CardNav
      logo=""
      logoAlt="MT"
      items={navItems}
      baseColor="#0d1117"
      menuColor="#e0e6f0"
      buttonBgColor="#5b8def"
      buttonTextColor="#0d1117"
    />
  );
};

export default Navbar;
