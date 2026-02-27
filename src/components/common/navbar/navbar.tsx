import GooeyNav from "@/components/GooeyNav";
import { useScroll, type Section } from "@/contexts/scroll-context";

const Navbar = () => {
  const { scrollTo } = useScroll();

  const go = (section: Section) => () => scrollTo(section);

  const items = [
    { label: "About", href: "#about", onClick: go("about") },
    { label: "Skills", href: "#skills", onClick: go("skills") },
    { label: "Projects", href: "#projects", onClick: go("projects") },
    { label: "Contact", href: "#contact", onClick: go("contact") },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="rounded-full px-4 py-2"
        style={{
          background: "var(--background-surface)",
          border: "1px solid var(--text-border)",
          "--color-1": "var(--accent-primary)",
          "--color-2": "var(--accent-hover)",
          "--color-3": "var(--background-muted)",
          "--color-4": "var(--text-secondary)",
        } as React.CSSProperties}
      >
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
    </header>
  );
};

export default Navbar;
