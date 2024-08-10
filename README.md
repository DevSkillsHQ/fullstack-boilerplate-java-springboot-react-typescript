# Fullstack Boilerplate Java Spring Boot and React with TypeScript

A backbone for your coding challenge.

## Contents

- [Backend service](app-backend) - a Java/Spring Boot service with a `/ping` endpoint. Extend with your code.
- [Frontend app](app-frontend) - a React/TS app. Extend with your code.
- [E2E test suites](cypress/e2e) - a backend and a frontend Cypress test suites. Extend with your tests.

## Tech Stack

### Backend

- Java 17
- Spring Boot 2
- SQLite 3
- Gradle 7

### Frontend

- React 18
- Typescript
- Vite

### Misc

- Cypress
- GitHub Actions

## Getting started

1. Make sure the required version of Java (17) is configured on your local env.

2. Make sure npm & node are configured on your local env. You can download those distributions for your platform [here](https://nodejs.org/en/download/)

3. Build your app.

```bash
npm install
npm run build # both Java/Spring Boot backend and React frontend
npm run build:backend # only Java/Spring Boot backend
npm run build:frontend # only React frontend
```

4. Start your app.

```bash
npm install
npm run start # both Java/Spring Boot backend and React frontend
npm run start:backend # only Java/Spring Boot backend
npm run start:frontend # only React frontend
```

5. Run the Cypress tests.

```bash
npm run test # run project tests under `cypress/integration`
```

---

Authored by [Alva Labs](https://www.alvalabs.io/).
