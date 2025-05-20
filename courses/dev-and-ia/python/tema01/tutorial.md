# Tutorial: Fundamentos de Python paso a paso

Vamos a aprender cómo usar los tipos de datos más comunes y controlar el flujo del programa con ejemplos sencillos.

## Tipos de datos

Python tiene tipos como `int`, `float`, `str` y `bool`. Por ejemplo:

```python
x = 5         # entero
y = 3.14      # flotante
nombre = "Ana"  # cadena de texto
es_valido = True  # booleano
```

## Operadores básicos

Puedes realizar operaciones como suma, resta, multiplicación y división:

```python
suma = x + y
es_mayor = x > 3
```

## Condicionales

Para tomar decisiones, usamos `if`:

```python
if x > 3:
    print("x es mayor que 3")
else:
    print("x no es mayor que 3")
```

## Bucles

Repetir acciones con `for` y `while`:

```python
for i in range(5):
    print(i)

contador = 0
while contador < 5:
    print(contador)
    contador += 1
```

## Funciones

Define bloques reutilizables de código:

```python
def saludar(nombre):
    return f"Hola, {nombre}!"

print(saludar("Ana"))
```

## Buenas prácticas

- Usa nombres descriptivos para variables y funciones.
- Indenta correctamente (4 espacios).
- Comenta solo cuando sea necesario para explicar "por qué", no "qué".

¡Practica estos ejemplos para afianzar tus conocimientos!
