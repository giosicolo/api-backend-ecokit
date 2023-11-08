import express, {json} from 'express';
import morgan from 'morgan';


// Importar rutas
import alquilerRoutes from './routes/alquiler'; 
import vendedorRoutes from './routes/vendedor';
import cobroRoutes from './routes/cobro'; 
import remitoRoutes from './routes/remito';
import perteneceRoutes from './routes/pertenece';
import servicio_extraRoutes from './routes/servicio_extra';
import empresaRoutes from './routes/empresa';

import registrarServicioExtra from './routes/registrarServicioExtra';
import mantenimiento from './routes/mantenimiento';
import altaAlquiler from './routes/altaAlquiler';

const generator = require('./index.js');
const path = require('path');
var cors = require('cors');
const app = express();


const expressOasGenerator = require('express-oas-generator');

//middlewares
expressOasGenerator.handleResponses(app, {});
app.use(morgan('dev'));
app.use(json());


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(cors({origin: 'http://localhost:4200'}));
app.use(cors({origin: 'http://localhost:5173'}));



//rutas
app.use('/api/alquiler',alquilerRoutes);
app.use('/api/vendedor',vendedorRoutes);
app.use('/api/cobro',cobroRoutes);
app.use('/api/remito',remitoRoutes);
app.use('/api/pertenece', perteneceRoutes);
app.use('/api/servicio_extra', servicio_extraRoutes);
app.use('/api/empresa', empresaRoutes)
app.use('/api/mantenimiento', mantenimiento);
app.use('/api/registrarServicioExtra',registrarServicioExtra);
app.use('/api/altaAlquiler',altaAlquiler);


expressOasGenerator.handleRequests();

export default app;

