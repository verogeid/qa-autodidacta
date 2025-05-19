# Tutorial – Semana 6

## Paso 1: Estructura HTML

```html
<div class="user-card user-card--highlighted">
  <img class="user-card__avatar" src="avatar.jpg" alt="Avatar" />
  <h2 class="user-card__name">Diego González</h2>
  <p class="user-card__role">QA Engineer</p>
</div>
```

## Paso 2: Estilos con BEM

```css
.user-card {
  background-color: var(--color-fondo);
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-card--highlighted {
  border: 2px solid var(--color-primario);
}

.user-card__avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.user-card__name {
  font-size: 1.2rem;
  font-weight: bold;
}

.user-card__role {
  color: var(--color-secundario);
}
```

## Paso 3: Organización de archivos

```plaintext
/components
  /user-card
    index.html
    style.css
  /button
    ...
```

## Buenas prácticas

- Usa siempre clases: nada de estilos por etiqueta
- Cada componente tiene su propio archivo
- Prefiere modificar con --modificador en lugar de crear nuevas clases
