# Ejercicios - Semana 2

## 1. Entorno
Crea un entorno con:
- `base_url`: `https://reqres.in/api`
- `user_id`: `2`

Modifica tu request `GET {{base_url}}/users/{{user_id}}` y comprueba la respuesta.

## 2. Variables de script
Usa un *Pre-request Script* para generar dinámicamente una variable `timestamp`.

Envía un `POST` a `/users` con este cuerpo:
```json
{
  "name": "diego",
  "createdAt": "{{timestamp}}"
}
```

## 3. Prioridad de variables

Declara lang = "es" en diferentes niveles y comprueba cuál prevalece.

## 4. Exportar entorno

Exporta tu entorno y súbelo al repositorio como `entorno_reqres.postman_environment.json`.

## Verificación

Revisa:

- Que cada request use variables, no URLs directas.
- Que las variables estén bien nombradas y organizadas.