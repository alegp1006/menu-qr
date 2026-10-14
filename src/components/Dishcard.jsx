import { menuData } from "../data";
import "./DishCard.css";

export function DishCard() {
  // Datos de ejemplo con foto de Unsplash
  const dish = {
    title: "Ceviche Clásico Peruano",
    description:
      "Pesca fresca del día marinada en leche de tigre al ají limo, acompañada de choclo tierno y camote glaseado.",
    price: "$16.50",
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800",
  };

  return menuData.map((dish) => (
    <article className="dish-card">
      {/* Imagen recortada a la izquierda */}
      <div
        className="dish-card-image"
        style={{ backgroundImage: `url(${dish.image})` }}
      />

      {/* Capa con gradiente oscuro transparente */}
      <div className="dish-card-gradient" />

      {/* Información del plato */}
      <div className="dish-card-content">
        <div>
          <div className="dish-card-header">
            <h3 className="dish-card-title">{dish.title}</h3>
            <span className="dish-card-price">{dish.price}</span>
          </div>
          <p className="dish-card-description">{dish.description}</p>
        </div>

        <div className="dish-card-badge">
          <span className="dish-card-badge-dot"></span>
          <span>Especial del Chef</span>
        </div>
      </div>
    </article>
  ));
}
