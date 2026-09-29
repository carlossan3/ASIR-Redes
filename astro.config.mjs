import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import d2 from 'astro-d2';

export default defineConfig({
  site: 'https://carlossan3.github.io',
  base: '/ASIR-Redes',

  integrations: [
    starlight({
      title: 'Planificación y Administración de Redes',
      description:
        'Apuntes bilingües de Planificación y Administración de Redes de 1.º de ASIR.',

      customCss: ['./src/styles/custom.css'],

      defaultLocale: 'es',

      locales: {
        es: {
          label: 'Español',
          lang: 'es',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },

      tableOfContents: false,

      components: {
        ThemeProvider: './src/components/Accesibilidad.astro',
      },

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/carlossan3/ASIR-Redes',
        },
      ],
    }),

    d2(),
  ],
});