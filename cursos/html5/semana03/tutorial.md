# Tutorial – Semana 3

## Paso 1: Crear tu primer archivo CSS

1. Dentro de la carpeta `semana-3`, crea:
   - `index.html`
   - `styles.css`

2. En `index.html`, enlaza el CSS:

```html
<link rel="stylesheet" href="styles.css" />
```

3. Crea contenido mínimo en el HTML:

```html
<body>
  <h1 class="titulo-principal">Mi sitio</h1>
  <p id="intro">Bienvenido a mi web.</p>
</body>
```

## Paso 2: Agrega estilos en styles.css

```css
body {
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
}

.titulo-principal {
  color: navy;
  text-align: center;
}

#intro {
  font-size: 1.2rem;
  color: #333;
}
```

## Paso 3: Experimenta con el modelo de caja

Agrega este estilo:

```css
p {
  border: 1px solid gray;
  padding: 10px;
  margin: 20px;
  background-color: white;
}
```

Usa el inspector de tu navegador para visualizar el box model.

## Buenas prácticas

- Nunca mezcles CSS en línea y externo sin motivo
- Usa clases para estilos reutilizables
- Evita usar `id` para aplicar estilos salvo en casos concretos
