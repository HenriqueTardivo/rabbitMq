import {createBrokerAsPromised} from "rascal"
import config from "./config.json"

async function reciever(){
    try {
        console.log("esperando mensagens")

        const broker = await createBrokerAsPromised(config)

        const subscription = await broker.subscribe("demo_sub")

        subscription.on('message', (message, content, ackOrNack)=>{
            console.log(content);
            ackOrNack();
        });

        subscription.on('invalid_content', (err, message, ackOrNack) =>{
          console.log('Mensagem inválida');
        });
    } catch(error){
        console.log(error)
    }   
}

reciever()
