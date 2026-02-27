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
  duration = 0.8,
  distance = 40,
  className,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Enter: element comes FROM here
    const enterFrom: gsap.TweenVars = { opacity: 0 };
    // Leave back: element exits TO here (same axis, opposite side)
    const exitTo: gsap.TweenVars = { opacity: 0 };

    if (direction === "up")    { enterFrom.y = distance;  exitTo.y = -distance; }
    if (direction === "down")  { enterFrom.y = -distance; exitTo.y = distance;  }
    if (direction === "left")  { enterFrom.x = distance;  exitTo.x = -distance; }
    if (direction === "right") { enterFrom.x = -distance; exitTo.x = distance;  }

    const ctx = gsap.context(() => {
      // Start hidden
      gsap.set(el, enterFrom);

      ScrollTrigger.create({
        trigger: el,
        start: "top 75%",
        onEnter: () => {
          // Scroll down → slide in from below
          gsap.to(el, { opacity: 1, y: 0, x: 0, duration, delay, ease: "power3.out" });
        },
        onLeaveBack: () => {
          // Scroll up past trigger → exit in the SAME direction (upward)
          gsap.to(el, { ...exitTo, duration: duration * 0.6, ease: "power3.in" });
        },
        onEnterBack: () => {
          // Scroll back down → re-enter from below again
          gsap.fromTo(el, enterFrom, { opacity: 1, y: 0, x: 0, duration, ease: "power3.out" });
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
