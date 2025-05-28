# Tema 02 – Ejercicios

## Ejercicio 1

Crea un endpoint `/cnc/load` que devuelva el porcentaje de carga de una máquina (valor aleatorio entre 0 y 100).

## Ejercicio 2

Simula una máquina fuera de servicio. Crea un endpoint que devuelva código de estado HTTP 500 con un mensaje explicativo.

## Ejercicio 3

Desde Playwright, automatiza el testeo de los dos nuevos endpoints. Valida que:

- El de carga siempre devuelva un número válido
- El de error sea manejado correctamente (log del mensaje de error)

## Ejercicio 4 (avanzado)

Simula una secuencia de trabajo: primero `READY`, luego `IN USE`, y finalmente `IDLE`. Usa una variable global en la API que cambie su estado cada vez que se accede.

---

- [Tutorial](./tutorial.md)
- [Soluciones](./soluciones.md)
