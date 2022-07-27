import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'ALERTAS',
    icon: 'bell-outline',
    link: '/pages/extra-components/alertas-orion'
  },
  {
    title: 'DASHBOARD',
    icon: 'grid-outline',
    link: '/pages/tables/dashboard'
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
        title: 'Productos Top/Canal',
        link: '/pages/tables/productos-top-canales'
      },
      {
        title: 'Pedidos por Producto',
        link: '/pages/tables/ventas-por-producto'
      },
      {
        title: 'Ventas Por Habitantes',
        link: '/pages/tables/ventas-por-habitantes'
      },
      {
        title: 'Historico - Ax',
        link: '/pages/tables/historico-ax'
      },
      {
        title: 'Presupuestos',
        link: '/pages/tables/propuesta'
      },
      {
        title: 'Pedidos Pre-Almacén',
        link: '/pages/tables/registro-pedidos-pre-almacen'
      }
    ]
  },
  {
    title: 'FACTURAS',
    icon: 'archive-outline',
    children: [
      {
        title: 'Ax',
        link: '/pages/tables/facturas-ax'
      }
    ]
  },
  {
    title: 'ABONOS',
    icon: 'bookmark-outline',
    children: [
      {
        title: 'Abonos - Motivos',
        link: '/pages/tables/abonos'
      },
      {
        title: 'Abonos - Canales',
        link: '/pages/tables/abonos-canales'
      },
      {
        title: 'Abonos - Productos',
        link: '/pages/tables/abonos-productos'
      },
      {
        title: 'Abonos - Informes',
        link: '/pages/tables/abonos-incidencias-motivos'
      },
      {
        title: 'Abonos - Agencias Transporte',
        link: '/pages/tables/abonos-agencia-transporte'
      }
    ]

  },
  {
    title: 'INCIDENCIAS',
    icon: 'alert-triangle-outline',
    children: [
      {
        title: 'Incidencias Top',
        link: '/pages/tables/incidencias-mensuales'
      },
    ]
  },
  {
    title: 'DEVOLUCIONES',
    icon: 'flip-2-outline',
    children: [
      {
        title: 'Pedido Por Cliente',
        link: '/pages/tables/devoluciones'
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
            title: 'Registro Documentos',
            link: '/pages/tables/registro-documentos'
          },
          {
            title: 'Imagenes Cleaner',
            link: '/pages/tables/imagenes-cleaner'
          },
          {
            title: 'Historico Stock',
            link: '/pages/tables/historico-stock'
          },
          {
            title: 'Roturas Futuras',
            link: '/pages/tables/roturas'
          },
          {
            title: 'Roturas Actuales',
            link: '/pages/tables/roturas-actuales'
          },
          {
            title: 'Faqs',
            link: '/pages/tables/productos-faqs'
          },
          {
            title: 'Buscador de Productos',
            link: '/pages/tables/buscador-de-productos'
          },
          {
            title: 'Con pocas IMG',
            link: '/pages/tables/productos-con-pocas-imagenes'
          },
          {
            title: 'Sin Bullets',
            link: '/pages/tables/productos-sin-bullets'
          },
          {
            title: 'Sin Ean13',
            link: '/pages/tables/productos-sin-ean13-con-stock'
          },
          {
            title: 'Sin Mp',
            link: '/pages/tables/productos-sin-mp'
          },
          {
            title: 'Urls Internas',
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
            title: 'Faqs',
            link: '/pages/tables/categorias-faqs'
          },
          {
            title: 'Sin Facetas',
            link: '/pages/tables/categorias-sin-facetas'
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
        children: [
          {
            title: 'No Publicados',
            link: '/pages/tables/amazon-no-publicado'
          },
          {
            title: 'Amazon Errores',
            link: '/pages/tables/amazon-caracteres'
          },
          {
            title: "MP Amazon 'NO' ",
            link: '/pages/tables/productos-no-publicados-amazon'
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
    title: 'ESTADISTICAS',
    icon: 'trending-up-outline',
    children: [
      // {
      //   title: 'Dashboard',
      //   link: '/pages/dashboard',
      // },
      // {
      //   title: 'DashBoard',
      //   link: '/pages/tables/dashboard'
      // },
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
        title: 'Descuentos',
        link: '/pages/tables/cupones-descuentos'
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
      },
      {
        title: 'Contraseñas Plataformas',
        link: '/pages/tables/contrasenas-plataformas'
      }
    ]
  },
  {
    title: 'NOTICIAS ORION91',
    icon: 'twitter-outline',
    children: [
      {
        title: 'Registrar Noticia',
        link: '/pages/tables/registro-noticias'
      },
      {
        title: 'Listado Noticias',
        link: '/pages/tables/listado-noticias'
      }
    ]
  },

  {
    title: 'ORION LAB ADMIN',
    icon: 'shield-outline',
    link: '/pages/tables/control-usuarios'
  }
];
