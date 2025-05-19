# Tutorial Semana 1: Primeros pasos con n8n

## 1. Instalación con Docker (recomendado)

```bash
docker run -it --rm \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

Accede a: `http://localhost:5678`

## 2. Explorando la interfaz

- **Panel lateral izquierdo**: nodos disponibles.
- **Zona central**: espacio de diseño.
- **Panel derecho**: configuración del nodo.


## 3. Crear tu primer flujo

1. Añade un nodo HTTP Request.
2. Configúralo así:

- Método: GET
- URL: `https://api.publicapis.org/entries`

3. Añade un nodo Set para seleccionar datos.
4. Conéctalos y ejecuta el flujo.

## 4. Guardar y volver a ejecutar

- Guarda el flujo con nombre primer-flujo.
- Haz clic en el botón de ejecutar para ver el resultado.
