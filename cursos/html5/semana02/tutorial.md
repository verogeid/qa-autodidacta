# Tutorial – Semana 2

## Paso 1: Crear una estructura semántica

Crea `index.html` en una nueva carpeta `semana-2`, con la siguiente estructura:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Blog personal</title>
  </head>
  <body>
    <header>
      <h1>Blog de Diego</h1>
      <nav>
        <a href="#about">Sobre mí</a>
        <a href="#posts">Artículos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>

    <main>
      <section id="about">
        <h2>Sobre mí</h2>
        <p>Soy QA Engineer y me gusta enseñar tecnología.</p>
      </section>

      <section id="posts">
        <h2>Últimos artículos</h2>
        <article>
          <h3>Cómo validar HTML</h3>
          <p>Aprende a validar tu HTML con herramientas del W3C.</p>
        </article>
      </section>
    </main>

    <footer id="contact">
      <p>Contacto: diego@example.com</p>
    </footer>
  </body>
</html>
```

## Paso 2: Añadir enlaces externos

Añade un enlace a `https://developer.mozilla.org` que se abra en otra pestaña:

```html
<a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">Visitar MDN</a>
```

## Paso 3: Validar semántica y accesibilidad

- Revisa tu estructura con el W3C Validator
- Usa el inspector del navegador (Ctrl+Shift+I) para comprobar la jerarquía


## Buenas prácticas

- No uses <div> sin sentido cuando puedes usar <section> o <article>
- Usa solo un <h1> por página
