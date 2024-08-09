import app from "./src/app.ts";
import { createServer } from 'node:http';
import { APP_PORT } from './src/config/app.config';

const server = createServer(app);

server.listen(APP_PORT, () => {
  console.log(`Server is running on port ${APP_PORT}`);
});

export default app;