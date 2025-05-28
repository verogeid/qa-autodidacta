# Tema 03 – Soluciones explicadas

## Ejercicio 1

```csharp
if (cmd.Code.Contains("M")) return Results.Ok(new { result = "REJECTED" });
```

Justificación: filtros simples permiten testear comportamientos específicos sin hardware real.

## Ejercicio 2

```csharp
if (cmd.Code == "G01") {
    await Task.Delay(1000);
    return Results.Ok(new { result = "EXECUTED" });
}
```

Importancia: el delay simula el procesamiento físico real.

## Ejercicio 3

Desde Playwright:

```csharp
var results = new Dictionary<string, string>();
foreach (var code in new[] { "G01", "M03", "INVALID" }) {
    var res = await request.PostAsync("http://localhost:5000/cnc/command", 
        new APIRequestContextOptions { DataObject = new { Code = code } });
    var json = await res.JsonAsync();
    results[code] = json?.result?.ToString();
}
```

Aprendizaje: estructurar resultados permite validación en masa.

## Ejercicio 4

```csharp
app.MapGet("/cnc/logs", () => log);
```

Claves pedagógicas: almacenar trazas ayuda a depurar y revisar escenarios pasados sin repetir pruebas.

---

