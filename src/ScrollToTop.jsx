import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the location changes
  }, [location]);

  return null; // This component doesn't need to render anything
};

export default ScrollToTop;
