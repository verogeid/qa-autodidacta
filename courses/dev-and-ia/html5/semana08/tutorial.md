# Tutorial – Semana 8

## Paso 1: Enfoque mobile-first

Define primero el estilo base para móviles:

```css
.card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-size: 1rem;
}
```

## Paso 2: Usar media queries para pantallas grandes

```css
@media screen and (min-width: 768px) {
  .card {
    flex-direction: row;
    font-size: 1.2rem;
  }
}
```

## Paso 3: Uso de unidades relativas

```css
:root {
  --font-base: 1rem;
  --espaciado: 2vw;
}
.container {
  padding: var(--espaciado);
  font-size: var(--font-base);
}
```

## Buenas prácticas

- Menos es más: diseño simple en móvil
- Evita valores absolutos (px)
- Usa `max-width`, `min-height`, y `object-fit` en imágenes
