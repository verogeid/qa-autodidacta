# Tutorial – Semana 11

## Paso 1: HTML semántico

```html
<main>
  <article>
    <h1>Artículo principal</h1>
    <p>Contenido del artículo.</p>
  </article>
  <aside>Contenido relacionado</aside>
</main>
```

## Paso 2: Accesibilidad básica

```html
<img src="foto.jpg" alt="Retrato de Diego" />
<button aria-label="Cerrar ventana">X</button>
<nav role="navigation">...</nav>
```

## Paso 3: Lazy loading y optimización

```html
<img src="foto.jpg" loading="lazy" alt="..." />
<link rel="preload" href="fuente.woff2" as="font" type="font/woff2" crossorigin />
```

## Paso 4: Usar Lighthouse y herramientas

- Audita con Chrome DevTools > Lighthouse
- Revisa accesibilidad con extensión Axe
- Corrige problemas de contraste, navegación y títulos

## Paso 5: Minifica tu CSS y HTML

```bash
npm install --save-dev html-minifier terser
```

## Buenas prácticas

- Evitar usar `divs` sin propósito (“divitis”)
- Controlar el orden de tabulación (`tabindex`)
- Reducir recursos cargados en móvil
