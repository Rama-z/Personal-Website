import React from "react";

export default function useOnScreen(ref: React.MutableRefObject<any>) {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return isIntersecting;
}
