import express from 'express';
import indexRoute from './routes/index';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.use('/', indexRoute);

// Global error handler
app.use(errorHandler);

export default app;