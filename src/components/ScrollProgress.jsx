import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const value = (scrollTop / scrollHeight) * 100;

      setProgress(value);
    };

    window.addEventListener("scroll", calculateProgress);

    return () => window.removeEventListener("scroll", calculateProgress);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 z-9999 bg-linear-to-r from-sky-400 via-cyan-400 to-blue-500"
      style={{
        width: `${progress}%`,
      }}
    />
  );
};

export default ScrollProgress;
