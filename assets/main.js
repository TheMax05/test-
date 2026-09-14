const categories = [
  {
    id: "cafe",
    title: "Café",
    products: [
      {
        id: "cafe-fuerte-molido",
        name: "Café fuerte molido",
        summary: "Café molido de cuerpo intenso, aroma profundo y amargor equilibrado.",
        prices: [
          { label: "Libra", value: "$38.000" },
          { label: "Media libra", value: "$20.000" },
          { label: "Un cuarto de libra", value: "$12.000" },
        ],
        details: [
          { label: "Presentaciones", value: "Libra, media libra y un cuarto de libra." },
          { label: "Perfil", value: "Cuerpo intenso, aroma profundo y amargor equilibrado." },
        ],
      },
      {
        id: "cafe-suave-molido",
        name: "Café suave molido",
        summary: "Café molido de perfil suave y aromático, con delicadas notas frutales y maduras.",
        prices: [
          { label: "Libra", value: "$38.000" },
          { label: "Media libra", value: "$20.000" },
          { label: "Un cuarto de libra", value: "$12.000" },
        ],
        details: [
          { label: "Presentaciones", value: "Libra, media libra y un cuarto de libra." },
          { label: "Perfil", value: "Suave, aromático y con notas frutales y maduras." },
        ],
      },
      {
        id: "cafe-en-grano-fuerte-suave",
        name: "Café en grano fuerte y suave",
        summary: "Café en grano disponible en tostado fuerte o suave, para elegir el carácter de cada taza.",
        prices: [
          { label: "Libra", value: "$38.000" },
          { label: "Media libra", value: "$20.000" },
        ],
        details: [
          { label: "Presentaciones", value: "Libra y media libra." },
          { label: "Tostados", value: "Fuerte y suave." },
        ],
      },
      {
        id: "cafe-organico",
        name: "Café orgánico",
        summary: "Café 100% sin procesos químicos ni sustancias artificiales, de perfil limpio y natural.",
        prices: [
          { label: "Libra", value: "$55.000" },
          { label: "Media libra", value: "$30.000" },
        ],
        details: [
          { label: "Presentaciones", value: "Libra y media libra." },
          { label: "Características", value: "Sin procesos químicos ni sustancias artificiales." },
        ],
      },
    ],
  },
  {
    id: "helado",
    title: "Helado",
    products: [
      {
        id: "malteada-normal",
        name: "Malteada normal",
        summary: "Helado de vainilla, café, leche condensada, leche y hielo en una mezcla cremosa.",
        prices: [{ value: "$12.000" }],
        details: [
          { label: "Ingredientes", value: "Helado de vainilla, café, leche condensada, leche y hielo." },
        ],
      },
      {
        id: "malteada-fresa",
        name: "Malteada de fresa",
        summary: "Helado de fresa, fresas, leche condensada, leche y hielo en una mezcla fresca y cremosa.",
        prices: [{ value: "$12.000" }],
        details: [
          { label: "Ingredientes", value: "Helado de fresa, fresas, leche condensada, leche y hielo." },
        ],
      },
      {
        id: "malteada-vainilla",
        name: "Malteada de vainilla",
        summary: "Helado de vainilla, leche, leche condensada y hielo, suave y refrescante.",
        prices: [{ value: "$12.000" }],
        details: [
          { label: "Ingredientes", value: "Helado de vainilla, leche, leche condensada y hielo." },
        ],
      },
      {
        id: "malteada-chocolate",
        name: "Malteada de chocolate",
        summary: "Helado de vainilla, chocolate, leche condensada, leche y hielo con sabor intenso y cremoso.",
        prices: [{ value: "$12.000" }],
        details: [
          { label: "Ingredientes", value: "Helado de vainilla, chocolate, leche condensada, leche y hielo." },
        ],
      },
    ],
  },
  {
    id: "aperitivos",
    title: "Aperitivos",
    products: [
      {
        id: "vino-cafe",
        name: "Vino de café",
        summary: "Aperitivo artesanal de café, con aroma profundo y un carácter cálido para disfrutar lentamente.",
        prices: [{ value: "$30.000" }],
        details: [{ label: "Tipo", value: "Aperitivo de café artesanal." }],
      },
      {
        id: "vino-ciruela",
        name: "Vino de ciruela",
        summary: "Aperitivo artesanal de ciruela, frutal, suave y con un dulzor equilibrado.",
        prices: [{ value: "$25.000" }],
        details: [{ label: "Tipo", value: "Aperitivo de ciruela artesanal." }],
      },
      {
        id: "vino-fresa",
        name: "Vino de fresa",
        summary: "Aperitivo artesanal de fresa, fresco, frutal y delicadamente dulce.",
        prices: [{ value: "$25.000" }],
        details: [{ label: "Tipo", value: "Aperitivo de fresa artesanal." }],
      },
      {
        id: "vino-flor-jamaica",
        name: "Vino de flor de Jamaica",
        summary: "Aperitivo artesanal de flor de Jamaica, aromático, floral y de color intenso.",
        prices: [{ value: "$25.000" }],
        details: [{ label: "Tipo", value: "Aperitivo de flor de Jamaica artesanal." }],
      },
      {
        id: "vino-coroso",
        name: "Vino de coroso",
        summary: "Aperitivo artesanal de coroso, frutal, aromático y de sabor particular.",
        prices: [{ value: "$25.000" }],
        details: [{ label: "Tipo", value: "Aperitivo de coroso artesanal." }],
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    products: [
      {
        id: "capuchino",
        name: "Capuchino",
        summary: "Leche cremosa y café, terminado con vainilla o arequipe y un toque de canela.",
        prices: [{ value: "$6.000" }],
        details: [
          { label: "Ingredientes", value: "Leche cremosa y café." },
          { label: "Adicionales", value: "Esencia de vainilla o arequipe y canela en polvo." },
        ],
      },
      {
        id: "espresso",
        name: "Espresso",
        summary: "Café preparado en máquina, disponible corto o largo, con aroma concentrado.",
        prices: [{ value: "$3.000" }],
        details: [
          { label: "Preparación", value: "Café preparado en máquina, corto o largo." },
        ],
      },
      {
        id: "tinto",
        name: "Tinto",
        summary: "Café americano servido caliente, sencillo, aromático y reconfortante.",
        prices: [{ value: "$2.000" }],
        details: [{ label: "Preparación", value: "Tinto americano servido caliente." }],
      },
      {
        id: "frappe",
        name: "Frappé",
        summary: "Nevado de café con leche, hielo, leche condensada, crema chantillí y vainilla.",
        prices: [{ value: "$12.000" }],
        details: [
          {
            label: "Ingredientes",
            value: "Leche, hielo, café, leche condensada, crema chantillí y vainilla.",
          },
        ],
      },
      {
        id: "mocachino",
        name: "Mocachino",
        summary: "Leche, café y chocolate en una combinación cremosa y equilibrada.",
        prices: [{ value: "$7.000" }],
        details: [{ label: "Ingredientes", value: "Leche, café y chocolate." }],
      },
      {
        id: "chocolate",
        name: "Chocolate",
        summary: "Chocolate artesanal con leche y un toque opcional de vainilla o canela.",
        prices: [{ value: "$6.000" }],
        details: [
          { label: "Ingredientes", value: "Chocolate artesanal y leche." },
          { label: "Adicionales", value: "Vainilla o canela." },
        ],
      },
      {
        id: "jugos-naturales",
        name: "Jugos naturales de frutas",
        summary: "Jugos naturales de fruta, preparados con leche o sin leche.",
        prices: [
          { label: "Con leche", value: "$8.000" },
          { label: "Sin leche", value: "$6.000" },
        ],
        details: [{ label: "Opciones", value: "Preparados con leche o sin leche." }],
      },
      {
        id: "yogur-artesanal",
        name: "Yogur artesanal",
        summary: "Yogur artesanal elaborado con leche entera pasteurizada, disponible en diferentes variedades.",
        prices: [
          { label: "Litro", value: "$14.000" },
          { label: "280 ml", value: "$5.000" },
        ],
        details: [
          { label: "Base", value: "Leche entera de ordeño, pasteurizada." },
          { label: "Variedades", value: "Café, Fresa, mora, melocotón, natural sin azúcar y natural con azúcar." },
        ],
      },
    ],
  },
  {
    id: "postres",
    title: "Postres",
    products: [
      {
        id: "jalea-real",
        name: "Jalea real",
        summary: "Jalea real multivitamínica, presentada como producto natural de la casa.",
        prices: [{ value: "$30.000" }],
        details: [{ label: "Presentación", value: "Producto natural de la casa." }],
      },
      {
        id: "miel",
        name: "Miel",
        summary: "Miel de la casa, dulce y aromática, ideal para disfrutar o acompañar.",
        prices: [{ value: "$15.000" }],
        details: [{ label: "Perfil", value: "Dulce y aromático." }],
      },
      {
        id: "polen",
        name: "Polen",
        summary: "Polen natural, de sabor característico y presentación tradicional.",
        prices: [{ value: "$20.000" }],
        details: [{ label: "Presentación", value: "Producto natural de presentación tradicional." }],
      },
      {
        id: "propoleo",
        name: "Propóleo",
        summary: "Propóleo de la casa, de sabor intenso y uso tradicional.",
        prices: [{ value: "$20.000" }],
        details: [{ label: "Perfil", value: "Sabor intenso y uso tradicional." }],
      },
      {
        id: "oblea-basica",
        name: "Oblea básica",
        summary: "Oblea crujiente con arequipe de café.",
        prices: [{ value: "$3.000" }],
        details: [{ label: "Ingredientes", value: "Oblea y arequipe de café." }],
      },
      {
        id: "oblea-especial",
        name: "Oblea especial",
        summary: "Oblea con arequipe de café, mermelada y queso.",
        prices: [{ value: "$5.000" }],
        details: [{ label: "Ingredientes", value: "Arequipe de café, mermelada y queso." }],
      },
      {
        id: "arequipe-dulce-leche",
        name: "Arequipe y dulce de leche",
        summary: "Arequipe de café y dulce de leche cortada, con textura suave y un sabor casero profundamente cafetero.",
        prices: [{ value: "$6.000" }],
        details: [{ label: "Sabor", value: "Arequipe de café y dulce de leche cortada." }],
      },
    ],
  },
  {
    id: "panaderia",
    title: "Panadería",
    products: [
      {
        id: "muffin-cafe-ciruela",
        name: "Muffin de café y ciruela",
        summary: "Muffin suave con notas de café y trozos de ciruela, horneado hasta lograr una miga tierna y aromática.",
        prices: [{ value: "$2.000" }],
        details: [{ label: "Sabor", value: "Café y ciruela." }],
      },
      {
        id: "almojabanas",
        name: "Almojábanas",
        summary: "Almojábanas colombianas de queso, doradas por fuera y suaves por dentro.",
        prices: [{ value: "$3.000" }],
        details: [{ label: "Ingredientes", value: "Preparación colombiana a base de queso." }],
      },
      {
        id: "galletas-ciruela",
        name: "Galletas de ciruela",
        summary: "Galletas caseras a base de ciruela campechana, con un toque frutal y una textura crujiente.",
        prices: [{ value: "$2.000" }],
        details: [{ label: "Sabor", value: "Ciruela campechana." }],
      },
      {
        id: "pudin-ciruela",
        name: "Pudín de ciruela",
        summary: "Pudín suave elaborado con ciruela campechana, de sabor frutal y textura delicada.",
        prices: [{ value: "$5.000" }],
        details: [{ label: "Sabor", value: "Ciruela campechana." }],
      },
      {
        id: "pudin-cafe",
        name: "Pudín de café",
        summary: "Pudín aromático de café con uvas pasas, suave, húmedo y lleno de sabor casero.",
        prices: [{ value: "$5.000" }],
        details: [{ label: "Ingredientes", value: "Café y uvas pasas." }],
      },
      {
        id: "mini-galletas-cafe",
        name: "Mini galletas de café",
        summary: "Pequeñas galletas horneadas con sabor a café, ideales para acompañar una bebida caliente.",
        prices: [{ value: "$2.000" }],
        details: [{ label: "Sabor", value: "Café." }],
      },
      {
        id: "brownie",
        name: "Brownie",
        summary: "Brownie de chocolate con relleno de arequipe de chocolate, intenso, húmedo y cremoso.",
        prices: [{ value: "$5.000" }],
        details: [{ label: "Relleno", value: "Arequipe de chocolate." }],
      },
      {
        id: "yucaditos",
        name: "Yucaditos",
        summary: "Palitos de yuca crocantes, dorados y ligeros, perfectos para compartir.",
        prices: [{ value: "$4.000" }],
        details: [{ label: "Textura", value: "Crocantes y dorados." }],
      },
      {
        id: "perlas-yuca-queso",
        name: "Perlas de yuca y queso",
        summary: "Perlitas de almidón de yuca con queso, doradas por fuera y suaves en el centro.",
        prices: [{ value: "$5.000" }],
        details: [{ label: "Ingredientes", value: "Almidón de yuca y queso." }],
      },
      {
        id: "pan-cafe",
        name: "Pan de café",
        summary: "Pan aromático de café con uvas pasas, de miga suave y sabor casero.",
        prices: [{ value: "$5.000" }],
        details: [{ label: "Ingredientes", value: "Café y uvas pasas." }],
      },
      {
        id: "mani",
        name: "Maní",
        summary: "Maní garrapiñado con sabor a café, crujiente, dulce y aromático.",
        prices: [{ value: "$3.000" }],
        details: [{ label: "Sabor", value: "Maní garrapiñado con café." }],
      },
    ],
  },
];

const productById = new Map(
  categories.flatMap((category) =>
    category.products.map((product) => [product.id, { ...product, category: category.title }]),
  ),
);

const dialog = document.querySelector("#product-dialog");
const dialogClose = document.querySelector("#dialog-close");
const dialogImage = document.querySelector("#dialog-image");
const dialogPhoto = document.querySelector("[data-dialog-photo]");
const dialogFallback = document.querySelector("[data-dialog-fallback]");
const dialogFallbackName = document.querySelector("[data-dialog-fallback-name]");
const dialogPrice = document.querySelector("#dialog-price");
const dialogDetails = document.querySelector("#dialog-details");
const productCards = [...document.querySelectorAll("[data-open-product]")];

let lastTrigger = null;
let previousBodyOverflow = "";
let closeTimer = 0;

const setDialogText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
};

const renderDialogPrices = (prices) => {
  dialogPrice.replaceChildren();
  dialogPrice.setAttribute(
    "aria-label",
    `Presentaciones y precios: ${prices
      .map(({ label, value }) => (label ? `${label} ${value}` : value))
      .join(", ")}`,
  );

  prices.forEach(({ label, value }) => {
    const option = document.createElement("span");
    option.className = "price-option";
    if (!label) option.classList.add("price-option--single");

    if (label) {
      const optionLabel = document.createElement("span");
      optionLabel.className = "price-option__label";
      optionLabel.textContent = label;
      option.append(optionLabel);
    }

    const price = document.createElement("span");
    price.className = "price-tag";
    price.textContent = value;
    price.setAttribute("aria-label", label ? `${label} ${value}` : `Precio ${value}`);
    option.append(price);
    dialogPrice.append(option);
  });
};

const renderDialogDetails = (details = []) => {
  dialogDetails.replaceChildren();
  dialogDetails.hidden = details.length === 0;

  details.forEach(({ label, value }) => {
    if (!label || !value) return;

    const row = document.createElement("div");
    const term = document.createElement("dt");
    const description = document.createElement("dd");
    term.textContent = label;
    description.textContent = value;
    row.append(term, description);
    dialogDetails.append(row);
  });
};

const showDialogFallback = (productName) => {
  dialogPhoto.classList.add("is-failed");
  dialogImage.hidden = true;
  dialogImage.removeAttribute("src");
  dialogFallback.hidden = false;
  dialogFallbackName.textContent = `${productName} · Imagen pendiente`;
};

const showDialogImage = (image) => {
  dialogPhoto.classList.remove("is-failed");
  dialogFallback.hidden = true;
  dialogImage.hidden = false;
  dialogImage.src = image.src;
  dialogImage.alt = image.alt || "";
};

const getCardImage = (card) => {
  const image = card?.querySelector("[data-image-frame] img");
  const source = image?.getAttribute("src")?.trim();
  if (!image || !source || image.hidden) return null;
  return {
    src: image.dataset.modalSrc || image.currentSrc || source,
    alt: image.getAttribute("alt") || "",
  };
};

const openProduct = (productId, trigger) => {
  const product = productById.get(productId);
  if (!product || !dialog) return;

  window.clearTimeout(closeTimer);
  lastTrigger = trigger;
  setDialogText("#dialog-category", product.category);
  setDialogText("#dialog-title", product.name);
  setDialogText("#dialog-summary", product.summary);
  renderDialogPrices(product.prices);
  renderDialogDetails(product.details);

  const image = getCardImage(trigger);
  if (image) showDialogImage(image);
  else showDialogFallback(product.name);

  previousBodyOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  dialog.hidden = false;
  dialog.classList.add("is-open");
  dialogClose.focus();
};

const closeProduct = () => {
  if (!dialog || dialog.hidden || !dialog.classList.contains("is-open")) return;

  dialog.classList.remove("is-open");
  document.body.style.overflow = previousBodyOverflow;
  closeTimer = window.setTimeout(() => {
    dialog.hidden = true;
  }, 120);

  const triggerToRestore = lastTrigger;
  lastTrigger = null;
  triggerToRestore?.focus();
};

const showCardFallback = (image) => {
  const frame = image.closest("[data-image-frame]");
  const fallback = frame?.querySelector("[data-fallback]");
  if (!frame || !fallback) return;
  frame.classList.add("is-failed");
  image.hidden = true;
  fallback.hidden = false;
};

const cardImageSizes = "(max-width: 599px) 31vw, (max-width: 899px) 45vw, 247px";
const responsiveImageWidths = [360, 720];

const enhanceImageWithWebp = (image) => {
  const source = image.getAttribute("src")?.trim();
  if (!source) return;

  const sourceUrl = new URL(source, document.baseURI);
  const sourcePath = sourceUrl.pathname;
  const fileName = decodeURIComponent(sourcePath.slice(sourcePath.lastIndexOf("/") + 1));
  const baseName = fileName.replace(/\.[^/.]+$/, "");
  const webpDirectory = new URL("./assets/img/webp/", document.baseURI);
  const picture = document.createElement("picture");
  const webpSource = document.createElement("source");

  webpSource.type = "image/webp";
  webpSource.sizes = cardImageSizes;
  webpSource.srcset = responsiveImageWidths
    .map((width) => `${new URL(`${baseName}-${width}.webp`, webpDirectory).href} ${width}w`)
    .join(", ");
  image.dataset.modalSrc = new URL(`${baseName}-720.webp`, webpDirectory).href;
  image.sizes = cardImageSizes;
  picture.append(webpSource);
  image.replaceWith(picture);
  picture.append(image);
};

const initializeCardImage = (image) => {
  const frame = image.closest("[data-image-frame]");
  const fallback = frame?.querySelector("[data-fallback]");
  const source = image.getAttribute("src")?.trim();
  if (!frame || !fallback || !source) return;

  enhanceImageWithWebp(image);
  image.hidden = false;
  fallback.hidden = true;
  image.addEventListener("error", () => showCardFallback(image));
};

productCards.forEach((card) => {
  card.addEventListener("click", () => openProduct(card.dataset.openProduct, card));
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openProduct(card.dataset.openProduct, card);
  });
});

document.querySelectorAll("[data-image-frame] img").forEach(initializeCardImage);

dialogImage.addEventListener("load", () => {
  dialogPhoto.classList.remove("is-failed");
  dialogImage.hidden = false;
  dialogFallback.hidden = true;
});

dialogImage.addEventListener("error", () => {
  const productName = document.querySelector("#dialog-title")?.textContent || "Producto";
  showDialogFallback(productName);
});

dialogClose.addEventListener("click", closeProduct);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeProduct();
});

document.addEventListener("keydown", (event) => {
  if (!dialog || dialog.hidden || !dialog.classList.contains("is-open")) return;

  if (event.key === "Escape") {
    event.preventDefault();
    closeProduct();
    return;
  }

  if (event.key !== "Tab") return;
  const focusable = [...dialog.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])')].filter(
    (element) => !element.disabled && !element.hidden,
  );
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

document.querySelectorAll(".mobile-menu__panel a").forEach((link) => {
  link.addEventListener("click", () => link.closest(".mobile-menu")?.removeAttribute("open"));
});
