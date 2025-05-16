# Tutorial – Semana 7

## Paso 1: Formulario básico

```html
<form class="form">
  <label class="form__label" for="email">Correo:</label>
  <input class="form__input" type="email" id="email" required />

  <label class="form__label" for="password">Contraseña:</label>
  <input class="form__input" type="password" id="password" required minlength="6" />

  <button class="form__submit" type="submit">Enviar</button>
</form>
```

## Paso 2: Estilos y validación

```css
.form__input:focus {
  outline: 2px solid var(--color-primario);
}

.form__input:invalid {
  border-color: red;
}

.form__input:valid {
  border-color: green;
}
```

## Paso 3: Mensajes de ayuda

```html
<small class="form__help">Mínimo 6 caracteres</small>
```

## Buenas prácticas

- Siempre usar `label` con `for`
- Marcar campos requeridos con `required`
- Mostrar pistas y errores sin JavaScript
- Usar aria-* si lo necesitas más adelante
