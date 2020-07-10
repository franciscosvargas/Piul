import Discord from 'discord.js'

import Phrases from '../assets/phrases/status'

class Setup {

	bot: Discord.Client

	constructor(Bot: Discord.Client) {
		this.bot = Bot;
	}

	public on() {
		this.changeStatus()
	}

	private changeStatus() {
		const x = Math.floor(Math.random() * 10);
		const status = Phrases[x]

		if(this.bot.user)
			this.bot.user.setActivity(status.message, { type: status.type})
	}
}

export default Setup