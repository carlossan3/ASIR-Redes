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
          label: 'U1 · Fundamentos de redes',
          translations: { en: 'U1 · Network Fundamentals' },
          collapsed: false,
          items: [
            // Entradas en Español
            {
              label: '1 · Comunicación y red de datos',
              link: '/ASIR-Redes/es/u01/u0101comunicacion_y_red_de_datos_es/',
              attrs: { class: 'es-only' },
            },
            {
              label: '2 · Componentes y primera representación',
              link: '/ASIR-Redes/es/u01/u0102componentes_y_primera_representacion_es/',
              attrs: { class: 'es-only' },
            },
            {
              label: '3 · Tipos de red y arquitecturas de servicio',
              link: '/ASIR-Redes/es/u01/u0103tipos_de_red_y_arquitecturas_de_servicio_es/',
              attrs: { class: 'es-only' },
            },
            // Entradas en Inglés
            {
              label: '1 · Communication and data networks',
              link: '/ASIR-Redes/en/u01/u0101communication_and_data_networks_en/',
              attrs: { class: 'en-only' },
            },
            {
              label: '2 · Components and first network representation',
              link: '/ASIR-Redes/en/u01/u0102components_and_first_network_representation_en/',
              attrs: { class: 'en-only' },
            },
            {
              label: '3 · Network types and service architectures',
              link: '/ASIR-Redes/en/u01/u0103network_types_and_service_architectures_en/',
              attrs: { class: 'en-only' },
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