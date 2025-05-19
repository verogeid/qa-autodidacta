# Tutorial – Semana 9

## Paso 1: Transiciones suaves

```css
.button {
  background-color: #0077cc;
  transition: background-color 0.3s ease;
}
.button:hover {
  background-color: #005fa3;
}
```

## Paso 2: Animaciones con keyframes

```css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.card {
  animation: fade-in 1s ease-in;
}
```

## Paso 3: Interacciones avanzadas

```css
.acordeon__toggle:checked + .acordeon__panel {
  max-height: 200px;
  transition: max-height 0.5s ease;
}
```

## Buenas prácticas

- Animar solo propiedades performantes (`transform`, `opacity`)
- Evitar animaciones infinitas sin pausa
- Cuidar la accesibilidad: ofrecer opciones si el usuario prefiere movimiento reducido
