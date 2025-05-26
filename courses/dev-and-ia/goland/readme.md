# Go (Golang) desde el enfoque QA/Backend

Curso autodidacta de 4 semanas para aprender Go desde la práctica, orientado a perfiles QA o backend que desean crear herramientas, validar APIs o integrarse en proyectos con Go.

---

## Tema 1 – [Fundamentos del lenguaje](./tema01/readme.md)

### Aprendizajes clave:
- Sintaxis básica de Go.
- Tipos de datos, `structs` y funciones.
- Módulos (`go mod`).

### Ejercicios:
- Instala Go y crea tu primer programa con `fmt.Println`.
- Programa que lea un archivo `.json` y valide su estructura.
- Simulación de login: entrada de usuario y contraseña, validación y respuesta booleana.

---

## Tema 2 – [Testing y herramientas](./tema02/readme.md)

### Aprendizajes clave:
- Paquete `testing` para pruebas unitarias.
- `Testify` para asserts y mocks.
- Cobertura de pruebas con `go test`.

### Ejercicios:
- Crea pruebas para una función que calcule estadísticas.
- Test de carga usando `net/http` y `goroutines` para hacer múltiples peticiones concurrentes.

---

## Tema 3 – [Servidores, APIs y concurrencia](./tema03/readme.md)

### Aprendizajes clave:
- Servidores web con `net/http`.
- Endpoints GET y POST con manejo de JSON.
- Concurrencia con `goroutines` y `channels`.

### Ejercicios:
- API REST que devuelva datos de usuarios ficticios.
- Validador concurrente: múltiples validaciones que se ejecuten en paralelo.

---

## Tema 4 – [Integración y automatización](./tema04/readme.md)

### Aprendizajes clave:
- Compilación multiplataforma (`GOOS`, `GOARCH`).
- Automatización con GitHub Actions.
- Formateo (`go fmt`) y linters (`golangci-lint`).

### Ejercicios:
- Script que ejecute tests a una API REST y guarde resultados.
- Crear un binario reutilizable en pipelines.
- Integración de `go test` y `go build` en un workflow de CI/CD.

---

## Licencia

Este proyecto está bajo licencia MIT. Puedes usarlo, modificarlo y compartirlo.

---

## Autor

© Diego González Fernández  
[LinkedIn](https://www.linkedin.com/in/diego-gonzalez-fernandez)

---

[^ Índice de cursos](../readme.md)