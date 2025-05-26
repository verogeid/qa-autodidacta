Tema 02 – Soluciones: Variables, Constantes y Tipos Básicos

Estas soluciones son solo una forma posible de resolver los ejercicios. Asegúrate de entender el porqué de cada línea.

---

### Ejercicio 1

```go
var nombre string = "Diego"
fmt.Println(nombre)
```

Declaramos una variable con tipo explícito y asignamos un string. Luego lo imprimimos.


---

## Ejercicio 2

```go
const anioNacimiento int = 1990
fmt.Println(anioNacimiento)
```

Usamos const porque el año de nacimiento no cambia.


---

## Ejercicio 3

```go
ciudad := "Madrid"
fmt.Println(ciudad)
```

La variable se declara con `:=` y Go deduce que es de tipo string.


---

## Ejercicio 4

```go
var esEstudiante bool = true
var altura float64 = 1.75
var numeroHijos int = 2

fmt.Println("Estudiante:", esEstudiante, "Altura:", altura, "Hijos:", numeroHijos)
```

Se declaran tres variables con diferentes tipos y se imprime un mensaje usando todas.


---

## Ejercicio 5

```go
const IVA float64 = 0.21
var precio float64 = 100.0
precioFinal := precio + (precio * IVA)

fmt.Println("Precio final con IVA:", precioFinal)
```

Se usa una constante para el IVA y una variable para el precio. El resultado se calcula y muestra.


---

## Ejercicio 6

```go
activo := true
fmt.Println("Estado inicial:", activo)

activo = false
fmt.Println("Estado actualizado:", activo)
```

El valor booleano cambia entre true y false, demostrando cómo se modifica una variable.


---

Con estas soluciones completas puedes validar tu aprendizaje y reforzar cómo se usan variables y constantes en Go.

---

- [^ Índice del tema](./readme.md)

---

- [Tutorial](./tutorial.md)
- [Ejercicios](./ejercicios.md)
