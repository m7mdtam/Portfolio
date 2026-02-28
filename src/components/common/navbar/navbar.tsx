import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { GooeyNav } from "@/components/react-bits";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/contexts/scroll-context";
import type { Section } from "@/contexts/scroll-context";

const NAV_SECTIONS: Section[] = [
  "about",
  "skills",
  "experience",
  "projects",
  "contact",
];
const NAV_LABELS = ["About", "Skills", "Experience", "Projects", "Contact"];

const pill = "bg-card/80 border border-primary/25 backdrop-blur-md";

const LogoSvg = () => (
  <svg
    className="size-10"
    viewBox="0 0 212 143"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M65.5004 129.6L47.4004 111.4L144.8 14.1001L162.9 32.2001L65.5004 129.6Z"
      fill="url(#nav-g0)"
    />
    <path
      d="M71.1 18.1L18.1 71.1L0.0999908 53L53.1 0L71.1 18.1ZM53 142.1L71.1 124L18.1 71L0 89.1L53 142.1Z"
      fill="url(#nav-g1)"
    />
    <path
      d="M211.7 53L193.6 71.1L140.6 18.1L158.7 0L211.7 53ZM211.7 89.2L193.6 71.1L140.6 124.1L158.7 142.2L211.7 89.2Z"
      fill="url(#nav-g2)"
    />
    <defs>
      <linearGradient
        id="nav-g0"
        x1="105.15"
        y1="14.1001"
        x2="105.15"
        y2="129.6"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#13E4E8" />
        <stop offset="1" stopColor="#1381FF" />
      </linearGradient>
      <linearGradient
        id="nav-g1"
        x1="0.0611"
        y1="71.0764"
        x2="71.1204"
        y2="71.0764"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#022526" />
        <stop offset="1" stopColor="#1381FF" />
      </linearGradient>
      <linearGradient
        id="nav-g2"
        x1="140.661"
        y1="71.1264"
        x2="211.72"
        y2="71.1264"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#13E4E8" />
        <stop offset="1" stopColor="#1381FF" />
      </linearGradient>
    </defs>
  </svg>
);

const Navbar = () => {
  const { scrollTo, getElement } = useScroll();
  const [activeNavIndex, setActiveNavIndex] = useState<number | undefined>(
    undefined,
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        const mid = window.innerHeight * 0.5;
        const firstEl = getElement("about");

        if (!firstEl || firstEl.getBoundingClientRect().top > mid) {
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
      }, 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [getElement]);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
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

  const goHome = () => {
    scrollTo("hero");
    setActiveNavIndex(undefined);
    setMobileOpen(false);
  };

  const gooeyItems = NAV_LABELS.map((label, i) => ({
    label,
    href: `#${NAV_SECTIONS[i]}`,
    onClick: () => handleNavClick(NAV_SECTIONS[i]),
  }));

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
      <Button
        variant="ghost"
        onClick={goHome}
        aria-label="Go to top"
        className={`hidden md:flex w-14 h-14 cursor-pointer rounded-full p-0 hover:bg-transparent ${pill}`}
      >
        <LogoSvg />
      </Button>

      <div
        className={`hidden md:block rounded-full px-2 py-1.5 overflow-hidden [--color-1:var(--accent-primary)] [--color-2:var(--accent-hover)] [--color-3:var(--background-muted)] [--color-4:var(--text-secondary)] ${pill}`}
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

      <div
        className={`relative md:hidden flex items-center justify-between gap-6 rounded-full px-5 py-2 w-[50vw] ${pill}`}
        ref={dropdownRef}
      >
        <Button
          variant="ghost"
          onClick={goHome}
          aria-label="Go to top"
          className="p-0 hover:bg-transparent size-10 rounded-full shrink-0"
        >
          <LogoSvg />
        </Button>

        <Button
          variant="ghost"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          className="p-2 hover:bg-transparent text-foreground shrink-0"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>

        {mobileOpen && (
          <div
            className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 rounded-2xl overflow-hidden min-w-40 ${pill}`}
          >
            {NAV_LABELS.map((label, i) => (
              <Button
                key={label}
                variant="ghost"
                onClick={() => handleNavClick(NAV_SECTIONS[i])}
                className={`w-full justify-start px-5 h-auto py-3 text-sm rounded-none hover:bg-transparent ${
                  activeNavIndex === i
                    ? "text-primary bg-primary/10 hover:bg-primary/10"
                    : "text-text-secondary"
                }`}
              >
                {label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
