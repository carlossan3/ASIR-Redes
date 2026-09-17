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
          translations: { en: 'U1 · Network fundamentals' },
          collapsed: false,
          autogenerate: { directory: 'U01' },
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