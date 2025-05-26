# Fundamentos de Go – Tutorial paso a paso

## 1. Tu primer programa en Go

Vamos a crear un programa que muestre un mensaje en pantalla.

En Go, todo programa comienza con un paquete principal llamado **main**.

```go
package main

import "fmt"

func main() {
    fmt.Println("¡Hola, mundo!")
}
```

- **package main**: indica que este es el paquete principal que se ejecutará.

- **import "fmt"**: importa el paquete que contiene funciones para mostrar texto en pantalla.

- **func main()**: la función principal donde empieza la ejecución.

- **fmt.Println(...)**: imprime el texto que pasamos entre comillas y avanza a la siguiente línea.


Para ejecutar este código, guardamos el archivo con extensión .go y usamos el comando `go run nombrearchivo.go`.

---

## 2. Variables y tipos

En Go, debes declarar las variables indicando su tipo.

Por ejemplo:

```go
var nombre string = "Diego"
var edad int = 30
var activo bool = true
```

También puedes usar inferencia de tipos:

```go
nombre := "Diego"
edad := 30
activo := true
```

Donde `:=` declara y asigna el valor automáticamente.

---

## 3. Entrada del usuario

Para leer datos desde el teclado usamos:

```go
var nombre string
fmt.Println("¿Cómo te llamas?")
fmt.Scan(&nombre)
fmt.Println("Hola,", nombre)
```

Nota que pasamos `&nombre` para indicar la dirección de memoria, necesaria para que `fmt.Scan` guarde el valor.


---

## 4. Funciones

Las funciones permiten reutilizar código.

Definir una función que suma dos números:

```go
func sumar(a int, b int) int {
    return a + b
}
```

Luego la llamamos:

```go
resultado := sumar(3, 5)
fmt.Println("La suma es:", resultado)
```

---

## 5. Sentencias `if`

Permiten tomar decisiones:

```go
edad := 18
if edad >= 18 {
    fmt.Println("Eres mayor de edad")
} else {
    fmt.Println("Eres menor de edad")
}
```

---

## 6. Bucle `for`

Para repetir instrucciones:

```go
for i := 1; i <= 5; i++ {
    fmt.Println(i)
}
```

---

## 7. `Switch`

Elegir entre múltiples opciones:

```go
dia := "lunes"

switch dia {
case "lunes":
    fmt.Println("Inicio de semana")
case "viernes":
    fmt.Println("Fin de semana cerca")
default:
    fmt.Println("Día común")
}
```


---

Con esto tienes una base sólida para empezar en Go. Practica cada sección para familiarizarte con la sintaxis y conceptos.
