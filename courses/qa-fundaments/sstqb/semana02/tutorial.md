# Semana 2 – Testing en el ciclo de vida del software

## Objetivos

- Entender los diferentes modelos de desarrollo de software y cómo impactan en el testing  
- Identificar las fases del testing en el ciclo de vida del software  
- Conocer la importancia del testing en mantenimiento y metodologías ágiles  

---

## 1. Modelos de desarrollo y testing

### 1.1 Modelo en cascada (Waterfall)

- Secuencial, cada fase debe completarse antes de pasar a la siguiente  
- Testing se realiza tras la codificación completa  
- Riesgo alto de encontrar defectos tarde y costosos de arreglar  

### 1.2 Modelos iterativos e incrementales

- *Iterativo:* el producto evoluciona con versiones sucesivas, cada iteración mejora funcionalidades  
- *Incremental:* se construye el producto por partes completas, entregando funcionalidades parciales pero funcionales  
- Permiten testing continuo y feedback temprano  

### 1.3 Modelos ágiles

- Testing integrado en el sprint desde el inicio  
- Pruebas automáticas y manuales combinadas  
- Feedback rápido y entrega continua  

---

## 2. Fases del testing en el ciclo de vida del software

| Fase de desarrollo        | Fase de testing correspondiente         |
|--------------------------|----------------------------------------|
| Requisitos de usuario    | Pruebas de aceptación                   |
| Requisitos funcionales    | Pruebas del sistema                     |
| Diseño técnico           | Pruebas de integración                  |
| Codificación             | Pruebas unitarias                       |

---

## 3. Testing en mantenimiento

- Tipos de mantenimiento: correctivo, perfectivo, adaptativo, preventivo  
- Testing en mantenimiento asegura que los cambios no introduzcan nuevos defectos (pruebas de regresión)  
- Es crucial para la calidad continua y la satisfacción del usuario  

---

## 4. Riesgos del testing tardío

- Incremento en el coste y tiempo para corregir defectos  
- Mayor probabilidad de fallos en producción  
- Retroalimentación insuficiente para mejorar requisitos y diseño  

---

## Resumen

- El modelo de desarrollo influye en cuándo y cómo se realiza el testing  
- Testing temprano y continuo reduce riesgos y mejora la calidad  
- El testing en mantenimiento es clave para la evolución segura del software  
- Metodologías ágiles integran testing durante todo el ciclo
