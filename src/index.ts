import Discord from 'discord.js'
import 'dotenv/config'

import { Setup, Message } from './controllers'

const bot = new Discord.Client()
bot.login(process.env.DISCORD_BOT_KEY)

bot.once('ready', () => {
	const setup = new Setup(bot)

	setup.on()
})

bot.on('message', msg => {
	const message = new Message(bot, msg)

	message.received()
})

