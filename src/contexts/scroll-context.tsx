import { createContext, useCallback, useContext } from "react";

export type Section = "hero" | "about" | "skills" | "experience" | "projects" | "contact";

type ScrollContextType = {
  scrollTo: (section: Section) => void;
  register: (section: Section) => (node: HTMLDivElement | null) => void;
  getElement: (section: Section) => HTMLDivElement | null;
};

const elements = new Map<Section, HTMLDivElement>();

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollTo = useCallback((section: Section) => {
    elements.get(section)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const register = useCallback(
    (section: Section) => (node: HTMLDivElement | null) => {
      if (node) {
        elements.set(section, node);
      } else {
        elements.delete(section);
      }
    },
    [],
  );

  const getElement = useCallback(
    (section: Section) => elements.get(section) ?? null,
    [],
  );

  return (
    <ScrollContext.Provider value={{ scrollTo, register, getElement }}>
      {children}
    </ScrollContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within ScrollProvider");
  }
  return context;
};
