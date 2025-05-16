# Ejercicios - Semana 6

## 1. Añadir logs útiles
En al menos dos tests añade `console.log` para inspeccionar la respuesta completa.

## 2. Aserciones múltiples
Valida que la respuesta:
- Tiene código 200
- Contiene un campo obligatorio
- Responde en menos de 500ms

## 3. Simular error
Fuerza una URL incorrecta.
- Analiza el mensaje de error
- Captura cómo lo refleja el reporte HTML y el log de Actions

## 4. Exportar múltiples formatos
- Ejecuta con reportes CLI + HTML + JSON
- Revisa el JSON y ubica los tests que fallaron

## 5. Evaluación del rendimiento
- Crea un request a una API pública que a veces responde lento.
- Verifica si supera los 800ms.
- Ajusta tu aserción para que no bloquee la ejecución pero sí lo indique en los logs.

## Verificación
- ¿Puedes reproducir fácilmente el fallo?
- ¿Tienes trazas completas de cada error?
- ¿El tiempo medio de respuesta aparece en algún reporte?
