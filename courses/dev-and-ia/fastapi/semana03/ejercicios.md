# Semana 03 – Ejercicios

## Ejercicio 1

Crea un modelo `User` con los siguientes campos:

- `username`: string obligatorio
- `email`: string obligatorio
- `age`: entero opcional

Crea una ruta POST que reciba este modelo y devuelva el mismo objeto como respuesta.

---

## Ejercicio 2

Crea un modelo `Product` con los siguientes campos:

- `name`: string obligatorio
- `price`: float obligatorio
- `tags`: lista de strings opcional

Crea una ruta GET que devuelva una lista de productos de prueba con ese modelo como respuesta.

---

## Ejercicio 3

Crea un modelo `LoginData` con validación personalizada que no permita espacios en el `username`. Crea una ruta POST para validar logins y lanza un error si el username contiene espacios.
