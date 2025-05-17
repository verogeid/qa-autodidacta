# Tutorial: HTTP y estado global

## 1. Peticiones HTTP

### Fetch

```ts
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => setPosts(data));
```

### Axios

```bash
yarn add axios
```

```tsx
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => setPosts(response.data));
```

## 2. *Context API* básico

Crea un contexto para manejar el usuario:

```tsx
const UserContext = createContext(null);
```

Provee el contexto y consúmelo con *useContext*.

## 3. *Redux Toolkit*

```bash
yarn add @reduxjs/toolkit react-redux
```

Crea un *slice*, configura el *store* y conecta con `<Provider>`.

## 4. *Custom hooks*

Extrae lógica repetida:

```tsx
function usePosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  return posts;
}
```

## 5. Estados de carga y errores

Controla *isLoading* y error para mostrar *spinners* o mensajes de error.

## Resultado esperado

Una aplicación con listado de posts, cargando desde API pública, usando gestión global del estado.
