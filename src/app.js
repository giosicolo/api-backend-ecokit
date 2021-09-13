import express, {json} from 'express';
import morgan from 'morgan';

// Importar rutas
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';
import alquilerRoutes from './routes/alquiler';

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//rutas
app.use('/api/projects',projectRoutes);
app.use('/api/tasks',taskRoutes);
app.use('/api/alquiler',alquilerRoutes);

export default app;