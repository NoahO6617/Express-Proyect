import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(3000);

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
