import "./DishCard.css";

export function DishCard({ menuData }) {
  if (!Array.isArray(menuData) || menuData.length === 0) {
    return (
      <p style={{ color: "#a3a3a3", textAlign: "center" }}>
        No hay platos disponibles.
      </p>
    );
  }

  return (
    <div className="dish-grid">
      {menuData.map((dish, index) => {
        // Formatear precio a decimales USD (ej: 12 -> 12.00)
        const formattedPrice =
          typeof dish.price === "number"
            ? `$${dish.price.toFixed(2)}`
            : `$${Number(dish.price || 0).toFixed(2)}`;

        return (
          <article className="dish-card" key={dish.id || index}>
            {/* Imagen de fondo a la izquierda */}
            <div
              className="dish-card-image"
              style={{ backgroundImage: `url(${dish.image})` }}
            />

            {/* Capa de difuminado y gradiente en la intersección */}
            <div className="dish-card-gradient" />

            {/* Información del plato */}
            <div className="dish-card-content">
              <div className="dish-card-top">
                <h3 className="dish-card-title">{dish.title}</h3>
                <p className="dish-card-description">{dish.description}</p>
              </div>

              {/* Precio más grande abajo y badge */}
              <div className="dish-card-footer">
                <div className="dish-card-badge">
                  <span className="dish-card-badge-dot"></span>
                  <span>Especial</span>
                </div>
                <span className="dish-card-price">
                  {formattedPrice}{" "}
                  <small className="dish-card-currency">USD</small>
                </span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
