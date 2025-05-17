# tutorial.md

## 1. Crear el proyecto con `Vite`

```bash
npm create vite@latest mi-app-react -- --template react-ts
cd mi-app-react
npm install
npm run dev
```

## 2. Estructura básica de un componente

```ts
function Welcome(props: { name: string }) {
  return <h1>Hello, {props.name}</h1>;
}
```

## 3. Uso de `useState`

```ts
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## 4. Tipado de `props`

```ts
type UserProps = {
  name: string;
  age?: number;
};

function UserCard({ name, age }: UserProps) {
  return <div>{name} - {age ?? 'N/A'}</div>;
}
```

## 5. Ejecutar y comprobar

```bash
npm run dev
```

Verifica en `http://localhost:5173/` que todo funciona.


---

Consejo: mantén tu código limpio y modular desde el principio.
