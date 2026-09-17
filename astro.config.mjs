import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import d2 from 'astro-d2';

export default defineConfig({
  site: 'https://carlossan3.github.io',
  base: '/ASIR-Redes',

  redirects: {
    '/ASIR-Redes': '/ASIR-Redes/es',
    '/ASIR-Redes/': '/ASIR-Redes/es/',
  },

  integrations: [
    starlight({
      title: 'Redes',

      description: 'Apuntes de ASIR-Redes',

      customCss: [
        './src/styles/custom.css',
      ],

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

      sidebar: [
        {
          label: 'Inicio',
          translations: { en: 'Home' },
          slug: 'es',
        },
        {
          label: 'U1 · Fundamentos de redes',
          translations: { en: 'U1 · Network fundamentals' },
          collapsed: false,
          items: [
            {
              slug: 'es/U01-Fundamentos',
              label: 'Índice de la unidad',
              translations: { en: 'Unit index' },
            },
            {
              slug: 'es/U01-Fundamentos/U01.01.Comunicacion_y_red_de_datos_ES',
              label: '1 · Comunicación y red de datos',
              translations: { en: '1 · Communication and data networks' },
            },
            {
              slug: 'es/U01-Fundamentos/U01.02.Componentes_y_primera_representacion_ES',
              label: '2 · Componentes y primera representación',
              translations: { en: '2 · Components and first network representation' },
            },
            {
              slug: 'es/U01-Fundamentos/U01.03.Tipos_de_red_y_arquitecturas_de_servicio_ES',
              label: '3 · Tipos de red y arquitecturas de servicio',
              translations: { en: '3 · Network types and service architectures' },
            },
          ],
        },
      ],

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

      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#2563eb',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/svg+xml',
            href: '/ASIR-Redes/favicon.svg',
          },
        },
      ],
    }),

    d2(),
  ],
});