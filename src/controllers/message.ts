import Discord from 'discord.js'

import processResponse from './commands'

class Message {
	
	bot: Discord.Client
	msg: Discord.Message

	constructor(Bot: Discord.Client, Message: Discord.Message) {
		this.bot = Bot
		this.msg = Message
	}

	public received() {
		const command = this.getCommand()
		
		if(command != 'none')
			return processResponse(this.msg, command)
	}

	private getCommand(): string {
		const spacesArray = this.msg.content.split(' ')
		const prefixArray = spacesArray[0].split('-')

		const command = prefixArray[1]

		if(command) {
			return command
		} 

		return 'none'
	}
}

export default Message