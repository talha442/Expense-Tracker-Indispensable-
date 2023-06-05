import { useEffect } from "react";
import { useState } from "react";

export const useWindowSize = () => {
  // Set Screen Size
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  // Whenever Screen Size changes updates the size
  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return {
    width: size[0],
    height: size[1],
  };
};
