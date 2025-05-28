# Tema 03 – Tutorial: comandos simulados de una CNC

Los comandos CNC (como G-code) activan funciones mecánicas. Aquí simularemos cómo se procesan.

## Paso 1: Comando entrante

Creamos un endpoint que reciba un comando:

```csharp
app.MapPost("/cnc/command", (Command cmd) => {
    if (string.IsNullOrEmpty(cmd.Code)) return Results.BadRequest();
    if (cmd.Code.StartsWith("G")) return Results.Ok(new { result = "EXECUTED" });
    return Results.StatusCode(422);
});

record Command(string Code);
```

## Paso 2: Probarlo desde Playwright

```csharp
var response = await request.PostAsync("http://localhost:5000/cnc/command", 
    new APIRequestContextOptions
    {
        DataObject = new { Code = "G01" }
    });

var json = await response.JsonAsync();
Console.WriteLine(json); // { result: "EXECUTED" }
```

## Paso 3: Casos negativos

Si el comando es incorrecto:

```csharp
var fail = await request.PostAsync("http://localhost:5000/cnc/command", 
    new APIRequestContextOptions
    {
        DataObject = new { Code = "INVALID" }
    });

Console.WriteLine(fail.Status); // 422
```

## Paso 4: Registrar ejecución

Agrega un log:

```csharp
var log = new List<string>();

app.MapPost("/cnc/logged", (Command cmd) => {
    log.Add($"{DateTime.Now}: {cmd.Code}");
    return Results.Ok(new { result = "LOGGED" });
});
```

---

- [^ Índice del curso](../readme.md)
- [Anterior <](../tema02/tutorial.md)
- [Siguiente >](../tema04/tutorial.md)

---

- [Volver al índice](./readme.md)
- [Ejercicios](./ejercicios.md)
