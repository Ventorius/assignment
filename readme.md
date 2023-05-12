## What's inside?

This repo contains solution for the coding assignment

### Prerequisites
- [pnpm](https://pnpm.js.org/) - pnpm package manager

### How to run

To run the app just run the following command inside repo directory:

```
pnpm run dev
```

Command runs 3 different services: css watcher, json server and frontend app.
Frontend app should be available on http://127.0.0.1:5173/
In some cases port can change dynamically, proper message will be shown in console.

### Additional notes

- I've used [pnpm](https://pnpm.js.org/) package manager instead of npm or yarn. It's faster and more reliable.
- I've used vite with pure react (without typescript as in the assignment) to make the app as simple as possible.
- I've used tailwind css framework to make the app look nice and responsive. This can be viewed as an overkill but it is easy enough to setup and develop without any additional development costs.
- I've used [json-server](https://www.npmjs.com/package/json-server) to mock the backend. It is easy to setup and use. It is also easy to extend with custom routes and middlewares if needed.