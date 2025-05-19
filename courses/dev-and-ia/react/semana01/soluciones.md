# Semana 1 - Soluciones a ejercicios

## Ejercicio 1: Crea un componente que reciba un nombre por props y lo muestre en pantalla

```tsx
// src/components/Welcome.tsx
import React from 'react';

type WelcomeProps = {
  name: string;
};

export const Welcome = ({ name }: WelcomeProps) => {
  return <h1>Hello, {name}!</h1>;
};
```

---

## Ejercicio 2: Crea un componente con un estado que se incremente al hacer clic en un botón

```tsx
// src/components/Counter.tsx
import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
```

---

## Ejercicio 3: Crea un componente que reciba un número y diga si es par o impar

```tsx
// src/components/EvenOrOdd.tsx
import React from 'react';

type Props = {
  number: number;
};

export const EvenOrOdd = ({ number }: Props) => {
  return <p>{number % 2 === 0 ? 'Even' : 'Odd'}</p>;
};
```

---

## Ejercicio 4: Usa useState para guardar el valor de un input y mostrarlo en pantalla

```tsx
// src/components/InputMirror.tsx
import React, { useState } from 'react';

export const InputMirror = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>{value}</p>
    </div>
  );
};
```
