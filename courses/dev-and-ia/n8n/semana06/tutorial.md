# Tutorial Semana 6: Reutilización y Modularidad

## 1. Crear un subflujo

1. Crea un nuevo flujo llamado `Generar Cat Fact`.
2. Añade un nodo `HTTP Request` a `https://catfact.ninja/fact`.
3. Finaliza con un `Set` que prepare un JSON con la frase.

## 2. Llamar al subflujo desde otro

1. En otro flujo, usa el nodo `Execute Workflow`.
2. Selecciona `Generar Cat Fact`.
3. Recibe el resultado y muestra con `Set`.

## 3. Pasar parámetros de entrada

1. Desde el flujo principal, crea un `Set`:
   ```json
   {
     "animal": "gato"
   }
   ```
2. Pásalo como entrada al subflujo.
3. En el subflujo, usa Function para acceder a $json.animal.

## 4. Combinar salidas

1. En el flujo principal, combina el resultado del subflujo con otro valor fijo (usando Merge).
