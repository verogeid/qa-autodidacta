# Tema 02 – Soluciones explicadas

## Ejercicio 1

```csharp
app.MapGet("/cnc/load", () => new { load = new Random().Next(0, 101) });
```

Clave: se utiliza Random() para simular el comportamiento dinámico realista.

## Ejercicio 2

```csharp
app.MapGet("/cnc/error", () => Results.Problem("Machine is offline", statusCode: 500));
```

Razón: el código 500 representa error del servidor, típico en sistemas fuera de servicio.

## Ejercicio 3

Desde Playwright:

```csharp
var loadRes = await request.GetAsync("http://localhost:5000/cnc/load");
var loadJson = await loadRes.JsonAsync();
Console.WriteLine(loadJson); // Validar valores entre 0 y 100

var errorRes = await request.GetAsync("http://localhost:5000/cnc/error");
Console.WriteLine(errorRes.Status); // Debe ser 500
```

Comentario: Se cubre el control de errores esperados y valores fluctuantes.

## Ejercicio 4

```csharp
string[] states = ["READY", "IN USE", "IDLE"];
int idx = 0;

app.MapGet("/cnc/sequence", () => {
    var state = states[idx];
    idx = (idx + 1) % states.Length;
    return new { status = state };
});
```

Justificación: una variable de ciclo permite simular un cambio de estado, muy útil para testear automatización de flujos complejos.

---

- [Tutorial](./tutorial.md)
- [Ejercicios](./ejercicios.md)
