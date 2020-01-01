import CONFIG from '../config/config';
import { configureDatabase } from '../config/database';
import express from 'express';

// import all routes
import authRoutes from './routes/api/auth';
import postRoutes from './routes/api/posts';
import profileRoutes from './routes/api/profile';
import userRoutes from './routes/api/users';

const app = new express();

// set up the database
configureDatabase();

// set up middleware
app.use(express.json({ extended: false }));

// set up routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/profile', profileRoutes);

app.listen(CONFIG.api_port, () => console.log(`Server started on port ${CONFIG.api_port}`));
