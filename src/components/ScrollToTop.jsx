import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/ScrollToTop.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la página al inicio
  }, [pathname]);

  return null; // Este componente no renderiza nada
};

export default ScrollToTop;