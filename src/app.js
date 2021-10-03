import express, {json} from 'express';
import morgan from 'morgan';

// Importar rutas
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';
import alquilerRoutes from './routes/alquiler'; 
import vendedorRoutes from './routes/vendedor';
import cobroRoutes from './routes/cobro'; 
import remitoRoutes from './routes/remito';
import perteneceRoutes from './routes/pertenece';
import servicio_extraRoutes from './routes/servicio_extra';

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//rutas
app.use('/api/projects',projectRoutes);
app.use('/api/tasks',taskRoutes);
app.use('/api/alquiler',alquilerRoutes);
app.use('/api/vendedor',vendedorRoutes);
app.use('/api/cobro',cobroRoutes);
app.use('/api/remito',remitoRoutes);
app.use('/api/pertenece', perteneceRoutes);
app.use('/api/servicio_extra', servicio_extraRoutes);
export default app;