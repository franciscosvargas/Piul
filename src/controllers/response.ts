import Discord from 'discord.js'

import ballPhrases from '../assets/phrases/8ball'

class Responses {

	msg: Discord.Message

	constructor(Message: Discord.Message) {
		this.msg = Message
	}
	
	ball() {
		const x = Math.floor(Math.random() * 13);
		return this.msg.channel.send(ballPhrases[x])
	}

	ping() {
		return this.msg.channel.send('Pong!  :ping_pong: ')
	}
}

export default Responses