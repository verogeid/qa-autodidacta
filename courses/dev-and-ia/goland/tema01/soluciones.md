# Soluciones – Fundamentos de Go

---

## Ejercicio 1: Tu primer programa

```go
package main

import "fmt"

func main() {
    fmt.Println("Hola, bienvenido al curso de Go")
}
```

Explicación: fmt.Println imprime el texto en consola y salta de línea.


---

## Ejercicio 2: Variables y tipos

```go
package main

import "fmt"

func main() {
    var nombre string = "Diego"
    var edad int = 30
    var aprendiendo bool = true

    fmt.Println("Nombre:", nombre)
    fmt.Println("Edad:", edad)
    fmt.Println("Aprendiendo Go:", aprendiendo)
}
```

Explicación: Las variables tienen tipos explícitos y se imprimen con fmt.Println.


---

## Ejercicio 3: Entrada del usuario

```go
package main

import "fmt"

func main() {
    var nombre string
    fmt.Print("Ingresa tu nombre: ")
    fmt.Scan(&nombre)
    fmt.Println("Hola,", nombre)
}
```

Explicación: fmt.Scan guarda el valor que el usuario escribe. El & es necesario para pasar la referencia de la variable.


---

## Ejercicio 4: Suma de números

```go
package main

import "fmt"

func sumar(a int, b int) int {
    return a + b
}

func main() {
    resultado := sumar(3, 5)
    fmt.Println("Resultado:", resultado)
}
```

Explicación: La función recibe dos enteros y devuelve su suma. En main se llama y se imprime.


---

## Ejercicio 5: Control de flujo


```go
package main

import "fmt"

func main() {
    var edad int
    fmt.Print("Introduce tu edad: ")
    fmt.Scan(&edad)

    if edad >= 18 {
        fmt.Println("Mayor de edad")
    } else {
        fmt.Println("Menor de edad")
    }
}
```

Explicación: El condicional if compara el valor y muestra el mensaje correspondiente.


---

## Ejercicio 6: Bucle for

```go
package main

import "fmt"

func main() {
    for i := 1; i <= 5; i++ {
        fmt.Println(i)
    }
}
```

Explicación: El bucle for se ejecuta mientras i sea menor o igual a 5. i++ incrementa en uno.


---

## Ejercicio 7: switch

```go
package main

import "fmt"

func main() {
    var dia string
    fmt.Print("Introduce un día: ")
    fmt.Scan(&dia)

    switch dia {
    case "lunes":
        fmt.Println("Inicio de semana")
    case "viernes":
        fmt.Println("Último día laboral")
    default:
        fmt.Println("Es otro día")
    }
}
```

Explicación: switch evalúa dia y responde según el valor. Se usa default para cualquier otro caso.


---

## Ejercicio 8: Función personalizada

```go
package main

import "fmt"

func multiplicaPorDos(n float64) float64 {
    return n * 2
}

func main() {
    resultado := multiplicaPorDos(4.5)
    fmt.Println("Resultado:", resultado)
}
```

Explicación: La función recibe un número decimal (float64), lo multiplica por dos y devuelve el resultado.
