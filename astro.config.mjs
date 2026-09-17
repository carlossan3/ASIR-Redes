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
    items: [
      {
        slug: 'es/u01/u0101comunicacion_y_red_de_datos_es',
        label: '1 · Comunicación y red de datos',
        translations: { en: '1 · Communication and data networks' },
      },
      {
        slug: 'es/u01/u0102componentes_y_primera_representacion_es',
        label: '2 · Componentes y primera representación',
        translations: { en: '2 · Components and first network representation' },
      },
      {
        slug: 'es/u01/u0103tipos_de_red_y_arquitecturas_de_servicio_es',
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