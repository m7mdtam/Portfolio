import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import GooeyNav from "@/components/GooeyNav";
import { useScroll, type Section } from "@/contexts/scroll-context";
import logoUrl from "@/assets/svg/logo.svg";

const NAV_SECTIONS: Section[] = ["about", "skills", "experience", "projects", "contact"];
const NAV_LABELS = ["About", "Skills", "Experience", "Projects", "Contact"];

const pillStyle: React.CSSProperties = {
  background: "color-mix(in oklch, var(--background-surface) 80%, transparent)",
  border: "1px solid color-mix(in oklch, var(--accent-primary) 25%, transparent)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
};

const Navbar = () => {
  const { scrollTo, getElement } = useScroll();
  const [activeNavIndex, setActiveNavIndex] = useState<number | undefined>(undefined);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Active section tracking — undefined when on hero
  useEffect(() => {
    const handleScroll = () => {
      const mid = window.innerHeight * 0.5;

      // If About hasn't reached mid yet, we're still on the hero
      const firstEl = getElement("about");
      if (firstEl && firstEl.getBoundingClientRect().top > mid) {
        setActiveNavIndex(undefined);
        return;
      }

      let idx = 0;
      for (let i = 0; i < NAV_SECTIONS.length; i++) {
        const el = getElement(NAV_SECTIONS[i]);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= mid) idx = i;
      }
      setActiveNavIndex(idx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [getElement]);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [mobileOpen]);

  const handleNavClick = (section: Section) => {
    scrollTo(section);
    setMobileOpen(false);
  };

  const gooeyItems = NAV_LABELS.map((label, i) => ({
    label,
    href: `#${NAV_SECTIONS[i]}`,
    onClick: () => handleNavClick(NAV_SECTIONS[i]),
  }));

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">

      {/* Logo pill — always visible, scrolls to hero */}
      <button
        onClick={() => { scrollTo("hero"); setMobileOpen(false); }}
        aria-label="Go to top"
        className="flex items-center justify-center w-11 h-11 rounded-full transition-opacity hover:opacity-80"
        style={pillStyle}
      >
        <img src={logoUrl} alt="logo" className="w-7 h-7 object-contain" />
      </button>

      {/* ── Desktop: GooeyNav pill ── */}
      <div
        className="hidden md:block rounded-full px-2 py-1.5 overflow-hidden"
        style={{
          ...pillStyle,
          "--color-1": "var(--accent-primary)",
          "--color-2": "var(--accent-hover)",
          "--color-3": "var(--background-muted)",
          "--color-4": "var(--text-secondary)",
        } as React.CSSProperties}
      >
        <GooeyNav
          items={gooeyItems}
          syncActiveIndex={activeNavIndex}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>

      {/* ── Mobile: hamburger + dropdown ── */}
      <div className="relative md:hidden" ref={dropdownRef}>
        <button
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors"
          style={{ ...pillStyle, color: "var(--text-primary)" }}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          <span style={{ color: "var(--accent-primary)" }}>
            {activeNavIndex !== undefined ? NAV_LABELS[activeNavIndex] : "Menu"}
          </span>
        </button>

        {mobileOpen && (
          <div
            className="absolute top-full mt-2 left-1/2 -translate-x-1/2 rounded-2xl overflow-hidden min-w-40"
            style={pillStyle}
          >
            {NAV_LABELS.map((label, i) => (
              <button
                key={label}
                onClick={() => handleNavClick(NAV_SECTIONS[i])}
                className="w-full px-5 py-3 text-sm text-left transition-colors duration-150"
                style={{
                  color:
                    activeNavIndex === i
                      ? "var(--accent-primary)"
                      : "var(--text-secondary)",
                  background:
                    activeNavIndex === i
                      ? "color-mix(in oklch, var(--accent-primary) 10%, transparent)"
                      : "transparent",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

    </header>
  );
};

export default Navbar;
