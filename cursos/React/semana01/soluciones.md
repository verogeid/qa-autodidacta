# Semana 01: soluciones

```tsx
// ProfileCard.tsx
type Props = {
  name: string;
  age: number;
  profession: string;
};

export function ProfileCard({ name, age, profession }: Props) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Edad: {age}</p>
      <p>Profesión: {profession}</p>
    </div>
  );
}
```

```tsx
// ClickCounter.tsx
import { useState } from 'react';

export function ClickCounter() {
  const [count, setCount] = useState(0);
  const color = count % 2 === 0 ? 'green' : 'red';

  return (
    <div>
      <p style={{ color }}>{count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
```

```tsx
// GreetingInput.tsx
import { useState } from 'react';

export function GreetingInput() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setGreeting(`Hola, ${name}`)}>Saludar</button>
      <p>{greeting}</p>
    </div>
  );
}
```
