import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import loadingAnimation from "../assets/lottie/The-man-carrying-the-purchases-shopping.json";

export default function Loading() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const animation = lottie.loadAnimation({
      container: containerRef.current,
      animationData: loadingAnimation,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div ref={containerRef} className="w-52 h-52" />
    </div>
  );
}
