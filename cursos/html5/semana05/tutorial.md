# Tutorial – Semana 5

## Paso 1: Tipografía básica

```css
body {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-texto);
  background-color: var(--color-fondo);
}
```

Agrega en el <head>:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
```

## Paso 2: Usar variables CSS

```css
:root {
  --color-primario: #0077cc;
  --color-secundario: #00bcd4;
  --color-texto: #222;
  --color-fondo: #f9f9f9;
}

h1 {
  color: var(--color-primario);
}
```

## Paso 3: Accesibilidad y contraste

- Verifica que haya suficiente contraste entre texto y fondo
- Asegúrate de que el texto no esté centrado innecesariamente
- Usa `rem` y no `px` en fuentes para permitir escalado


## Buenas prácticas

- Define tus variables en `:root`
- Agrupa variables por propósito
- Usa una escala tipográfica coherente
