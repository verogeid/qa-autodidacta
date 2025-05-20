# Tutorial Semana 2 - Ciclo de vida y calidad

## 1. Modelos de desarrollo y su relación con el testing

- *V-model*: las pruebas se planifican desde el inicio. Cada fase de desarrollo tiene su fase de prueba.
- *Iterativo / incremental*: pruebas frecuentes tras cada entrega.
- *Ágil*: pruebas continuas, enfoque en colaboración y automatización.

## 2. Niveles de prueba

1. **Pruebas unitarias**: a nivel de función o clase.
2. **Integración**: interacción entre módulos.
3. **Sistema**: sobre la aplicación completa.
4. **Aceptación**: validación por parte del cliente o usuario.

## 3. Tipos de prueba

- **Funcionales**: ¿hace lo que debe?
- **No funcionales**: rendimiento, usabilidad, seguridad.

## 4. Revisión de artefactos

- *Static testing*: revisión de requisitos, historias de usuario, código y test cases.
- Tipos: *walkthroughs*, *inspections*, *peer reviews*.

## 5. Herramientas de calidad previas al testing

- **Prettier**: formateo uniforme.
- **ESLint**: detección de errores de estilo o potenciales bugs.
- **Markdownlint**: revisa la documentación.
- **npm scripts**: automatiza análisis estático.

```bash
# Inicializa un proyecto y añade linters
npm init -y
npm install --save-dev eslint prettier markdownlint-cli
```

## 6. Comandos útiles

```bash
npx eslint src/
npx prettier --check .
npx markdownlint '**/*.md'
```

## Recurso adicional

- [*V-Model* explicado](https://reqtest.com/testing-blog/v-model-software-testing/)
