# Tutorial: Peticiones *HTTP* y gestión del estado global

Esta semana vas a conectar tu frontend con datos reales y a organizar tu estado de forma escalable. Aprenderás a hacer peticiones *HTTP*, mostrar los datos al usuario, manejar errores y aplicar patrones como *Context API* y *Redux Toolkit*.

---

## 1. Peticiones *HTTP* con *Axios*

Instala Axios:

```bash
yarn add axios
```

Crea un archivo `services/api.ts`:

```tsx
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});
```

Ahora crea una función para obtener datos:

```tsx
export const getPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};
```


---

## 2. Mostrar datos con *useEffect*

En `App.tsx`:

```tsx
import { useEffect, useState } from 'react';
import { getPosts } from './services/api';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {posts.slice(0, 5).map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

Este componente muestra los primeros 5 títulos de la API.


---

## 3. Manejo de errores

Agrega un estado de error:

```tsx
const [error, setError] = useState('');

useEffect(() => {
  getPosts()
    .then(setPosts)
    .catch((err) => {
      setError('Error fetching posts');
      console.error(err);
    })
    .finally(() => setLoading(false));
});
```

Ahora muestra un mensaje si algo falla:

```tsx
if (error) return <p>{error}</p>;
```

---

## 4. Introducción a *Context API*

Vamos a crear un contexto para compartir el estado global. En `context/PostsContext.tsx`:

```tsx
import { createContext, useContext, useState, useEffect } from 'react';
import { getPosts } from '../services/api';

const PostsContext = createContext([]);

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts).catch(console.error);
  }, []);

  return (
    <PostsContext.Provider value={posts}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
```

Ahora puedes usarlo en cualquier componente:

```tsx
import { usePosts } from './context/PostsContext';

const PostsList = () => {
  const posts = usePosts();

  return (
    <ul>
      {posts.slice(0, 5).map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
```

Envuelve tu app con el *provider* en `main.tsx`.


---

## 5. ¿Y *Redux Toolkit*?

Si necesitas un control más estricto del estado (por ejemplo, múltiples acciones, *slices* y estados derivados), instala:

```bash
yarn add @reduxjs/toolkit react-redux
```

*Redux Toolkit* reduce la complejidad de *Redux* tradicional, pero úsalo solo si realmente lo necesitas. Para muchos casos, Context + hooks es suficiente.


---

## Resultado esperado

Al terminar:

- Puedes consumir APIs reales y renderizar los datos.
- Tu código muestra *loading* y errores correctamente.
- Sabes cuándo usar *Context API* y cuándo considerar *Redux Toolkit*.
- Tu app empieza a tener lógica real que responde al usuario y al servidor.


Esto marca el paso de una app estática a una dinámica y útil.

