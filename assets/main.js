<<<<<<< HEAD
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
        name: "Yogur artesanal con frutas",
        summary: "Yogur artesanal elaborado con leche entera pasteurizada, disponible en frutas y opciones naturales.",
        prices: [
          { label: "Litro", value: "$14.000" },
          { label: "280 ml", value: "$5.000" },
        ],
        details: [
          { label: "Base", value: "Leche entera de ordeño, pasteurizada." },
          { label: "Variedades", value: "Fresa, mora, melocotón, natural sin azúcar y natural con azúcar." },
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
    ],
  },
  {
    id: "panaderia",
    title: "Panadería",
    products: [],
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
  return { src: source, alt: image.getAttribute("alt") || "" };
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

const initializeCardImage = (image) => {
  const frame = image.closest("[data-image-frame]");
  const fallback = frame?.querySelector("[data-fallback]");
  const source = image.getAttribute("src")?.trim();
  if (!frame || !fallback || !source) return;

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
  const focusable = [...dialog.querySelectorAll("button, [href], [tabindex]:not([tabindex=\"-1\"]) ")].filter(
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
=======
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=e=>`https://images.pexels.com/photos/${e}/pexels-photo-${e}.jpeg?auto=compress&cs=tinysrgb&w=720&q=80`,t=[{name:`Espresso`,category:`Cafés`,price:`$7.000`,summary:`Concentrado, aromático y con un final ligeramente caramelizado.`,image:e(`30597790`),alt:`Espresso en taza artesanal — Raymond Petrik on Pexels`,ingredients:`Café molido y agua caliente.`,preparation:`Extraído lentamente para conservar sus aromas.`,taste:`Cuerpo concentrado, aroma profundo y final ligeramente caramelizado.`},{name:`Americano`,category:`Cafés`,price:`$8.000`,summary:`Espresso alargado con agua caliente; intenso pero más ligero.`,image:e(`28504480`),alt:`Americano en taza sobre mesa de madera — Raymond Petrik on Pexels`,ingredients:`Espresso y agua caliente.`,preparation:`Servido al alargar el espresso con agua recién calentada.`,taste:`Aroma intenso, cuerpo más ligero y final limpio.`},{name:`Cappuccino`,category:`Cafés`,price:`$11.000`,summary:`Espresso, leche vaporizada y una capa generosa de espuma.`,image:e(`30052601`),alt:`Cappuccino con espuma natural — Alexander gomez on Pexels`,ingredients:`Espresso, leche vaporizada y espuma de leche.`,preparation:`La leche se vaporiza y se termina con una capa generosa de espuma.`,taste:`Equilibrado, cremoso y con una espuma suave.`},{name:`Latte`,category:`Cafés`,price:`$12.000`,summary:`Café suave con abundante leche vaporizada y espuma fina.`,image:e(`34487852`),alt:`Latte con espuma natural en taza — Dany Ortiz on Pexels`,ingredients:`Espresso, leche vaporizada y espuma fina.`,preparation:`Se combina el espresso con abundante leche vaporizada.`,taste:`Suave, sedoso y delicadamente espumoso.`},{name:`Mocha`,category:`Cafés`,price:`$13.000`,summary:`Espresso, chocolate y leche caliente en una mezcla cremosa.`,image:e(`35289709`),alt:`Mocha de chocolate en taza oscura — Sergio Arreola on Pexels`,ingredients:`Espresso, chocolate y leche caliente.`,preparation:`El chocolate se integra con el espresso antes de añadir la leche caliente.`,taste:`Cremoso, dulce y de aroma intenso a café y chocolate.`},{name:`Chocolate caliente`,category:`Otras bebidas`,price:`$11.000`,summary:`Chocolate y leche caliente con textura espesa y reconfortante.`,image:e(`5377541`),alt:`Chocolate caliente servido en taza — Nataliya Vaitkevich on Pexels`,ingredients:`Chocolate y leche caliente.`,preparation:`Se calientan juntos hasta lograr una mezcla uniforme.`,taste:`Espeso, reconfortante y con sabor redondo a chocolate.`},{name:`Té`,category:`Otras bebidas`,price:`$8.000`,summary:`Infusión aromática servida caliente.`,image:e(`33074048`),alt:`Té caliente en taza de cerámica — Iulian Sandu on Pexels`,ingredients:`Hojas de té y agua caliente.`,preparation:`Infusionado en agua caliente hasta liberar sus aromas.`,taste:`Ligero, aromático y cálido.`},{name:`Frappé`,category:`Otras bebidas`,price:`$15.000`,summary:`Café frío licuado con leche y hielo.`,image:e(`37486068`),alt:`Frappé de café frío sobre barra — azra melek on Pexels`,ingredients:`Café, leche y hielo.`,preparation:`Se licúa en frío hasta integrar la leche y el hielo.`,taste:`Frío, cremoso y refrescante.`},{name:`Croissant`,category:`Para acompañar`,price:`$8.000`,summary:`Hojaldre dorado, ligero y de sabor mantequilloso.`,image:e(`37643626`),alt:`Croissant dorado servido en plato — zeynep on Pexels`,ingredients:`Masa de hojaldre y mantequilla.`,preparation:`Horneado hasta que sus capas quedan doradas.`,taste:`Ligero, crujiente por fuera y mantequilloso.`},{name:`Torta`,category:`Para acompañar`,price:`$10.000`,summary:`Porción de torta de la casa, húmeda y suave.`,image:e(`37719220`),alt:`Porción de torta sobre plato — Nati on Pexels`,ingredients:`Masa de torta y cobertura de la casa.`,preparation:`Horneada y servida en una porción individual.`,taste:`Húmeda, suave y delicadamente dulce.`},{name:`Cheesecake`,category:`Para acompañar`,price:`$12.000`,summary:`Relleno cremoso sobre una base crujiente de galleta.`,image:e(`33130816`),alt:`Cheesecake de vainilla sobre plato — Iulian Sandu on Pexels`,ingredients:`Queso crema y base crujiente de galleta.`,preparation:`Se prepara sobre una base de galleta y se enfría hasta afirmar.`,taste:`Cremoso, fresco y con una base crujiente.`},{name:`Sándwich`,category:`Para acompañar`,price:`$16.000`,summary:`Pan tostado con jamón y queso fundido.`,image:e(`30380526`),alt:`Sándwich tostado servido en plato — Cemrecan Yurtman on Pexels`,ingredients:`Pan, jamón y queso.`,preparation:`Tostado hasta fundir el queso y dorar el pan.`,taste:`Crujiente, cálido y sabroso.`}],n=document.querySelector(`#product-dialog`),r=document.querySelector(`#dialog-close`),i=document.querySelector(`#dialog-image`),a=document.querySelector(`[data-dialog-photo]`),o=document.querySelector(`[data-dialog-fallback]`),s=document.querySelector(`[data-dialog-fallback-name]`),c=new Map(t.map(e=>[e.name,e])),l=null,u=``,d=0,f=(e,t)=>{let n=document.querySelector(e);n&&(n.textContent=t)},p=()=>{a.classList.remove(`is-failed`),i.hidden=!1,i.classList.remove(`is-hidden`),o.hidden=!0},m=(e,t)=>{let a=c.get(e);a&&(window.clearTimeout(d),l=t,f(`#dialog-category`,a.category),f(`#dialog-title`,a.name),f(`#dialog-price`,a.price),f(`#dialog-summary`,a.summary),f(`#dialog-ingredients`,a.ingredients),f(`#dialog-preparation`,a.preparation),f(`#dialog-taste`,a.taste),p(),i.src=a.image,i.alt=a.alt,s.textContent=a.name,u=document.body.style.overflow,document.body.style.overflow=`hidden`,n.hidden=!1,n.classList.add(`is-open`),r.focus())},h=()=>{if(n.hidden||!n.classList.contains(`is-open`))return;n.classList.remove(`is-open`),document.body.style.overflow=u,d=window.setTimeout(()=>{n.hidden=!0},120);let e=l;l=null,e?.focus()},g=e=>{let t=e.closest(`[data-image-frame]`),n=t?.querySelector(`[data-fallback]`);!t||!n||(t.classList.add(`is-failed`),e.hidden=!0,n.hidden=!1)};document.querySelectorAll(`[data-open-product]`).forEach(e=>{e.addEventListener(`click`,()=>m(e.dataset.openProduct,e))}),document.querySelectorAll(`[data-image-frame] img`).forEach(e=>{e.addEventListener(`error`,()=>g(e))}),i.addEventListener(`load`,p),i.addEventListener(`error`,()=>{a.classList.add(`is-failed`),i.hidden=!0,o.hidden=!1}),r.addEventListener(`click`,h),n.addEventListener(`click`,e=>{e.target===n&&h()}),document.addEventListener(`keydown`,e=>{if(n.hidden||!n.classList.contains(`is-open`))return;if(e.key===`Escape`){e.preventDefault(),h();return}if(e.key!==`Tab`)return;let t=[...n.querySelectorAll(`button, [href], [tabindex]:not([tabindex="-1"])`)].filter(e=>!e.disabled&&!e.hidden);if(!t.length)return;let r=t[0],i=t[t.length-1];n.contains(document.activeElement)?e.shiftKey&&document.activeElement===r?(e.preventDefault(),i.focus()):!e.shiftKey&&document.activeElement===i&&(e.preventDefault(),r.focus()):(e.preventDefault(),r.focus())}),document.querySelectorAll(`.mobile-menu__panel a`).forEach(e=>{e.addEventListener(`click`,()=>{e.closest(`.mobile-menu`)?.removeAttribute(`open`)})});
>>>>>>> 546adc96740aa86779a47e0a0cd6329f2a7874ad
