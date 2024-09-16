# MEQ Dev Challenge

An implementation of the MEQ Fullstack Dev Code Challenge using Vite, React, TypeScript and Express.

## Installation

1. clone git repository, install node modules:

```sh
git clone https://github.com/BradDenver/meq-dev-challenge.git
cd meq-dev-challenge
pnpm install
```

2. Build meq-dev-challenge app:

```sh
pnpm run build
```

3. Run meq-dev-challenge app:

```sh
pnpm run start
```

You can now view meq-dev-challenge in the browser: http://localhost:5173

### API

Working API routes:

- GET http://localhost:5173/data
- GET http://localhost:5173/data/PIC%201

Example parameter validation API routes:

- GET http://localhost:5173/data/PIC%201notanumber

## Credits

This app was build with the help of the following resources:

- [Vite](https://vitejs.dev) via the `react-ts` template
- [Mantine](https://mantine.dev) for UI components
- [Hightcharts](https://github.com/highcharts/highcharts-react) fro charting
- [Zod](https://zod.dev) for schema validation
- [Express](https://expressjs.com) for the API
- [zod-express-middleware](https://github.com/Aquila169/zod-express-middleware) for API parameter validation
