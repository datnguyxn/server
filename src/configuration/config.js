import express from 'express';
import morgan from 'morgan';
import {fileURLToPath} from 'url';
import * as path from 'path';
import cors from "cors";

const config = (app) => {
    app.use(cors({ origin: '*' }));

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename).slice(0, -13)
    app.use(express.static(path.join(__dirname, 'public')))
    app.use(morgan('combined'));

    return {
        status: '✅',
        message: 'Resource config loaded'
    }
}

export default config;
