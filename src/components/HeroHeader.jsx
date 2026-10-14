import { useEffect, useRef } from "react";
import "./HeroHeader.css";

export function HeroHeader() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const pillsRef = useRef(null);

  const restaurantInfo = {
    name: "Sabor Raíz Bistro",
    tagline: "Sabores Auténticos de Latinoamérica",
    description:
      "Una experiencia gastronómica que combina la tradición criolla con técnicas contemporáneas. Ingredientes frescos, cortes premium y coctelería de autor.",
    schedule: "Lun - Dom: 12:00 PM - 11:00 PM",
    location: "Av. Principal 123, Centro",
    rating: "4.9 ★★★★★",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
  };

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
