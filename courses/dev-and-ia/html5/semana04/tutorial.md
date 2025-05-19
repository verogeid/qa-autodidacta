
# Tutorial – Semana 4

## Paso 1: Crear layout con Flexbox

1. En tu HTML:

```html
<body>
  <header>Header</header>
  <main class="contenedor">
    <nav>Menú</nav>
    <section>Contenido principal</section>
    <aside>Barra lateral</aside>
  </main>
  <footer>Pie de página</footer>
</body>
```

2. En styles.css:

```css
.contenedor {
  display: flex;
  gap: 20px;
}

nav,
aside {
  width: 20%;
}

section {
  flex-grow: 1;
}
```

## Paso 2: Usar pseudoclases y selectores

```css
nav a:hover {
  color: red;
}

ul > li:first-child {
  font-weight: bold;
}

p:nth-child(odd) {
  background-color: #eee;
}
```

## Paso 3: Añadir media queries simples

```css
@media (max-width: 768px) {
  .contenedor {
    flex-direction: column;
  }

  nav,
  aside {
    width: 100%;
  }
}
```

## Buenas prácticas

- Usa `class` en lugar de `id` para estilos reutilizables
- Prioriza estilos específicos sin abusar de `!important`
- Aplica `media queries` de forma progresiva
