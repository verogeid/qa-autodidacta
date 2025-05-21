# Tutorial Semana 6 - Buenas Prácticas en Pruebas Automatizadas

## 1. Principios de Diseño de Pruebas Automatizadas

Las pruebas automatizadas deben ser **eficaces**, **sostenibles** y **reutilizables**. Algunos principios clave para el diseño de pruebas son:

- **Pruebas pequeñas y enfocadas**: Cada prueba debe cubrir un único comportamiento o característica.
- **Pruebas independientes**: Cada prueba debe ser independiente de las demás. Esto significa que no deben depender del orden en que se ejecutan.
- **Pruebas rápidas**: Las pruebas deben ejecutarse rápidamente para no frenar el flujo de trabajo. Si una prueba tarda demasiado, afectará la eficiencia de los pipelines CI/CD.

## 2. Estructura de Pruebas: Cómo Organizar y Dividir las Pruebas

Una estructura bien organizada facilita la legibilidad y el mantenimiento de las pruebas. Algunas prácticas recomendadas incluyen:

- **Agrupar pruebas por módulo o componente**: Si estás probando una aplicación, organiza las pruebas según las diferentes funcionalidades o componentes.
- **Uso de directorios y nombres claros**: Asigna nombres descriptivos a los archivos de prueba y los directorios, para que sea fácil localizar y entender el propósito de cada conjunto de pruebas.

Ejemplo de estructura:

```plaintext
tests/
  ├── login/
  │   ├── login.spec.ts
  │   ├── login.data.ts
  ├── registration/
  │   ├── registration.spec.ts
  │   ├── registration.data.ts
```

## 3. Uso de Datos de Prueba

- **Evitar datos codificados**: Los datos de prueba deben ser dinámicos y no estar codificados directamente en las pruebas. Esto facilita la reutilización y actualización de los datos.
- **Uso de datos de prueba específicos**: Define un conjunto de datos que cubran los diferentes casos de prueba. Ejemplo:

```ts
const validUser = {
  username: "user123",
  password: "securepassword"
};
```

## 4. Reutilización de Pruebas y Patrones Comunes

Asegúrate de reutilizar el código de prueba tanto como sea posible. Algunas técnicas son:

- **Funciones auxiliares**: Crea funciones reutilizables para operaciones comunes (por ejemplo, iniciar sesión, cargar datos, etc.).
- **Patrones de diseño**: Usa patrones como Page Object Pattern para mejorar la legibilidad y la reutilización de pruebas en aplicaciones web.

## 5. Cómo Hacer Pruebas Legibles y Mantenibles

- **Nombrado claro y consistente**: Usa nombres que describan claramente lo que hace cada prueba. Evita abreviaciones crípticas.
- **Evitar la sobrecarga de código**: No hagas que tus pruebas sean demasiado complejas. Si una prueba se vuelve difícil de entender, es posible que esté probando demasiado.

Ejemplo de nombre claro para una prueba:

```ts
it("should allow the user to log in with valid credentials", () => {
  // test implementation
});
```

## 6. Estrategias de Optimización de Pruebas

- **Paralelización de pruebas**: Ejecuta las pruebas en paralelo para reducir el tiempo total de ejecución.
- **Uso de mocks y stubs**: Para acelerar las pruebas, especialmente en pruebas de integración, puedes utilizar mocks y stubs para simular la interacción con servicios externos.
- **Orden de ejecución eficiente**: Organiza las pruebas de manera que las más rápidas se ejecuten primero, para detectar fallos rápidamente.

## Resumen

Esta semana, aprendiste las buenas prácticas para diseñar, organizar y optimizar tus pruebas automatizadas. Estas prácticas te ayudarán a mantener tus pruebas limpias, rápidas y fáciles de mantener.
