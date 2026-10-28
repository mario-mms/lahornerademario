# Seguridad del proyecto

## Alojamiento actual: GitHub Pages
- Mantén HTTPS activado en Settings → Pages → Enforce HTTPS cuando esté disponible. GitHub Pages proporciona HTTPS en dominios `github.io`.
- Recuerda que el repositorio y los archivos publicados son públicos. No subas contraseñas, tokens, claves API privadas, datos de clientes ni documentos internos.
- Activa autenticación en dos pasos (2FA/passkeys) en GitHub. Guarda los códigos de recuperación fuera del ordenador.
- Protege la cuenta de correo asociada y revisa periódicamente Settings → Collaborators/Access y Settings → Pages.
- Acepta actualizaciones de seguridad del navegador y del equipo. Revisa los cambios antes de fusionar pull requests.
- No añadas scripts, plugins, analítica ni formularios de terceros sin revisar su procedencia y privacidad.

## Límites importantes
GitHub Pages sirve archivos estáticos y no permite configurar libremente cabeceras HTTP de seguridad. HTTPS protege el transporte, pero no evita errores de contenido, una cuenta GitHub comprometida o la publicación accidental de datos. Esta web no debe recoger contraseñas ni datos de tarjetas. Para reservas futuras, usa un backend/proveedor de reservas seguro; nunca guardes reservas privadas en archivos JS o JSON públicos.

## Antes de publicar
1. Revisa todos los archivos y el historial del repositorio por si se ha subido información sensible.
2. Comprueba enlaces y recursos externos; evita contenido mixto (`http://`).
3. Verifica las páginas legales con el titular del negocio y completa todos los campos pendientes.
4. Inspecciona cookies y almacenamiento del navegador en el sitio desplegado.
5. Mantén una copia local del proyecto.

Este documento es una lista práctica, no una garantía de que un sitio sea imposible de comprometer.
