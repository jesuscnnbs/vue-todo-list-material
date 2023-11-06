# vue-todo-list

This is a simple project using vue 3, pinia and vuetify

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Fake Api

This is a [JSON Server](https://www.npmjs.com/package/json-server) to get a full fake REST API

In the root directory we create data folder, move into it and create and install [JSON Server](https://www.npmjs.com/package/json-server)

```bash
npm install -g json-server
```

Create the fake database and run the server.

```bash
mkdir data
cd data
touch db.json
json-server --watch db.json --port 3001
```

Now you can go to [http://localhost:3001/todos](http://localhost:3001/todos) to see the resources.
