import { Request, Response} from "express"
import { AppError } from "../../shared/error/AppError"
import { publish } from "../../shared/infra/queue/publish"

export class MessageController{
    async handle(request: Request, response: Response): Promise<Response>{
        try {
            const { mensagem } = request.body

            const publicou = await publish(mensagem)

            return response.status(200).json({publicou: publicou})
    
        } catch (err){
            throw new AppError("Erro ao postar mensagem ", 401)
        }
    }
}