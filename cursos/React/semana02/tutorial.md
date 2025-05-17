## tutorial.md

### 1. Componentes controlados vs no controlados

Un input *controlado* está vinculado al estado del componente, mientras que uno *no controlado* usa referencias.

```tsx
// Controlado
const [value, setValue] = useState('');
<input value={value} onChange={(e) => setValue(e.target.value)} />

// No controlado
const inputRef = useRef<HTMLInputElement>(null);
<input ref={inputRef} />
```

### 2. *useEffect*: efectos secundarios

Este hook ejecuta código tras el renderizado. Se usa para llamadas a APIs, temporizadores o sincronización.

```tsx
useEffect(() => {
  console.log('Componente montado');
  return () => console.log('Desmontado');
}, []);
```

### 3. *useRef*: referencias

*useRef* guarda valores que sobreviven a los renders. Útil para inputs, contadores que no re-renderizan, etc.

```tsx
const countRef = useRef(0);
countRef.current += 1;
```

### 4. *useContext*: compartir estado

Ideal para estados globales simples, sin necesidad de Redux.

```tsx
const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <MyComponent />
    </ThemeContext.Provider>
  );
}

function MyComponent() {
  const theme = useContext(ThemeContext);
  return <div>Theme: {theme}</div>;
}
```

### 5. Manejo de eventos y formularios

```tsx
function Form() {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email: ${email}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### 6. Lifting state up

Cuando varios componentes necesitan el mismo estado, este se sube al ancestro común.

```tsx
function Parent() {
  const [value, setValue] = useState('');
  return <Child value={value} onChange={setValue} />;
}

function Child({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return <input value={value} onChange={(e) => onChange(e.target.value)} />;
}
```

