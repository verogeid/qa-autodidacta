# Tema 02: Variables, Constantes y Tipos Básicos en Go

## 1. Variables: declaración y asignación

Las variables son espacios donde guardamos información que puede cambiar.

Para declararlas usas la palabra clave `var`, seguida del nombre y el tipo.

```go
var edad int
edad = 25
``|

También puedes declararla y asignarla al mismo tiempo:

```go
var nombre string = "Diego"
```

O usar la inferencia automática de tipos con `:=`:

```go
ciudad := "Madrid"
```

---

## 2. Constantes: valores que no cambian

Una constante es un valor fijo que no puede modificarse una vez definido.

Se declara con la palabra clave `const`:

```go
const pi float64 = 3.1416
```

Las constantes son útiles para valores que deben permanecer iguales, como configuraciones o parámetros matemáticos.


---

## 3. Tipos básicos en Go

- **int**: números enteros (por ejemplo, 10, -5)

- **float64**: números decimales (por ejemplo, 3.14, -0.5)

- **string**: texto entre comillas (por ejemplo, "Hola")

- **bool**: valores lógicos, verdadero o falso (true o false)



---

## 4. Buenas prácticas para nombrar variables

- Usa nombres descriptivos, como edad, nombreUsuario o precioProducto
- Comienza con letra minúscula
- Evita usar palabras reservadas o símbolos especiales
- Usa camelCase para variables con varias palabras, como numeroTelefonico


---

## 5. Ejemplos prácticos

```go
var contador int = 10
contador = 15

const saludo string = "Hola mundo"

precio := 9.99

esActivo := true

fmt.Println(saludo)
fmt.Println("Precio:", precio)
fmt.Println("Activo:", esActivo)
```

---

Con este conocimiento podrás definir datos en tus programas y controlar si pueden cambiar o no.

Continúa practicando para entender cuándo usar variables o constantes y cómo elegir el tipo adecuado.
