import { defineConfig } from 'astro/config';

// SITE_URL a BASE_PATH nastavuje GitHub Actions workflow automaticky podle
// jména repozitáře a účtu (viz .github/workflows/deploy.yml).
// Pro lokální vývoj se použijí výchozí hodnoty níže – uprav si je podle
// svého GitHub účtu / názvu repozitáře, pokud web nasazuješ ručně.
// BASE_PATH může být i prázdný řetězec (web na kořenové doméně
// typu uzivatel.github.io) – proto se nesmí sloučit přes `||`.
const basePath = process.env.BASE_PATH;
const base = basePath === undefined ? '/kms' : basePath === '' ? '/' : basePath;

export default defineConfig({
  site: process.env.SITE_URL || 'https://example.github.io',
  base,
});
