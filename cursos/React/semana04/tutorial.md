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


import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => setPosts(response.data));

2. Context API básico

Crea un contexto para manejar el usuario:

const UserContext = createContext(null);

Provee el contexto y consúmelo con useContext.

3. Redux Toolkit

yarn add @reduxjs/toolkit react-redux

Crea un slice, configura el store y conecta con <Provider>.

4. Custom hooks

Extrae lógica repetida:

function usePosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  return posts;
}

5. Estados de carga y errores

Controla isLoading y error para mostrar spinners o mensajes de error.

Resultado esperado

Una aplicación con listado de posts, cargando desde API pública, usando gestión global del estado.

---

### `ejercicios.md`
```markdown
# Ejercicios Semana 4: HTTP y estado global

## 1. Usar fetch

Crea un componente que liste los 10 primeros posts de la API pública.

## 2. Usar Axios

Repite el ejercicio anterior, pero ahora con Axios.

## 3. Context API

Crea un contexto para almacenar el usuario actual y mostrarlo en distintos componentes.

## 4. Redux Toolkit

Almacena los posts usando Redux Toolkit y muéstralos en pantalla.

## 5. Custom hook

Crea un hook `useFetchData(url)` reutilizable para cargar datos desde cualquier endpoint.

## 6. Estados de carga y errores

Muestra un `Loading...` mientras se cargan los datos y un mensaje si hay error.

## 7. Reto final

Haz un componente que obtenga `comments` de un post concreto y los muestre dinámicamente según el post seleccionado.
