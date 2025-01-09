/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module 'astro-i18next';
interface ImportMetaEnv {
  readonly NODE_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
