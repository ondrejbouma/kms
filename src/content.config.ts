import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Aktuality – krátké novinky a oznámení komise, řazené podle data
const aktuality = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/aktuality' }),
  schema: z.object({
    title: z.string(),
    datum: z.coerce.date(),
    perex: z.string(),
    obrazek: z.string().optional(),
    autor: z.string().optional(),
  }),
});

// Články – delší, méně časově vázaný obsah (osvěta, informace o obci apod.)
const clanky = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/clanky' }),
  schema: z.object({
    title: z.string(),
    datum: z.coerce.date(),
    perex: z.string(),
    obrazek: z.string().optional(),
    autor: z.string().optional(),
  }),
});

// Dokumenty ke stažení – zápisy a usnesení z jednání (PDF v /public/documents)
const dokumenty = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/dokumenty' }),
  schema: z.object({
    title: z.string(),
    datum: z.coerce.date(),
    soubor: z.string(),
    kategorie: z.string().optional(),
    popis: z.string().optional(),
  }),
});

// Akce – kalendář akcí komise (veřejná projednání, brigády, setkání…)
const akce = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/akce' }),
  schema: z.object({
    title: z.string(),
    datum: z.coerce.date(),
    cas: z.string().optional(),
    misto: z.string().optional(),
    popis: z.string(),
  }),
});

export const collections = { aktuality, clanky, dokumenty, akce };
