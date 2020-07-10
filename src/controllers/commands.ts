import Discord from 'discord.js'
import Response from './response'

let response;

interface ICommand {
	[key: string]: any 
}

function getCommandMethod(msg: Discord.Message, command: string) {
	response = new Response(msg)

	const commands:ICommand = {
		bola8: () => { return response.ball()},
		ping: () => { return response.ping()}
	}

	const method = commands[command]

	if(method) {
		method()
	} else {
		msg.channel.send('Use um comando válido, cabeça de bagre!')
	}
		
}



export default getCommandMethod