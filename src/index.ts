
import express from 'express';
import dotenv from 'dotenv';

import { connectDb } from './config/database.js';
import artistaRoutes from './routes/artistaRoutes.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// Middlewares
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
    return;
  }

  next();
});

app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.json({
    mensaje: 'API de artistas funcionando correctamente'
  });
});

// Rutas
app.use('/api/artistas', artistaRoutes);

// Iniciar servidor después de conectar MongoDB
const iniciarServidor = async () => {
  await connectDb();

  app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
  });
};
iniciarServidor().catch((error) => {
  console.error('Error al iniciar la aplicación:', error);
  process.exit(1);
});
iniciarServidor();


// Empezar con los Usuarios login, logout, etc.
// import session from 'express-session';
// declare module 'express-session' {
// interface SessionData {
// username: string;
// }
// }
// app.use(session({
// secret: 'un-secreto-seguro',
// resave: false,
// saveUninitialized: false,
// }))
// Segunda parte creacion de listas y likes de canciones
