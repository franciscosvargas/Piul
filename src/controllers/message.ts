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
		if(!this.isValid()) return 
		
		const command = this.getCommand()
		const args = this.getArgs()

		if(command != 'none')
			return processResponse(this.msg, {command, args})
	}


	private isValid(): boolean {
		
		if(this.msg.author.bot) 
			return false

		const containsCommand = this.msg.content.startsWith("-", 0);
		return containsCommand
	}

	private getCommand(): string {
		const spacesArray = this.msg.content.split(' ')
		const prefixArray = spacesArray[0].split('-')

		const command = prefixArray[1]

		if(command) 
			return command
		
		return 'none'
	}

	private getArgs(): string[] {
		const args = this.msg.content.split(' ')

		args.splice(0, 1);
		
		return args
	}

}

export default Message