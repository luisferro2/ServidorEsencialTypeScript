import Server from "./providers/Server";
import { PORT,NODE_ENV } from "./config";
//Importar middlewares
import express from "express";
import cors from "cors";
//Importa controllers
import VoiceIDController from "./controllers/voiceIDController";

const app=new Server({
    port:PORT,
    middlewares:[
        express.json(),
        express.urlencoded({extended:true}),
        cors()
    ],
    controllers:[
        VoiceIDController.getInstance()
    ],
    env:NODE_ENV
});

app.init();