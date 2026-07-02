import { useLayoutEffect, useRef } from "react";
import PromoBanner from "./PromoBanner";
import Header from "./Header";

export default function TopBar({ onHeightChange }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => onHeightChange(el.getBoundingClientRect().height);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [onHeightChange]);

  return (
    <div ref={ref} className="fixed top-0 left-0 right-0 z-50">
      <PromoBanner />
      <Header />
    </div>
  );
}
