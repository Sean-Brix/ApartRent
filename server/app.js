import express from 'express'
import session from 'express-session'
import cors from 'cors'
import colors from 'colors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import mongoStore from 'connect-mongo'
import path from 'path'
import { fileURLToPath } from 'url'

// Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
colors.enable();
dotenv.config();

// Database
mongoose.connect("mongodb://localhost:27017/ApartRent");

// Request Handler
const app = express();
app.use(cors({
    origin: '*',
    methods: ['POST', 'GET']
}))
app.use(session({
    secret: process.env.SESSION_SECRET || 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    store: mongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        collectionName: "session",
        ttl: 24 * 60 * 60 
    }),
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 
    }
}))

app.use(cookieParser);
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Routing
import router from './Route/index_rt.js'
app.use('/', router);

export default app;
