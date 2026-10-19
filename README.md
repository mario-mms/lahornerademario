# La Hornera de Mario — web multipágina

Plantilla estática organizada para editar con Visual Studio Code y publicar en GitHub Pages o Cloudflare Pages.

## Estructura

```text
la-hornera-de-mario/
├── index.html
├── pages/
│   ├── nosotros.html
│   ├── pasteleria.html
│   ├── panaderia.html
│   ├── cafeteria.html
│   └── visitanos.html
└── assets/
    ├── css/ (main.css, pages.css)
    ├── js/ (main.js)
    └── images/ (imágenes reemplazables)
```

## Dónde editar
- `index.html`: página de inicio.
- `pages/nosotros.html`: historia y presentación.
- `pages/pasteleria.html`: galería de productos.
- `pages/panaderia.html` y `pages/cafeteria.html`: secciones respectivas.
- `pages/visitanos.html`: dirección, mapa y redes.
- `assets/css/main.css`: estilos compartidos y diseño responsive.
- `assets/css/pages.css`: estilos de páginas interiores.
- `assets/js/main.js`: menú móvil y año del footer.
- `assets/images/`: sustituye los SVG de muestra por fotos reales.

## Cambiar imágenes
Sustituye los archivos de `assets/images/` manteniendo sus nombres y extensiones para no tocar el código. Si vas a usar JPG o WebP, actualiza también las rutas en HTML y CSS. Para el catálogo de pastelería, las fotos están en `assets/images/productos/`.

## Antes de publicar
Confirma dirección, horarios, teléfono y redes. Cambia todas las imágenes de muestra por fotografías autorizadas del negocio. Añade aviso de privacidad y páginas legales si corresponden.

## Packs Sorpresa
Esta versión es informativa y estática: no incluye todavía reservas, inventario ni notificaciones reales. Esa funcionalidad debe añadirse en una fase posterior con un servicio de backend seguro.


**Logo oficial:** se ha incorporado el archivo `assets/images/logo-hornera.jpg`, proporcionado por el negocio, en la cabecera y el pie de todas las páginas. La paleta se ha ajustado al granate y dorado de la primera propuesta.
