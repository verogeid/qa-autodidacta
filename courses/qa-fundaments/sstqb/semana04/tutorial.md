# Tema 4 - Pruebas estáticas: revisiones, walkthroughs y análisis estático

En este tema aprenderás sobre las pruebas estáticas, técnicas fundamentales para detectar errores **sin necesidad de ejecutar el software**. Estas pruebas permiten mejorar la calidad desde las primeras fases del desarrollo, evitando errores costosos más adelante.

## ¿Qué son las pruebas estáticas y por qué son importantes?

Las pruebas estáticas examinan documentos, requisitos o código *sin ejecutarlos*. Es como revisar un plano antes de construir: si algo está mal dibujado, mejor detectarlo antes de poner un ladrillo.

Estas pruebas permiten:

- Identificar errores temprano.
- Reducir costes de corrección.
- Mejorar la calidad y comprensión del producto.
- Aumentar la productividad de los equipos.

## Tipos de pruebas estáticas

### ✅ Revisiones

Las revisiones implican la lectura y análisis estructurado de documentos o código por parte de varias personas. Hay distintos tipos según su formalidad:

#### 🔹 Revisión informal

Un compañero revisa tu trabajo y da su opinión. No hay reglas estrictas ni actas. Es rápida y útil para encontrar errores evidentes.  
*Ejemplo:* alguien lee tu correo antes de enviarlo.

#### 🔹 Walkthrough (paseo guiado)

El autor presenta su trabajo y lo explica al equipo. El objetivo es aprender, compartir ideas y detectar malentendidos.  
No hay roles fijos, pero se puede usar una lista de verificación.  
*Simil:* es como explicar tu receta a un grupo que opina y pregunta.

#### 🔹 Revisión técnica

Más estructurada. Se asignan roles formales y se usan documentos de soporte. El objetivo es detectar defectos técnicos.  
Suele usarse en equipos técnicos para revisar diseño o código.

#### 🔹 Inspección formal

Es la más rigurosa. Tiene un proceso definido, criterios de entrada y salida, métricas, y roles con responsabilidades claras.  
*Simil:* es como una auditoría con checklist, actas y responsables.

##### 🎭 Roles en una inspección formal

- **Moderador**: organiza, dirige la revisión y asegura que se sigue el proceso.
- **Autor**: quien creó el documento. Explica si es necesario, pero no lidera.
- **Revisor**: examina el contenido en busca de errores técnicos o de calidad.
- **Registrador (escriba)**: toma nota de los defectos encontrados y decisiones.

##### ✅ Beneficios de una inspección

- Detecta defectos de forma sistemática.
- Mejora la comprensión común del producto.
- Ayuda a formar a miembros nuevos del equipo.

## 🔍 Análisis estático de código

Es el uso de herramientas que examinan el código automáticamente sin ejecutarlo. Detectan:

- Errores comunes.
- Malas prácticas.
- Problemas de seguridad.
- Incumplimientos de estilo o estándares.

Ejemplos de herramientas:

- *SonarQube*  
- *ESLint*  
- *Checkstyle*

*Simil:* es como un corrector ortográfico que te avisa de errores al escribir.

## 🧾 Listas de verificación y métricas

- **Listas de verificación**: ayudan a no olvidar aspectos clave al revisar.
  *Ejemplo:* verificar nombres claros, buenas prácticas o formato correcto.

- **Métricas**: permiten cuantificar atributos del código o documentos.
  *Ejemplos:* líneas de código, complejidad ciclomática, número de defectos por revisión.

## 📈 ¿Cuándo se aplican las pruebas estáticas?

Desde el inicio del ciclo de vida del software:

- En los requisitos: para detectar ambigüedades.
- En el diseño: para validar la lógica antes de implementarla.
- En el código: para asegurar calidad antes de ejecutar pruebas dinámicas.

*Simil:* es como revisar el plano, los cálculos y la maqueta antes de encender una máquina.

---

Con esta base, podrás aplicar pruebas estáticas en tus proyectos y estarás preparado para responder cualquier pregunta del examen SSTQB sobre este tema.

---

- [^ Índice del Tema](./readme.md)  
- [Ejercicios](./ejercicios.md)
