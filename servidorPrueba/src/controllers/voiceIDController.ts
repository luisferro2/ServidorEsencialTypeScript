import { Request,Response } from "express";
import AbstractController from "./AbstractController";


class VoiceIDController extends AbstractController{
    //Singleton
    private phoneNumber: number = -1;
    private authenticationType = "Not yet"; // si no no registrado
    private static instance:VoiceIDController;
    public static getInstance():AbstractController{
        if(this.instance){
            return this.instance;
        }
        this.instance = new VoiceIDController("voiceid");
        return this.instance;
    }

    //Declaración de las rutas del controlador
    protected initRoutes(): void {
       this.router.post('/sendAuthRes',this.postSendAuthRes.bind(this));
       this.router.get('/getAuthRes',this.getAuthRes.bind(this));

       //Agregar más rutas
    }


    private async postSendAuthRes(req: Request, res: Response) {
        try {
            console.log("El teléfono del usuario es: ");
            console.log(req.body.phoneNumber);

            console.log("Resultado de autenticación: ");
            console.log(req.body.authenticationType);
            //this.phoneNumber = req.body.phone
            //this.phoneNumber = req.body.authenticationType
            res.status(200).send("Mensaje recibido");
        } catch (error: any) {
            console.log(error);
            res.status(500).send("Error fatal");
        }
    }

    private async getAuthRes(req: Request, res: Response) {
        try {
            console.log("Enviando autenticación al front")
            res.status(200).send({
                "phoneNumber": this.phoneNumber,
                "authenticationType": this.authenticationType
            });
        } catch (error: any) {
            console.log(error);
            res.status(500).send("Error fatal");
        }
    }
    
}

export default VoiceIDController;