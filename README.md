# S7-Movies-API-Angular

<p>
  <img src="public/Movies-API.jpg" alt="Captura de pantalla del proyecto" />
</p>

## 📄 Descripción

Este repositorio contiene una aplicación **TMDB Movies** desarrollada con **Angular**. Permite a los usuarios visualizar información sobre peliculas y sus actores principales mediante el consumo de una API externa (TMDB).

## ✨ Características

- **Exploración de Datos**: Consulta información detallada sobre películas y su reparto.
- **Autenticación con Firebase**: Registro e inicio de sesión de usuarios utilizando Firebase Authentication.
- **Interfaz Moderna con CSS vainilla, Angular materials y Bootstrap icons**: Diseño responsivo con CSS y estilos personalizados.
- **Diseño Responsive**: Adaptado para su uso en dispositivos móviles y de escritorio.
  **Despliegue en Vercel**: Aplicación alojada en [Vercel](https://s7-movies-api-angular-r8aj.vercel.app/). ¡Puedes probarla directamente desde tu navegador!
  - Si no deseas crear un usuario, puedes utilizar las siguientes credenciales de prueba:
    - **Email**: `test@mail.com`
    - **Contraseña**: `123456`

## 💻 Tecnologías Utilizadas

- **Angular CLI** version 19.0.7.
- **Firebase Authentication** para la autenticación de usuarios.
- **CSS Personalizado**
- **HTML5**
- **TypeScript**

## 📋 Requisitos

- **Node.js** y **npm** instalados en tu sistema. Descárgalos desde [nodejs.org](https://nodejs.org/).
- Angular CLI instalado globalmente:
  ```bash
  npm install
  ```

## 🛠️ Instalación

### **✔️ Requisitos previos**

Asegúrate de tener **Node.js** instalado en tu sistema. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).  
ℹ️ **No es necesario instalar Angular CLI globalmente**, ya que se instalará automáticamente con las dependencias del proyecto.

### **✔️ Instalación paso a paso**

**1️⃣ Clona este repositorio en tu máquina local:**

```bash
git clone https://github.com/sofrayala/S7-Movies-API-Angular.git
```

**2️⃣ Ingresa al directorio del proyecto:**

```bash
cd S7.-Movies-API-Angular
```

**3️⃣ Instala las dependencias necesarias:**

```bash
npm install
```

```bash
npm i @angular/cli
```

## ▶️ Ejecución

Antes de iniciar la aplicación, debes configurar las credenciales de Firebase ([guía aquí](https://firebase.google.com/docs/web/setup)) y crear una cuenta en la pagina oficial de la API de TMDB: https://www.themoviedb.org/. En la carpeta `environments/` encontrarás un archivo `environment.example.ts`. Sigue estos pasos:

1. Abre el archivo environment.example.ts, que tiene la siguiente estructura:

```typescript
export const environment = {
  production: true,

  tmbd: {
    apiUrl: "https://api.themoviedb.org/3/",
    api_key: "your api_key",
  },

  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
  },
};
```

2. Completa los valores de firebaseConfig y tmdb con las credenciales de tu proyecto en Firebase y tu api key de TMDB.
3. Renombra el archivo de environment.example.ts a environment.ts, copialo y en la misma carpeta crea otro archivo de environment.development.ts, donde modificas los datos de la primer alinea "production: false".

Para iniciar la aplicación en un entorno de desarrollo, ejecuta:

```bash
ng serve
```

Luego, abre tu navegador y navega a `http://localhost:4200/` para ver la aplicación en acción.

Este README proporciona una guía básica para configurar, utilizar y contribuir al proyecto **S7.-Movies-API-Angular**. Asegúrate de consultar la documentación oficial de Angular, Firebase y Tailwind para obtener información más detallada y actualizaciones.
