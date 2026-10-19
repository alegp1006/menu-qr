import "./footer.css";
import { restaurantInfo } from "../data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Columna 1: Marca e información general */}
        <div className="footer-brand">
          <h2 className="footer-title">
            {restaurantInfo?.name || "Astro Restaurant"}
          </h2>
          <p className="footer-tagline">
            {restaurantInfo?.tagline ||
              "Sabores únicos & experiencia gastronómica"}
          </p>
          <p className="footer-description">
            {restaurantInfo?.description ||
              "Ofrecemos platos preparados con los más altos estándares de calidad e ingredientes frescos."}
          </p>
        </div>

        {/* Columna 2: Contacto y Horarios */}
        <div className="footer-info">
          <h3 className="footer-section-title">Información</h3>
          <ul className="footer-list">
            <li>
              <span className="footer-icon">📍</span>
              <span>{restaurantInfo?.location || "La Habana, Cuba"}</span>
            </li>
            <li>
              <span className="footer-icon">🕒</span>
              <span>{restaurantInfo?.schedule || "12:00 PM - 10:00 PM"}</span>
            </li>
            <li>
              <span className="footer-icon">📞</span>
              <a href="tel:+5354756826" className="footer-link">
                +53 54756826
              </a>
            </li>
            <li>
              <span className="footer-icon">✉️</span>
              <a
                href="mailto:beaverdev.studio@gmail.com"
                className="footer-link">
                beaverdev.studio@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Redes Sociales */}
        <div className="footer-social">
          <h3 className="footer-section-title">Síguenos</h3>
          <div className="footer-social-links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Instagram">
              <span>Instagram</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Facebook">
              <span>Facebook</span>
            </a>
            <a
              href="https://wa.me/5354756826"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn highlight"
              aria-label="WhatsApp">
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Línea divisoria y Copyright */}
      <div className="footer-bottom">
        <p>
          © {currentYear} {restaurantInfo?.name || "Astro Studio"}. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
}
