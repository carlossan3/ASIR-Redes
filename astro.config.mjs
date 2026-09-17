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
          attrs: { class: 'sidebar-es' },
          collapsed: false,
          items: [
            {
              label: '1 · Comunicación y red de datos',
              link: '/ASIR-Redes/es/U01/U01.01.Comunicacion_y_red_de_datos_ES/',
            },
            {
              label: '2 · Componentes y primera representación',
              link: '/ASIR-Redes/es/U01/U01.02.Componentes_y_primera_representacion_ES/',
            },
            {
              label: '3 · Tipos de red y arquitecturas de servicio',
              link: '/ASIR-Redes/es/U01/U01.03.Tipos_de_red_y_arquitecturas_de_servicio_ES/',
            },
          ],
        },
        {
          label: 'U1 · Network Fundamentals',
          attrs: { class: 'sidebar-en' },
          collapsed: false,
          items: [
            {
              label: '1 · Communication and data networks',
              link: '/ASIR-Redes/en/U01/U01.01.Communication_and_data_networks_EN/',
            },
            {
              label: '2 · Components and first network representation',
              link: '/ASIR-Redes/en/U01/U01.02.Components_and_first_network_representation_EN/',
            },
            {
              label: '3 · Network types and service architectures',
              link: '/ASIR-Redes/en/U01/U01.03.Network_types_and_service_architectures_EN/',
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