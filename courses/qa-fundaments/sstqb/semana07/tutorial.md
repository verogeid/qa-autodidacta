# Tema 7 - Seguimiento del progreso, métricas, cobertura y control de calidad

Para entender cómo avanza el *testing* y cómo mejorar la calidad, usamos *métricas*, que son medidas cuantitativas que reflejan el estado real del proyecto.

**Imagina las métricas como el marcador de un partido de fútbol:** te dicen quién va ganando y cómo está el juego sin necesidad de verlo completo. Pero no solo miramos el marcador, también analizamos jugadas y tácticas para mejorar.

---

## Métricas clave y su análisis avanzado

- **Porcentaje de pruebas ejecutadas:** indica cuánto del plan se ha completado. Pero ojo, no todas las pruebas tienen el mismo peso: priorizar según riesgo es crucial.  
- **Porcentaje de defectos detectados y corregidos:** mide la eficiencia en encontrar y solucionar errores. Además, es importante analizar la severidad y el impacto de esos defectos.  
- **Tasa de defectos abiertos:** refleja problemas aún sin resolver. Un alto valor puede indicar cuellos de botella en desarrollo o pruebas.  
- **Tasa de defectos reabiertos:** muestra la calidad de las correcciones y la efectividad de las pruebas de regresión.  
- **Análisis de tendencias:** comparar estas métricas en el tiempo ayuda a prever problemas o mejoras.

**¿Qué hacer con estos datos?**  
Si la tasa de defectos abiertos sube, es como si tu equipo estuviera perdiendo y no pudiera anotar; hay que ajustar tácticas para resolver errores rápido. Si la cobertura o ejecución es baja, es como solo haber jugado la primera mitad del partido, faltando el segundo tiempo para ganar.

---

## Cobertura de pruebas: profundidad y tipos

La *cobertura* mide qué tanto del software y sus requisitos se ha validado.

**Piensa en la cobertura como leer un libro:** si solo lees la introducción, perderás detalles esenciales que pueden arruinar la historia.

Tipos de cobertura:

- **Cobertura de requisitos:** porcentaje de requisitos validados. Es fundamental asegurar que todo lo pedido se pruebe.  
- **Cobertura de código:** porcentaje de líneas, ramas o condiciones ejecutadas durante las pruebas.  
- **Cobertura de decisiones:** qué decisiones lógicas dentro del código han sido evaluadas.  
- **Cobertura funcional:** pruebas que validan las funciones esperadas.  
- **Cobertura de riesgos:** pruebas que se centran en las áreas más propensas a fallos o de mayor impacto.

Una baja cobertura es como leer solo algunas páginas del libro y perder detalles que podrían causar errores no detectados.

---

## Cuellos de botella y optimización del flujo de trabajo

Un *cuello de botella* es un punto en el proceso que limita la velocidad total, como una puerta estrecha en un pasillo lleno de gente.

Detectar cuellos con métricas y análisis es vital para mejorar la eficiencia. Por ejemplo, retrasos en la revisión de defectos o ambientes de pruebas limitados pueden frenar todo.

---

## Control de Calidad (QC) vs Aseguramiento de Calidad (QA)

- **Control de Calidad (QC):** es revisar el plato terminado para asegurar que está bueno. En software, implica ejecutar pruebas para encontrar defectos.  
- **Aseguramiento de Calidad (QA):** es el chef que diseña la receta y supervisa la cocina para que todo salga bien desde el inicio. Busca mejorar procesos y prevenir defectos.

**En resumen:**

- QC *detecta* problemas en el producto final.  
- QA *previene* problemas mejorando procesos y prácticas.

---

## Informes para stakeholders: claridad y enfoque

Los informes deben mostrar el progreso, la calidad y los riesgos de forma clara, usando métricas comprensibles.

Un buen informe responde a preguntas como: ¿Estamos listos para lanzar? ¿Dónde están los mayores riesgos? ¿Qué problemas quedan abiertos?

---

- [^ Índice del Tema](./readme.md)  
- [Ejercicios](./ejercicios.md)
