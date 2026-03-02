import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  distance?: number;
  className?: string;
};

const ScrollReveal = ({
  children,
  delay = 0,
  direction = "up",
  duration = 1,
  distance = 40,
  className,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const enterFrom: gsap.TweenVars = { opacity: 0 };
    const exitTo: gsap.TweenVars = { opacity: 0 };

    if (direction === "up") {
      enterFrom.y = distance;
      exitTo.y = -distance;
    }
    if (direction === "down") {
      enterFrom.y = -distance;
      exitTo.y = distance;
    }
    if (direction === "left") {
      enterFrom.x = distance;
      exitTo.x = -distance;
    }
    if (direction === "right") {
      enterFrom.x = -distance;
      exitTo.x = distance;
    }

    const ctx = gsap.context(() => {
      gsap.set(el, enterFrom);

      ScrollTrigger.create({
        trigger: el,
        start: "top 95%",
        onEnter: () => {
          gsap.fromTo(
            el,
            { ...enterFrom },
            {
              opacity: 1,
              y: 0,
              x: 0,
              duration,
              delay,
              ease: "power3.out",
              overwrite: "auto",
            },
          );
        },
        onLeaveBack: () => {
          // Check if element is above 75% of viewport on mobile when leaving back
          const rect = el.getBoundingClientRect();
          const isMobile = window.matchMedia("(max-width: 768px)").matches;
          const shouldDisappear =
            !isMobile || rect.top > window.innerHeight * 0.25;

          if (shouldDisappear) {
            gsap.to(el, {
              ...exitTo,
              duration: duration * 0.55,
              ease: "power3.in",
              overwrite: "auto",
            });
          }
        },
        onEnterBack: () => {
          gsap.fromTo(
            el,
            { ...enterFrom },
            {
              opacity: 1,
              y: 0,
              x: 0,
              duration,
              ease: "power3.out",
              overwrite: "auto",
            },
          );
        },
      });
    });

    return () => ctx.revert();
  }, [delay, direction, duration, distance]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
