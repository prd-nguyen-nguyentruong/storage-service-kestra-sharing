import 'tsconfig-paths/register';

import express, { Request, Response } from 'express';
import routes from "@routes/index.ts";
import cors from 'cors';


const app = express();

app.use(cors());

const router = express.Router();
router.use('/api/v1', routes);


app.use('/', router)

export default app;
