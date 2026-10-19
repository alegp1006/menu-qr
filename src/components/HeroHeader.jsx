import { useEffect, useRef } from "react";
import "./HeroHeader.css";
import { restaurantInfo } from "../data";

export function HeroHeader() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const pillsRef = useRef(null);

  useEffect(() => {
    // API Nativo del Navegador para detectar cuando los elementos entran en pantalla
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Animación solo una vez
          }
        });
      },
      { threshold: 0.2 }, // Se dispara cuando se ve el 20% del elemento
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    if (pillsRef.current) observer.observe(pillsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <header className="hero-container">
      <div className="hero-content">
        {/* Lado Izquierdo: Entra desde la izquierda */}
        <div ref={leftRef} className="hero-left">
          <span className="hero-tagline">{restaurantInfo.tagline}</span>
          <h1 className="hero-title">{restaurantInfo.name}</h1>
          <p className="hero-description">{restaurantInfo.description}</p>

          {/* Badges con fade-up */}
          <div ref={pillsRef} className="hero-info-pills">
            <div className="hero-pill">📍 {restaurantInfo.location}</div>
            <div className="hero-pill">🕒 {restaurantInfo.schedule}</div>
            <div className="hero-pill">⭐ {restaurantInfo.rating}</div>
          </div>
        </div>

        {/* Lado Derecho: Entra desde la derecha rodando 90 grados */}
        <div ref={rightRef} className="hero-right">
          <div className="hero-image-wrapper">
            <img
              src={restaurantInfo.image}
              alt={restaurantInfo.name}
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
