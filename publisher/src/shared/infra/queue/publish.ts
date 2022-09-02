import config from "./config.json"
import { createBrokerAsPromised} from "rascal"

export async function publish(message: string): Promise<boolean>{
    try {
        const broker = await  createBrokerAsPromised(config)

        await broker.publish("message", message)

        console.log("mensagem publicada!")

        return true
    } catch (error) {
        console.log(error)

        return false
    }
}