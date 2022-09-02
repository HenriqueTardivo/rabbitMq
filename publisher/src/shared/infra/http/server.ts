import cors from "cors";
import "reflect-metadata"
import express, { NextFunction, Request, Response } from "express"
import { AppError } from "../../error/AppError";
import { router } from "./routes/index";

const app = express()

app.use(cors({
    origin:true,
    methods: "GET,HEAD,PUT,PATCH,POST,OPTION",
    preflightContinue: true,
    credentials: true
}))

app.use(express.json())

app.use(router)


app.use((err: Error, request: Request, response : Response, next: NextFunction)=>{
    if (err instanceof AppError){
        return response.status(err.statusCode).json({message: err.message})
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server error" + err.message
    })
})


app.listen(3333, ()=>{
    console.log("Server started on port 3333")
})
