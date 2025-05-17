# Semana 1 – Fundamentos de React y TypeScript

## 1. ¿Qué es React?

React es una *librería* de JavaScript para construir interfaces de usuario. Está basada en componentes reutilizables que gestionan su propio estado.

## 2. ¿Qué es TypeScript?

TypeScript es un *superset* de JavaScript que añade tipado estático. Esto mejora la mantenibilidad y previene errores comunes en tiempo de compilación.

## 3. Configuración del entorno con Vite

```bash
npm create vite@latest mi-proyecto --template react-ts
cd mi-proyecto
npm install
npm run dev
```

Abre `src/App.tsx`. Este será tu punto de partida.

## 4. Primer componente con TSX

Crea un archivo `src/components/Hello.tsx`:

```tsx
type Props = {
  name: string
}

export function Hello({ name }: Props) {
  return <h1>Hello, {name}!</h1>
}
```

En `App.tsx`, úsalo así:

```html
<Hello name="Diego" />
```

## 5. Tipado básico en *TypeScript*

TypeScript permite declarar tipos para las props, variables, funciones y más.

```tsx
const age: number = 35
const isQA: boolean = true
```

## 6. Estado con *useState*

Importa el hook y define estado:

```tsx
import { useState } from 'react'

const [count, setCount] = useState(0)
```

## 7. Interacción con el usuario

```html
<button onClick={() => setCount(count + 1)}>Incrementar</button>
```

Al pulsar el botón, el valor count cambia y el componente se vuelve a renderizar.

## 8. Repaso

En esta semana has creado tu primer proyecto, aprendido sobre componentes y estado, y comenzado a tipar tu código.

