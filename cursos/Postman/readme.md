# Curso: Postman (Newman) desde 0

## Descripción
Este curso autodidacta te guía paso a paso desde los fundamentos de *Postman* hasta su integración en flujos *CI/CD*, cubriendo buenas prácticas, control de errores, depuración, análisis de resultados y reportes. Está diseñado para completarse en 8 semanas (5-8 horas semanales), con ejercicios prácticos y guías detalladas.

## Estructura
Cada semana tiene:
- `README.md`: introducción teórica y objetivos
- `tutorial.md`: guía paso a paso
- `ejercicios.md`: ejercicios prácticos para validar lo aprendido

## Semanas
1. **Fundamentos de Postman**
2. **Colecciones y entornos**
3. **Variables, scripting y tests**
4. **Postman CLI y Newman**
5. **Integración CI/CD con GitHub Actions**
6. **Reportes, errores y depuración**
7. **Modularización y mantenimiento**
8. **Errores comunes y proyectos reales**

## Cómo usar este curso
1. Entra en la carpeta de cada semana y sigue los tutoriales.

2. Ejecuta Newman si deseas validar desde terminal:

```yaml
newman run coleccion.json -e entorno.json -r cli,html
```

## Evaluación final

Para certificar tu aprendizaje:

- Ejecuta una colección compleja con autenticación y múltiples endpoints.
- Usa datos externos, entornos variables y reportes automáticos.
- Simula errores y valida que tus tests los detectan correctamente.

---

## Licencia

Este proyecto está bajo licencia MIT. Puedes usarlo, modificarlo y compartirlo.

---

## Autor

© Diego González Fernández  
[LinkedIn](https://www.linkedin.com/in/diego-gonzalez-fernandez)


