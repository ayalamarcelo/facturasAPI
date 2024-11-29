const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4040;
const facturaRoutes = require('./routes/facturaRoutes'); 

app.use(cors()); 

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Rate limiting
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 50,
    message: "Demasiadas solicitudes, por favor intente más tarde" 
});

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app-use(limiter);

app.use(bodyParser.json());
app.use('/assets', express.static('assets')); 

app.use('/api', facturaRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
