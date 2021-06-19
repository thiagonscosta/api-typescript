import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';

import authRoutes from './routes/auth.routes';

// initializations
const app = express();

// settings
const PORT = process.env.PORT || 9000
app.set('port', PORT);

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);
// routes
app.use('/user', authRoutes);

export default app;



