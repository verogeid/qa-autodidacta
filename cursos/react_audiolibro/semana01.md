Semana 1: Configuración inicial y primer componente

En esta primera semana, nos centraremos en preparar tu entorno de desarrollo y crear tu primer componente React.

Paso 1: Instalación de Vite y React

Vite es una herramienta de construcción extremadamente rápida, ideal para proyectos de React. Para instalarlo, sigue estos pasos:

1. Abre una terminal en tu máquina.
2. Ejecuta el siguiente comando para crear un nuevo proyecto con Vite y React:

npm create vite@latest mi-proyecto-react --template react

Esto descargará y configurará un proyecto básico de React con Vite.

3. Una vez creado, entra en el directorio del proyecto:

cd mi-proyecto-react

4. Instala las dependencias con el siguiente comando:

npm install

5. Finalmente, inicia el servidor de desarrollo:

npm run dev

Ahora, abre tu navegador y ve a http://localhost:5173 para ver tu aplicación React en funcionamiento.

Paso 2: Crear el primer componente

Ahora que tenemos nuestro proyecto en marcha, es hora de crear un componente de React.

1. Dentro de la carpeta src, abre el archivo App.jsx. Este es el componente principal de nuestra aplicación.

2. Modifica el contenido de App.jsx para que luzca algo como esto:

import React from 'react';

function App() {
  return (
    <div>
      <h1>¡Bienvenido a React!</h1>
      <p>Este es nuestro primer componente.</p>
    </div>
  );
}

export default App;

3. Guarda los cambios y vuelve a tu navegador. Verás que ahora se muestra un mensaje de bienvenida.


Recapitulación:

Hoy hemos aprendido a instalar Vite y React, y hemos creado nuestro primer componente. Aunque es un primer paso, ya estás viendo cómo funciona el flujo básico de desarrollo en React.

Recuerda: a medida que avanzamos en el curso, irás viendo cómo mejorar y reutilizar este componente, e irás agregando más lógica y funcionalidades.

¡Felicidades por completar tu primer paso en el mundo de React!