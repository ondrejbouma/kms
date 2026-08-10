// Základní cesta webu (odpovídá `base` v astro.config.mjs), vždy zakončená
// lomítkem – bezpečné pro skládání odkazů jako `${base}aktuality/`.
export const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
