# tutorial.md

## 1. ¿Qué es React? ¿Qué es TypeScript?

React es una biblioteca para construir interfaces de usuario. Su modelo declarativo y basado en componentes facilita la creación de aplicaciones interactivas. TypeScript añade tipado estático a JavaScript, permitiendo detectar errores antes de ejecutar el código.

## 2. Crear proyecto con Vite

Vite es una herramienta rápida para crear proyectos modernos. Permite usar React y TypeScript de forma integrada.

```bash
yarn create vite react-ts-app --template react-ts
cd react-ts-app
yarn install
yarn dev
```

## 3. Primer componente

En `src/App.tsx`, puedes escribir tu primer componente.

```ts
function App() {
  return <h1>Hello React + TypeScript</h1>;
}
```

## 4. Tipado básico

Puedes definir tipos explícitos para *props* o variables.

```ts
type User = {
  name: string;
  age: number;
};

const user: User = { name: 'Ana', age: 30 };
```

## 5. *Props* y Estado

Las *props* son valores que se pasan a un componente. El estado permite guardar datos internos que cambian con el tiempo.

```ts
function Welcome({ name }: { name: string }) {
  return <h2>Hello, {name}!</h2>;
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Welcome name="Diego" />
      <button onClick={() => setCount(count + 1)}>Clicks: {count}</button>
    </>
  );
}
```

## 6. Introducción a *useState*

El hook *useState* permite gestionar variables que *React* "escucha" para volver a renderizar al cambiar su valor.

```ts
const [name, setName] = useState('');
```

Con él puedes construir formularios, contadores, flags, etc.
