import express from 'express';
import morgan from 'morgan';
import {fileURLToPath} from 'url';
import * as path from 'path';
import cors from "cors";


const TAG = "Resource Config";
const config = (app) => {
    app.use(cors({ origin: '*' }));

    app.use(express.urlencoded({ extended: false, limit: "50mb" }));
    app.use(
        express.json({
            limit: "50mb",
        })
    );
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename).slice(0, -13)
    app.use(express.static(path.join(__dirname, 'public')))
    app.use(morgan('combined'));

    console.log(TAG, 'Resource config loaded');
    return {
        status: '✅',
        message: 'Resource config loaded'
    }
}

export default config;
