import 'tsconfig-paths/register';

import express from 'express';
import routes from "@routes/index.ts";
import MongoService from "@databases/mongo.db.ts";
import cors from 'cors';


const app = express();

app.use(cors());

const mongoDBConnector = new MongoService();
mongoDBConnector.start();

const router = express.Router();
router.use('/api/v1', routes);


app.use('/', router)

export default app;
