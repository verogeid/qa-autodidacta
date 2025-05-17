# Semana 02: soluciones

```tsx
// EmailForm.tsx
import { useState } from 'react';

export function EmailForm() {
  const [email, setEmail] = useState('');
  const isValid = email.includes('@');

  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button disabled={!isValid}>Enviar</button>
    </div>
  );
}
```

```tsx
// Parent.tsx
import { useState } from 'react';
import { Input } from './Input';
import { Display } from './Display';

export function Parent() {
  const [text, setText] = useState('');
  return (
    <>
      <Input onChange={setText} />
      <Display value={text} />
    </>
  );
}
```

```tsx
// Input.tsx
export function Input({ onChange }: { onChange: (value: string) => void }) {
  return <input onChange={(e) => onChange(e.target.value)} />;
}
```

```tsx
// Display.tsx
export function Display({ value }: { value: string }) {
  return <p>{value}</p>;
}
```

```tsx
// RefInput.tsx
import { useRef } from 'react';

export function RefInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => alert(inputRef.current?.value)}>Mostrar</button>
    </div>
  );
}
```

```tsx
// Timer.tsx
import { useEffect, useState } from 'react';

export function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return <p>Tiempo: {seconds}s</p>;
}
```

```tsx
// context.tsx
import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext({
  lang: 'es',
  setLang: (l: string) => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState('es');
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
```
