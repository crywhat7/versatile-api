import express from "express";

import routes from "./server.routes";

const app = express();

const port = process.env.PORT ?? 3000;

app.use(express.json());

app.use(routes);

export const initServer = () => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port} 🚀`);
  });
};
