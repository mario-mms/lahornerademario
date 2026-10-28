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


## Galería de fotos preparada
La página `pages/pasteleria.html` incluye 12 tarjetas de productos listas para personalizar, además de la tarjeta de contacto. Cada tarjeta tiene su propia imagen provisional. Puedes cambiar títulos, descripciones y fotos sin rehacer el diseño.

### Cómo poner una foto real
1. Copia la foto a `assets/images/productos/` (por ejemplo, `tarta-queso-01.jpg`).
2. Abre `pages/pasteleria.html` y busca el nombre de la tarjeta (por ejemplo `Tartas`).
3. En la etiqueta `<img>` de esa tarjeta, cambia la ruta actual por `../assets/images/productos/tarta-queso-01.jpg`.
4. Cambia también el texto `alt` para describir la foto (por ejemplo `Tarta de queso artesanal`).
5. Guarda y recarga la web. No hace falta tocar el CSS.

Las tarjetas iniciales usan ilustraciones provisionales, no fotografías reales. En `assets/images/productos/fotos/` hay notas para ayudarte a organizar las fotos. Esa carpeta sirve para organizar; las imágenes no se añaden solas a la web.

### Fotos en las demás páginas
Las páginas de panadería, cafetería y nosotros ya tienen una imagen destacada provisional. Para sustituirla, guarda la foto en `assets/images/` y cambia el `src` de la etiqueta `<img>` correspondiente en el HTML de esa página. La imagen de portada se configura en el atributo `background-image` de la sección `page-hero`; busca `page-hero-bg` y cambia la ruta por la foto elegida.

Consejo: conserva siempre una copia de las imágenes originales y usa fotos propias del negocio con permiso para publicarlas.


## Galerías preparadas de panadería y cafetería

Las páginas `pages/panaderia.html` y `pages/cafeteria.html` tienen seis tarjetas de ejemplo cada una, con imágenes SVG provisionales que mantienen la paleta granate, crema y dorado. No son fotos reales ni afirman que todos esos productos estén disponibles: cambia los títulos y descripciones para que coincidan con la oferta del negocio.

- Panadería: guarda fotos en `assets/images/panaderia/`.
- Cafetería: guarda fotos en `assets/images/cafeteria/`.

Para cambiar una imagen, abre la página correspondiente, busca la tarjeta (por ejemplo `Hogazas` o `Desayunos`) y cambia el `src` de su etiqueta `<img>` por la ruta de tu archivo. Ejemplo: `../assets/images/panaderia/hogazas.jpg`. Actualiza también `alt` para describir la foto. No hace falta tocar el CSS ni el JavaScript. Cada carpeta contiene un `LEEME.txt` con los mismos pasos.


## Páginas legales y privacidad
Se han añadido `pages/aviso-legal.html`, `pages/privacidad.html` y `pages/cookies.html`, enlazadas desde el pie de página. Son plantillas y contienen campos `[AÑADIR]`: no se deben considerar terminadas hasta que el titular legal del negocio aporte y verifique los datos. La política de cookies debe revisarse tras desplegar la web y siempre que se incorporen servicios nuevos.

## Seguridad en GitHub Pages
Consulta `SECURITY.md`. Activa HTTPS en Settings → Pages, protege tu cuenta GitHub con 2FA/passkeys y no publiques secretos ni datos de clientes. GitHub Pages no permite configurar libremente cabeceras HTTP de seguridad; HTTPS no significa que el sitio sea invulnerable. Se ha retirado el mapa incrustado para no cargar Google Maps automáticamente; el usuario lo abre al pulsar el enlace. Se han retirado las fuentes de Google externas para reducir llamadas a terceros.


## Antes de publicar (importante)
- En `pages/visitanos.html`, sustituye `CORREO_DEL_NEGOCIO` y `NUMERODETELEFONO` por los datos reales.
- Completa nombre y apellidos, NIF, dirección confirmada, correo y teléfono en las páginas legales. No publiques los campos entre corchetes.
- El mapa de Google Maps está incrustado y carga contenido de terceros. Revisa si debe bloquearse hasta consentimiento antes de publicar.
- Google Analytics y publicidad NO están instalados. Si se añaden, actualiza privacidad/cookies e implementa consentimiento previo para etiquetas no esenciales.


## Componentes comunes y datos de contacto

- El header compartido está en `components/header.html` y el footer en `components/footer.html`. Las páginas los insertan automáticamente mediante `assets/js/main.js`.
- El sitio es estático y no necesita backend, pero **para cargar los componentes debe abrirse desde un hosting HTTP/HTTPS** (por ejemplo, GitHub Pages o cualquier alojamiento estático). La restricción de seguridad de los navegadores impide que `fetch()` cargue estos archivos al abrir directamente las páginas con `file://`.
- Para modificar el teléfono, abre `pages/visitanos.html` y busca `NUMERODETELEFONO`. Sustituye el marcador en el enlace `tel:` y el texto visible por el número real. Para WhatsApp, sustituye `NUMERODETELEFONO` del enlace `https://wa.me/` por el número completo en formato internacional, **sin signo +, espacios ni guiones**.
- Para modificar el correo, busca `CORREO_DEL_NEGOCIO` en `pages/visitanos.html` y reemplázalo por la dirección real tanto en el `mailto:` como en el texto visible.
- El favicon utiliza `assets/images/logo-hornera.jpg`. Si se cambia el logotipo, actualiza esa imagen o la referencia del favicon en todas las páginas.
- Las imágenes de productos de pastelería están en `assets/images/pasteleria/`.
- La ubicación enlazada en Google Maps es el enlace compartido proporcionado. El mapa incrustado utiliza la URL de Google Maps construida a partir de ese enlace; verifica visualmente la ubicación tras publicar, ya que Google puede cambiar el comportamiento de las URL compartidas.
