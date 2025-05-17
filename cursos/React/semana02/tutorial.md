# Semana 2 – Componentes y hooks esenciales

## 1. Componentes controlados vs no controlados

Un input controlado:

```tsx
const [value, setValue] = useState('')
```

```html
<input value={value} onChange={(e) => setValue(e.target.value)} />
```

Uno no controlado:

```tsx
const inputRef = useRef<HTMLInputElement>(null)
```

```html
<input ref={inputRef} />
<button onClick={() => alert(inputRef.current?.value)}>Enviar</button>
```

## 2. *useEffect*: sincronización

```tsx
useEffect(() => {
  document.title = `Clicks: ${count}`
}, [count])
```

Este hook se ejecuta cuando count cambia.

## 3. *useRef* y persistencia

useRef mantiene valores entre renders sin re-renderizar el componente.

## 4. *useContext*: contexto global

Crea un contexto:

```tsx
const ThemeContext = createContext('light')
```

Provee y consume:

```html
<ThemeContext.Provider value="dark">
  <MiComponente />
</ThemeContext.Provider>
```

```tsx
const theme = useContext(ThemeContext)
```

## 5. Lifting State Up

Cuando dos componentes necesitan compartir estado, se eleva al ancestro común.

```html
<Contenedor>
  <Hijo1 setValor={setValor} />
  <Hijo2 valor={valor} />
</Contenedor>
```

## 6. Formularios

Manejo básico de formularios con validación mínima:

```html
<form onSubmit={handleSubmit}>
  <input value={name} onChange={(e) => setName(e.target.value)} />
</form>
```

## 7. Repaso

Ahora sabes manejar hooks esenciales, eventos y compartir estado. Esto es la base de apps dinámicas.
