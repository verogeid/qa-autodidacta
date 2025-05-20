# Soluciones: Fundamentos de Python

## 1. Variables y mensaje combinado:

```python
nombre = "Diego"
edad = 35
print(f"Me llamo {nombre} y tengo {edad} años.")
```

## 2. Función suma:

```python
def suma(a, b):
    return a + b

resultado = suma(3, 5)
print(resultado)  # 8
```

## 3. Bucle `for`:

```python
for i in range(1, 11):
    print(i)
```

## 4. Condición par o impar:

```python
num = 4
if num % 2 == 0:
    print("Es par")
else:
    print("Es impar")
```

## 5. Función saludo:

```python
def saludar(nombre):
    return f"Hola, {nombre}!"

print(saludar("Diego"))
```

> *Explicación*:
> Para calcular si un número es par usamos el operador módulo % que devuelve el resto de la división. Si el resto es 0, el número es par. La función suma recibe dos parámetros, los suma y devuelve el resultado, lo que permite reutilizarla con diferentes valores. El bucle for recorre un rango definido para imprimir secuencialmente los números del 1 al 10.