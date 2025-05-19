# Semana 2 - Soluciones a ejercicios

## Ejercicio 1: Crea un componente con un input controlado que actualice un estado

```tsx
// src/components/ControlledInput.tsx
import React, { useState } from 'react';

export const ControlledInput = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>Value: {text}</p>
    </div>
  );
};
```

---

## Ejercicio 2: Crea un componente que use *useEffect* para actualizar el título del documento

```tsx
// src/components/DocumentTitle.tsx
import React, { useEffect, useState } from 'react';

export const DocumentTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Click me</button>;
};
```

---

## Ejercicio 3: Crea un componente que use *useRef* para enfocar un input al hacer clic

```tsx
// src/components/FocusInput.tsx
import React, { useRef } from 'react';

export const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus input</button>
    </div>
  );
};
```

---

## Ejercicio 4: Usa *useContext* para compartir un tema de color entre componentes

```tsx
// src/context/ThemeContext.tsx
import { createContext } from 'react';

export const ThemeContext = createContext<'light' | 'dark'>('light');

// src/components/ThemeProvider.tsx
import React from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
};

// src/components/ThemedText.tsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const ThemedText = () => {
  const theme = useContext(ThemeContext);

  return <p style={{ color: theme === 'dark' ? 'white' : 'black' }}>Theme is {theme}</p>;
};
```
