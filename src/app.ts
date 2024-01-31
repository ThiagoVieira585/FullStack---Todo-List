import express from 'express';
import router from './router/router';

const app = express();

app.use(router);

export default app;