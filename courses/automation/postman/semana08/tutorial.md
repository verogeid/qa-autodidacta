# Tutorial: Prevención de errores y mantenimiento avanzado

## Paso 1: Revisión de variables
Verifica que cada variable:
- Está definida en el entorno adecuado
- Tiene un valor válido o un fallback

## Paso 2: Autenticación robusta
Evita depender de tokens estáticos. Usa scripts para refrescar o guardar el token automáticamente:
```javascript
pm.environment.set("token", pm.response.json().token);
```

## Paso 3: CI/CD estable

Revisa que tus scripts en .github/workflows/ o en tu runner:

- Exporten el entorno correcto
- Carguen datos desde archivos
- Incluyan manejo de errores con códigos de salida

## Paso 4: Validaciones claras

Agrupa los tests:

```javascript
pm.test("Login - status 200", () => { ... });
pm.test("Login - token recibido", () => { ... });
```

## Paso 5: Mantenimiento continuo

- Revisa nombres y carpetas: ¿siguen siendo claros?
- Elimina scripts duplicados
- Añade comentarios en las descripciones de request

## Resultado esperado

- Tests resistentes a errores comunes
- Entornos bien definidos y separados
- Flujo preparado para escalar en proyectos reales
