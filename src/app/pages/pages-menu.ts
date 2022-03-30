import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'ALERTAS',
    icon: 'bell-outline',
    link: '/pages/extra-components/alertas-orion'
  },
  {
    title: 'PEDIDOS',
    icon: 'shopping-cart-outline',
    children: [
      {
        title: 'Diario Pedidos',
        link: '/pages/tables/diario-pedidos'
      },
      {
        title: 'Diario Pedidos/Canal',
        link: '/pages/tables/diario-pedidos-tiendas'
      },
      {
        title: 'Productos Top',
        link: '/pages/tables/productos-top-fechas'
      },
      {
        title: 'Incidencias Top',
        link: '/pages/tables/incidencias-mensuales'
      },
      {
        title: 'Ventas Por Habitantes',
        link: '/pages/tables/ventas-por-habitantes'
      }
    ]
  },
  {
    title: 'CATÁLOGO',
    icon: 'layout-outline',
    children: [
      {
        title: 'Productos',
        children: [
          {
            title: 'Imagenes Cleaner',
            link: '/pages/tables/imagenes-cleaner'
          },
          {
            title: 'Historico Stock',
            link: '/pages/tables/historico-stock'
          },
          {
            title: 'Roturas',
            link: '/pages/tables/roturas'
          },
          {
            title: 'Productos Faqs',
            link: '/pages/tables/productos-faqs'
          },
          {
            title: 'Productos Urls Internas',
          }
        ]
      },
      {
        title: 'Categorías',
        children: [
          {
            title: 'Orden Productos',
            link: '/pages/tables/categoria-producto'
          },
          {
            title: 'Orden Carácteristicas'
          },
          {
            title: 'Árbol de Categorías',
            link: '/pages/charts/echarts',
          },
          {
            title: 'Sliders Elementor',
            link: '/pages/tables/sliders-elementor'
          }
        ]
      },
    ],
  },
  {
    title: 'MARKETPLACES',
    icon: 'home-outline',
    children: [
      {
        title: 'ManoMano',
        link: '/pages/tables/mano-mano'
      },
      {
        title: 'MAKRO',
        children: [
          {
            title: 'Productos Publicados',
            link: '/pages/tables/control-makro'
          },
          {
            title: 'Precios Rangos Makro',
            link: '/pages/tables/precios-makro-rangos'
          },
          {
            title: 'Precios Fijos',
            link: '/pages/tables/precios-fijos-makro'
          }
        ]
      },
      {
        title: 'Amazon',
        link: '/pages/tables/amazon-caracteres'
      }
    ]
  },
  {
    title: 'ESTADISTICAS',
    icon: 'trending-up-outline',
    children: [
      {
        title: 'Dashboard',
        link: '/pages/dashboard',
      },
      {
        title: 'Importe Ventas',
        link: '/pages/tables/importe-de-ventas'
      },
      {
        title: 'Ventas Categorías',
        link: '/pages/tables/categorias-por-meses'
      },
      {
        title: 'Ventas Productos',
        link: '/pages/tables/ventas-productos'
      },
      {
        title: 'Opiniones',
        children: [
          {
            title: 'Registro de Datos',
            link: '/pages/tables/opiniones-crud'
          },
          {
            title:'Gráfico de Datos',
            link: '/pages/tables/opiniones-grafico'
          }
        ]
      },
      {
        title: 'Favoritos',
        children: [
          {
            title: 'Top Favoritos',
            link: '/pages/tables/favoritos'
          }
        ]
      }
    ],
  },
  {
    title: 'ARCHIVOS',
    icon: 'folder-outline',
    children: [
      {
        title: 'Excels',
        children: [
          {
            title: 'Archivos Compartidos',
            link: '/pages/tables/carpeta-compartidos'
          },
          {
            title: 'Configuración Zonas',
            link: '/pages/tables/configuracion-zonas'
          },
          {
            title: 'Configuración Rutas',
            link: '/pages/tables/configuracion-links'
          }
        ]
      }
    ]
  },
  {
    title: 'ENVIOS',
    icon: 'car-outline',
    children: [
      {
        title: 'Transportistas',
        link: '/pages/tables/transportistas'
      },
      {
        title: 'Porcentajes Enviados',
        link: '/pages/tables/porcentaje-enviados'
      }
    ]
  },
  {
    title: 'NOTICIAS ORION91',
    icon: 'twitter-outline',
    children: [
      {
        title: 'Registrar Noticia'
      },
      {
        title: 'Actualizar Noticia'
      }
    ]
  }

  // {
  //   title: 'E-commerce',
  //   icon: 'shopping-cart-outline',
  //   link: '/pages/dashboard',
  //   home: true,
  // },
  // {
  //   title: 'IoT Dashboard',
  //   icon: 'home-outline',
  //   link: '/pages/iot-dashboard',
  // },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  // {
  //   title: 'Layout',
  //   icon: 'layout-outline',
  //   children: [
  //     {
  //       title: 'Stepper',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'List',
  //       link: '/pages/layout/list',
  //     },
  //     {
  //       title: 'Infinite List',
  //       link: '/pages/layout/infinite-list',
  //     },
  //     {
  //       title: 'Accordion',
  //       link: '/pages/layout/accordion',
  //     },
  //     {
  //       title: 'Tabs',
  //       pathMatch: 'prefix',
  //       link: '/pages/layout/tabs',
  //     },
  //   ],
  // },
  // {
  //   title: 'Forms',
  //   icon: 'edit-2-outline',
  //   children: [
  //     {
  //       title: 'Form Inputs',
  //       link: '/pages/forms/inputs',
  //     },
  //     {
  //       title: 'Form Layouts',
  //       link: '/pages/forms/layouts',
  //     },
  //     {
  //       title: 'Buttons',
  //       link: '/pages/forms/buttons',
  //     },
  //     {
  //       title: 'Datepicker',
  //       link: '/pages/forms/datepicker',
  //     },
  //   ],
  // },
  // {
  //   title: 'UI Features',
  //   icon: 'keypad-outline',
  //   link: '/pages/ui-features',
  //   children: [
  //     {
  //       title: 'Grid',
  //       link: '/pages/ui-features/grid',
  //     },
  //     {
  //       title: 'Icons',
  //       link: '/pages/ui-features/icons',
  //     },
  //     {
  //       title: 'Typography',
  //       link: '/pages/ui-features/typography',
  //     },
  //     {
  //       title: 'Animated Searches',
  //       link: '/pages/ui-features/search-fields',
  //     },
  //   ],
  // },
  // {
  //   title: 'Modal & Overlays',
  //   icon: 'browser-outline',
  //   children: [
  //     {
  //       title: 'Dialog',
  //       link: '/pages/modal-overlays/dialog',
  //     },
  //     {
  //       title: 'Window',
  //       link: '/pages/modal-overlays/window',
  //     },
  //     {
  //       title: 'Popover',
  //       link: '/pages/modal-overlays/popover',
  //     },
  //     {
  //       title: 'Toastr',
  //       link: '/pages/modal-overlays/toastr',
  //     },
  //     {
  //       title: 'Tooltip',
  //       link: '/pages/modal-overlays/tooltip',
  //     },
  //   ],
  // },
  // {
  //   title: 'Extra Components',
  //   icon: 'message-circle-outline',
  //   children: [
  //     {
  //       title: 'Calendar',
  //       link: '/pages/extra-components/calendar',
  //     },
  //     {
  //       title: 'Progress Bar',
  //       link: '/pages/extra-components/progress-bar',
  //     },
  //     {
  //       title: 'Spinner',
  //       link: '/pages/extra-components/spinner',
  //     },
  //     {
  //       title: 'Alert',
  //       link: '/pages/extra-components/alert',
  //     },
  //     {
  //       title: 'Calendar Kit',
  //       link: '/pages/extra-components/calendar-kit',
  //     },
  //     {
  //       title: 'Chat',
  //       link: '/pages/extra-components/chat',
  //     },
  //   ],
  // },
  // {
  //   title: 'Maps',
  //   icon: 'map-outline',
  //   children: [
  //     {
  //       title: 'Google Maps',
  //       link: '/pages/maps/gmaps',
  //     },
  //     {
  //       title: 'Leaflet Maps',
  //       link: '/pages/maps/leaflet',
  //     },
  //     {
  //       title: 'Bubble Maps',
  //       link: '/pages/maps/bubble',
  //     },
  //     {
  //       title: 'Search Maps',
  //       link: '/pages/maps/searchmap',
  //     },
  //   ],
  // },
  // {
  //   title: 'Charts',
  //   icon: 'pie-chart-outline',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/pages/charts/echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/pages/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/pages/charts/d3',
  //     },
  //   ],
  // },
  // {
  //   title: 'Editors',
  //   icon: 'text-outline',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //     },
  //   ],
  // },
  // {
  //   title: 'Tables & Data',
  //   icon: 'grid-outline',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //     {
  //       title: 'Tree Grid',
  //       link: '/pages/tables/tree-grid',
  //     },
  //   ],
  // },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'shuffle-2-outline',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
