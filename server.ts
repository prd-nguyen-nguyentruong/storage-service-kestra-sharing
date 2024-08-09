import app from "./src/app.ts";
import { createServer } from 'node:http';

const server = createServer(app);

server.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});

export default app;