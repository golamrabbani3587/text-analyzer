import express from 'express';
import mongoose from 'mongoose';
import textRoutes from './routes/text.routes';
import authRoutes from './routes/auth.routes';
import passport from 'passport';
import session from 'express-session';
import cors from "cors";
import './/middlewares/auth';
import path from 'path';


const app = express();
app.use(cors())
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use('/views', express.static(path.join(__dirname, '/controllers/views')));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use('/api', textRoutes);
app.use('/auth', authRoutes);

mongoose.connect('mongodb+srv://rr:Programming1@cluster0.nbrodly.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error: ', err));

export default app;