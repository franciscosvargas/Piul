import Discord from 'discord.js'
import Response from './response'


let response;

interface ICommand {
	[key: string]: any 
}

export interface IMessagedProcessed {
	command: string
	args: string[]
}

function getCommandMethod(msg: Discord.Message, info: IMessagedProcessed) {
	response = new Response(msg, info.args)

	const commands:ICommand = {
		bola8: () => response.ball(),
		ping: () => response.ping(),
		news: () => response.news(),
		help: () => response.help()
	}

	const method = commands[info.command]

	method ? method() : msg.channel.send('Use um comando válido, cabeça de bagre!')		
}



export default getCommandMethod