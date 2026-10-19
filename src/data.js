export const menuData = [
  // --- ENTRADAS ---
  {
    id: "tartar-atun",
    title: "Tartar de Atún Rojo & Palta",
    category: "entradas",
    price: 18.5,
    description:
      "Atún fresco cortado a cuchillo con emulsión de sésamo, palta hass y crocante de mandioca.",
    ingredients:
      "Atún rojo de aleta azul, palta, aceite de sésamo toscano, soya reducida, lima, chips de tapioca.",
    pairing: "Chardonnay de clima frío o Sauvignon Blanc.",
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600",
    isChefChoice: true,
    isVeggie: false,
    isGF: true,
    spicy: false,
  },

  {
    id: "croquetas-jamon",
    title: "Croquetas de Jamón Ibérico",
    category: "entradas",
    price: 14.0,
    description:
      "Croquetas cremosas por dentro y crujientes por fuera, elaboradas con auténtico jamón ibérico de bellota.",
    ingredients:
      "Jamón ibérico, bechamel artesanal, panko, emulsión de azafrán.",
    pairing: "Cerveza rubia de abadía o vino blanco seco.",
    image:
      "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=600",
    isChefChoice: false,
    isVeggie: false,
    isGF: false,
    spicy: false,
  },

  // --- PRINCIPALES (Carnes y más) ---
  {
    id: "wagyu",
    title: "Bife de Chorizo Wagyu",
    category: "principales",
    price: 38.0,
    description:
      "Corte de res Wagyu 300g marmoleado premium, acompañado con mantequilla de trufa negra y papas confitadas.",
    ingredients:
      "Bife Wagyu A5, trufa negra de Perigord, papas andinas, mantequilla clarificada, sal marina ahumada.",
    pairing:
      "Vino Red Blend Reserva o Cabernet Sauvignon de cuerpo estructurado.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600",
    isChefChoice: true,
    isVeggie: false,
    isGF: true,
    spicy: false,
  },
  {
    id: "risotto-hongos",
    title: "Risotto de Porcini & Trufa",
    category: "principales",
    price: 24.0,
    description:
      "Arroz Carnaroli cremoso con selección de hongos silvestres, queso Parmigiano Reggiano y aceite de trufa blanca.",
    ingredients:
      "Arroz Carnaroli, hongos porcini secos, girasoles fritos, parmigiano reggiano 24 meses, chalotas, vino blanco.",
    pairing: "Pinot Noir ligero o Nebbiolo.",
    image:
      "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&q=80&w=600",
    isChefChoice: false,
    isVeggie: true,
    isGF: true,
    spicy: false,
  },
  {
    id: "salmon-glaseado",
    title: "Salmón Glaseado en Miso",
    category: "principales",
    price: 29.0,
    description:
      "Filete de salmón rosado salvaje con glaseado de miso dulce, puré de edamame y brotes de bambú.",
    ingredients:
      "Salmón del atlántico, miso blanco, mirin, puré de edamame y menta, semillas de sésamo tostadas.",
    pairing: "Riesling seco o Sake Junmai Ginjo.",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=600",
    isChefChoice: false,
    isVeggie: false,
    isGF: true,
    spicy: false,
  },

  // --- PIZZAS ARTESANALES ---
  {
    id: "pizza-margherita",
    title: "Pizza Margherita DOC",
    category: "pizzas",
    price: 17.0,
    description:
      "Masa madre fermentada por 48 horas, salsa de tomate San Marzano, mozzarella fior di latte y albahaca fresca.",
    ingredients:
      "Harina italiana, tomates San Marzano, mozzarella de búfala, albahaca, aceite de oliva virgen extra.",
    pairing: "Cerveza lager artesanal o vino Chianti.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600",
    isChefChoice: false,
    isVeggie: true,
    isGF: false,
    spicy: false,
  },
  {
    id: "pizza-tartufo-prosciutto",
    title: "Pizza de Prosciutto & Trufa",
    category: "pizzas",
    price: 21.0,
    description:
      "Base blanca con crema de trufa negra, mozzarella, jamón serrano curado y hojas de rúcula fresca al horno.",
    ingredients:
      "Crema de trufa, mozzarella fior di latte, prosciutto di Parma, rúcula fresca, lajas de parmesano.",
    pairing: "Vino espumoso Brut o Chardonnay.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
    isChefChoice: true,
    isVeggie: false,
    isGF: false,
    spicy: false,
  },

  // --- HELADOS ARTESANALES ---
  {
    id: "helado-pistacho",
    title: "Helado Artesanal de Pistacho Siciliano",
    category: "helados",
    price: 8.5,
    description:
      "Cremoso helado elaborado con auténtico pistacho de Bronte (Sicilia) y trocitos crujientes tostados.",
    ingredients:
      "Pistacho puro de Sicilia, leche entera orgánica, crema fresca, azúcar de caña.",
    pairing: "Café espresso corto o licor amaretto.",
    image:
      "https://images.unsplash.com/photo-1633933358116-a27b902fad35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    isChefChoice: false,
    isVeggie: true,
    isGF: true,
    spicy: false,
  },
  {
    id: "helado-stracciatella",
    title: "Helado de Fior di Latte & Stracciatella",
    category: "helados",
    price: 7.5,
    description:
      "Delicada crema de leche fresca con finos hilos de chocolate amargo 70% fundido al momento.",
    ingredients: "Leche fresca, vainilla de Madagascar, chocolate amargo 70%.",
    pairing: "Vino dulce natural o moscatel.",
    image:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&q=80&w=600",
    isChefChoice: false,
    isVeggie: true,
    isGF: true,
    spicy: false,
  },

  // --- POSTRES ---
  {
    id: "volcan-chocolate",
    title: "Volcán de Chocolate 70%",
    category: "postres",
    price: 11.5,
    description:
      "Centro fluido de cacao ecuatoriano, servido tibio con helado artesanal de fior di latte y garrapiñada de pistachos.",
    ingredients:
      "Cacao amargo 70%, mantequilla de campo, huevos orgánicos, helado de crema pura, pistacho orgánico.",
    pairing: "Oporto Tawny o Café Espresso de especialidad.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600",
    isChefChoice: true,
    isVeggie: true,
    isGF: false,
    spicy: false,
  },
  {
    id: "cheesecake-maracuya",
    title: "Cheesecake de Maracuyá",
    category: "postres",
    price: 10.0,
    description:
      "Base crocante de almendras, crema suave de queso mascarpone y reducción ácida de fruta de la pasión.",
    ingredients:
      "Queso Mascarpone, almendras tostadas, maracuyá fresco, crema de leche.",
    pairing: "Cocktail Mimosa o Té Blanco de Jazmín.",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600",
    isChefChoice: false,
    isVeggie: true,
    isGF: true,
    spicy: false,
  },

  // --- BEBIDAS Y COCTELES ---
  {
    id: "smoked-old-fashioned",
    title: "Smoked Aura Old Fashioned",
    category: "bebidas",
    price: 14.0,
    description:
      "Bourbon añejado, bitters artesanales de naranja y ahumado directo en mesa con virutas de roble francés.",
    ingredients:
      "Bourbon Woodford Reserve, jarabe de arce orgánico, angostura, piel de naranja flameada.",
    pairing: "Ideal para acompañar cortes de carne o disfrutar solo.",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600",
    isChefChoice: true,
    isVeggie: true,
    isGF: true,
    spicy: false,
  },
  {
    id: "spicy-mezcalita",
    title: "Mezcalita de Jalapeño & Cilantro",
    category: "bebidas",
    price: 13.5,
    description:
      "Mezcal artesanal espadín, jugo de lima recién exprimido, infusión de jalapeño y borde con sal de gusano.",
    ingredients:
      "Mezcal 100% agave, licor Cointreau, zumo de lima, rodaja de jalapeño, sal de chiltepín.",
    pairing: "Excelente opción para entradas o pizzas picantes.",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600",
    isChefChoice: false,
    isVeggie: true,
    isGF: true,
    spicy: true,
  },
  {
    id: "limonada-menta-jengibre",
    title: "Limonada Artesanal de Menta & Jengibre",
    category: "bebidas",
    price: 6.0,
    description:
      "Refrescante limonada natural infusionada con jengibre fresco, hojas de menta orgánica y agua con gas.",
    ingredients:
      "Limones sutiles, jengibre fresco, menta, jarabe de agave, soda.",
    pairing: "Acompaña perfectamente cualquier plato.",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600",
    isChefChoice: false,
    isVeggie: true,
    isGF: true,
    spicy: false,
  },
];
export const restaurantInfo = {
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
