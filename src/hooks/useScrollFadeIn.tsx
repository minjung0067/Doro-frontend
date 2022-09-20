import { useCallback, useEffect, useRef } from "react";

export const useScrollFadeIn = (
  thresholdValue: number,
  translate3d: string,
  delay: string
) => {
  const dom = useRef<HTMLInputElement>(null);

  const handleScroll = useCallback((entries: any) => {
    const { current } = dom;
    console.log(entries);
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        current!.style.transitionProperty = "opacity transform";
        current!.style.transitionDuration = "1s";
        current!.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current!.style.transitionDelay = `${delay}`;
        current!.style.opacity = "50";
        current!.style.transform = "translate3d(0, 0, 0)";
      }
    });
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: thresholdValue,
      });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: "0",
      transform: `translate3d(0, ${translate3d}, 0)`,
    },
  };
};
