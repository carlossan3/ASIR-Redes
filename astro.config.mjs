import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import d2 from 'astro-d2';

/**
 * Estructura del proyecto ASIR-Redes.
 */

const unidades = [
  {
    code: 'U1',
    slug: 'es/U01-Fundamentos',
    label: 'Fundamentos de redes',
  },
];

const unidadesExpandidasES = [
  {
    slug: 'es/U01-Fundamentos/U01.01.Comunicacion_y_red_de_datos_ES',
    label: '1 · Comunicación y red de datos',
  },
  {
    slug: 'es/U01-Fundamentos/U01.02.Componentes_y_primera_representacion_ES',
    label: '2 · Componentes y primera representación',
  },
  {
    slug: 'es/U01-Fundamentos/U01.03.Tipos_de_red_y_arquitecturas_de_servicio_ES',
    label: '3 · Tipos de red y arquitecturas de servicio',
  },
];

const unidadesEN = [
  {
    code: 'U1',
    slug: 'en/U01.Fundamentals',
    label: 'Network fundamentals',
  },
];

const unidadesExpandidasEN = [
  {
    slug: 'en/U01-Fundamentals/U01.01.Communication_and_data_networks_EN',
    label: '1 · Communication and data networks',
  },
  {
    slug: 'en/U01-Fundamentals/U01.02.Components_and_first_network_representation_EN',
    label: '2 · Components and first network representation',
  },
  {
    slug: 'en/U01-Fundamentals/U01.03.Network_types_and_service_architectures_EN',
    label: '3 · Network types and service architectures',
  },
];

const getUnidadesSidebar = (apartados) => {
  return unidades.map((unidad) => {
    const label = `${unidad.code} · ${unidad.label}`;

    if (apartados && apartados.length > 0) {
      return {
        label,
        collapsed: true,
        items: [
          {
            slug: unidad.slug,
            label: 'Indice de la unidad',
          },
          ...apartados,
        ],
      };
    }

    return {
      slug: unidad.slug,
      label,
    };
  });
};

export default defineConfig({
  site: 'https://carlossan3.github.io',
  base: '/ASIR-Redes',

  integrations: [
    starlight({
      title: 'Redes',

      description:
        'Apuntes de ASIR-Redes',

      customCss: [
        './src/styles/custom.css',
      ],

      defaultLocale: 'es',
      locales: {
        es: {
          label: 'Español',
          lang: 'es',
		  path: 'es',
          sidebar: [
            {
              slug: 'index',
              label: 'Inicio',
            },
            {
              label: 'Unidades de trabajo',
              items: getUnidadesSidebar(unidadesExpandidasES),
            },
          ],
        },
        en: {
          label: 'English',
          lang: 'en',
          path: 'en',
          sidebar: [
            {
              slug: 'en/index',
              label: 'Home',
            },
            {
              label: 'Study Units',
              items: getUnidadesSidebar(unidadesExpandidasEN),
            },
          ],
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