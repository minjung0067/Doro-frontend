import { useCallback, useEffect, useRef } from "react";

export const useScrollCount = (
  end: number,
  start: number,
  duration: number,
  unit: string
) => {
  const dom = useRef<HTMLInputElement>(null);
  const stepTime = Math.abs(Math.floor(duration / (end - start)));
  let judge = true;

  const handleScroll = useCallback((entries: any) => {
    const { current } = dom;
    entries.forEach((entry: any) => {
      if (entry.isIntersecting && judge) {
        judge = false;
        let currentNumber = start;
        const counter = setInterval(() => {
          currentNumber += 1;
          current!.textContent = currentNumber + `${unit}`;

          if (currentNumber === end) {
            clearInterval(counter);
          }
        }, stepTime);
      }
    });
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
    textcomment: `${end}${unit}`,
  };
};
