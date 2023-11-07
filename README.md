# Definicion del proyecto

En este proyecto desarrollaremos una aplicacion web enfocada a una tienda virtual que presta sus servicios de ecommers para la venta de articulos electronicos como accesorios, portatiles, auriculares, pc de escritorio, mouse, teclados y demas variedad de articulos tecnologicos. Esta aplicacion contara con sistema de autenticacion y registro de usuarios y demas funcionalidades que hacer comun a una tiena online.

## Tegnologias utilizadas

- reactJS
- CSS
- JavaScript + TypeScript
- vite (Empaquetador)

Oher libraries

- [react-hook-form](https://react-hook-form.com/)
- [react-router-dom](https://reactrouter.com/en/main) v5
- [react-reduc](https://redux.js.org/) and [redux-toolkit](https://redux-toolkit.js.org/)
- [styled components](https://styled-components.com/)
- [axios](https://axios-http.com/es/)

Se utiliza [pnpm](https://pnpm.io/) como manejador de paquetes y depmendencias.

## Instalacion

Para utilizar este proyecto puedes clonar el repositorio de la siguiente manera:

- Copia esta linea en tu terminal para clonar el proyecto.
  `git clone https://github.com/JuanCardona16/tienda-virtual-frontend.git`

- Para instalar las dependencias ejecuta el siguiente comando:
  `pnpm install` o `npm install`

- Para levantar el proyecto en modo de desarrollo ejecuta el siguiente comando:
  `pnpm run dev` o `npm run dev`

### NOTA

Este proyecto sigue en fase de desarrollo.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
