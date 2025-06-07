# K6 + Webpack Performance Automation Framework

Framework de automatización pruebas de Performance con K6.
Este proyecto se integra con Webpack para el uso de librerías externas.

## 🚀 Características

- Automatización de pruebas de performance usando K6
- Uso de `thresholds` personalizados.
- Lectura de datos desde archivos `.json`.
- Importación de librerías externas vía Webpack (como `faker-js`).
- Separación modular del código (requests, checks, data loader, etc).
- Gestión de entornos por medio de variables `.env`.
- Ejecución filtrada de pruebas mediante `tags`.

## 🛠️ Tecnologías Utilizadas

- **Lenguaje de programación**: Javascript
- **Frameworks de automatización**:
  - [K6](https://k6.io/)
- **Herramientas adicionales**:
  - [NPM](https://www.npmjs.com/)
  - [Webpack](https://webpack.js.org/)

## 📂 Estructura del Proyecto

```
AUT-PERFORMANCE-K6
│── config/
|   │── settings.js         # Configuración general por entorno
|   │── thresholds.js       # Umbrales personalizados
|   │── workloads.js        # Configuración de carga
|── data/
|   │── users.json          # Datos de entrada para pruebas
|── tests/
|   │── get-page.js
|   │── get-user.js
|   │── login.js
|── utils/
|   │── checks.js
|   │── data-loader.js
|   │── faker.js
|   │── http-requests.js
|── dist/                 # Bundles generados por Webpack
|── reports/              # Reportes de resultados
|── .env                  # Variables de entorno (credenciales, ambiente)
|── webpack.config.js     # Configuración para uso de librerías NPM
```

## 📋 Instalación

### Clonar el Repositorio

```sh
git clone https://github.com/wpmontenegro/aut-performance-k6.git
cd aut-performance-k6
```

### Instalación de Dependencias

```sh
npm install
```

## ▶️ Ejecución de pruebas

### Sin uso de librerías externas

Puedes ejecutar cualquier script directamente con:

```bash
k6 run tests/get-user.js
```

### Con uso de librerías externas (Webpack)

Para poder usar librerías NPM (como `faker-js`), primero debes generar el bundle con Webpack:

```bash
npm run k6:build
```

Esto generará un archivo `.bundle.js` en la carpeta `dist`. Luego puedes ejecutarlo con:

```bash
k6 run dist/get-user.bundle.js
```

⚠️ **Importante**: Asegúrate de que los archivos no se importen múltiples veces desde diferentes rutas. Webpack puede generar errores o duplicación de dependencias si ocurre reimportación circular o duplicada.

## 🔧 Configuración

Este proyecto permite seleccionar entornos mediante variables de entorno.
Estas variables se pueden configurar dentro de la ruta `config/settings.js`
Puedes crear un archivo `.env` con credenciales sensibles:

```
USERNAME=testuser
PASSWORD=secret
```

Para cambiar el entorno al ejecutar pruebas, agrega:

```bash
k6 run -e ENVIRONMENT=qa dist/get-user.bundle.js
```

## 📦 Librerías externas

Este proyecto usa [`faker-js`](https://www.npmjs.com/package/@faker-js/faker) como ejemplo para importar librerías desde NPM y utilizarlas en los scripts. Recuerda que hay limitaciones con algunas dependencias que no están soportadas por el runtime de K6 (que no es Node.js).

## ⚠️ Notas

- Si una librería no es compatible con K6 (por depender de Node APIs como `fs`, `crypto`, etc), el bundle fallará o no funcionará en tiempo de ejecución.

## 📬 Contacto

Para preguntas o sugerencias, puedes contactarme a través de:

- Correo electrónico: wmontenegro@outlook.com.pe
- LinkedIn: [**wmontenegro**](https://www.linkedin.com/in/wmontenegro)
- GitHub: [**wpmontenegro**](https://github.com/wpmontenegro)
