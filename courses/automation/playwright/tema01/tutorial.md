# Tutorial: Instalación y primeros pasos con Playwright y C#

## ¿Qué es Playwright?
Playwright es un framework de automatización de pruebas de Microsoft. Permite controlar navegadores como Chromium, Firefox y WebKit de forma programática, soportando múltiples lenguajes como JavaScript, Python y, en nuestro caso, C#.

## ¿Por qué usar C# en QA?
- Es fuertemente tipado, lo que ayuda a evitar errores comunes.
- Tiene una sintaxis clara y moderna.
- Se integra muy bien con herramientas de Microsoft y entornos industriales.

## Instalación del entorno

1. Instala .NET SDK (versión LTS recomendada):
   https://dotnet.microsoft.com/en-us/download

2. Crea un nuevo proyecto de consola:
```bash
dotnet new console -n PlaywrightIntro
cd PlaywrightIntro
```

3. Añade Playwright:
```bash
dotnet add package Microsoft.Playwright
```

4. Inicializa Playwright:
```bash
dotnet playwright install
```

## Primer test en C# con Playwright

Edita el archivo `Program.cs`:

```csharp
using Microsoft.Playwright;

class Program
{
    public static async Task Main()
    {
        using var playwright = await Playwright.CreateAsync();
        var browser = await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions { Headless = false });
        var page = await browser.NewPageAsync();
        await page.GotoAsync("https://example.com");
        await page.ScreenshotAsync(new PageScreenshotOptions { Path = "example.png" });
        await browser.CloseAsync();
    }
}
```

Este código lanza un navegador Chromium, accede a una web y toma una captura de pantalla.

## Buenas prácticas desde el inicio
- Usa `async/await` para mantener la ejecución fluida.
- Evita `Thread.Sleep`, usa los métodos que ofrece Playwright.
- Comienza creando métodos reutilizables, incluso en este primer ejemplo.

---

- [Volver al índice](./readme.md)
- [Ejercicios](./ejercicios.md)

---

- [Siguiente >](../tema02/tutorial.md)
