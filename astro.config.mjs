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
            // ESPAÑOL
            {
              label: '1 · Comunicación y red de datos',
              link: 'U01/U01.01.Comunicacion_y_red_de_datos_ES/',
              attrs: { class: 'nav-es' },
            },
            {
              label: '2 · Componentes y primera representación',
              link: 'U01/U01.02.Componentes_y_primera_representacion_ES/',
              attrs: { class: 'nav-es' },
            },
            {
              label: '3 · Tipos de red y arquitecturas de servicio',
              link: 'U01/U01.03.Tipos_de_red_y_arquitecturas_de_servicio_ES/',
              attrs: { class: 'nav-es' },
            },

            // INGLÉS
            {
              label: '1 · Communication and data networks',
              link: '../en/U01/U01.01.Communication_and_data_networks_EN/',
              attrs: { class: 'nav-en' },
            },
            {
              label: '2 · Components and first network representation',
              link: '../en/U01/U01.02.Components_and_first_network_representation_EN/',
              attrs: { class: 'nav-en' },
            },
            {
              label: '3 · Network types and service architectures',
              link: '../en/U01/U01.03.Network_types_and_service_architectures_EN/',
              attrs: { class: 'nav-en' },
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