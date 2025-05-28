# Tema 02 – Tutorial: simulaciones sin hardware

Vamos a simular una interfaz de control usando una API sencilla. Así aprenderás cómo preparar pruebas *end-to-end* de una máquina industrial, incluso sin tenerla físicamente.

## Paso 1: Crear una API REST simulada

Usaremos `ASP.NET Core Minimal API`. Creamos un endpoint que simule la respuesta de una CNC.

```csharp
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/cnc/status", () => new { status = "READY", temp = 42.3 });

app.Run();
```

Esto representa un controlador que podríamos consultar desde el sistema QA para verificar que la máquina está lista.

## Paso 2: Validar con Playwright

Instalamos Playwright y lo preparamos para lanzar una petición directa.

```csharp
using Microsoft.Playwright;

var playwright = await Playwright.CreateAsync();
var request = await playwright.APIRequest.NewContextAsync();

var response = await request.GetAsync("http://localhost:5000/cnc/status");
var json = await response.JsonAsync();

Console.WriteLine(json);
```

Validamos que status sea "READY" y que el valor temp no exceda un umbral.

## Paso 3: Control de errores

¿Qué ocurre si la máquina está en mantenimiento?

Añade un segundo endpoint:

```csharp
app.MapGet("/cnc/status/maintenance", () => Results.StatusCode(503));
```

Y en tu test:

```csharp
var res = await request.GetAsync("http://localhost:5000/cnc/status/maintenance");
Console.WriteLine(res.Status); // 503
```

Este tipo de pruebas es vital para sistemas críticos.

---

- [Índice](./readme.md)
- [Ejercicios](./ejercicios.md)

---

- [Anterior <](../tema01/tutorial.md)
- [Siguiente >](../tema03/tutorial.md)
