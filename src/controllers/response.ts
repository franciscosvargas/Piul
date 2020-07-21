import Discord from 'discord.js'

import ballPhrases from '../assets/phrases/8ball'
import messages from '../assets/phrases/messages'
import mentions from '../assets/phrases/mentions'

import NewsAPI from './apis/news'
import Watson from './apis/watson'

import { WaterAdd }from './services/water'

class Responses {

	msg: Discord.Message
	args: string[]

	constructor(Message: Discord.Message, Args: string[]) {
		this.msg = Message
		this.args = Args
	}
	
	ball() {
		if(this.args.length == 0) return this.msg.channel.send(messages.ball)

		const x = Math.floor(Math.random() * 21);
		return this.msg.channel.send(ballPhrases[x])
	}

	ping() {
		return this.msg.channel.send(messages.pong)
	}

	async news() {
		if(this.args.length == 0) return this.msg.channel.send(messages.news.missing)

		//Join args array
		const searchTerm = this.args.join(' ')

		this.msg.channel.send(`${messages.news.lookingFor} **${searchTerm}**...`)

		const newsList = await NewsAPI(searchTerm)

		if(newsList.length == 0) return this.msg.channel.send(messages.news.notFound)
		
		newsList.map(news => {
			this.msg.channel.send(`\n\n**${news.title}** \n*${news.description}*\n`, {files: [news.urlToImage]})
		})
	}

	help() {
		return this.msg.channel.send(messages.help.about)
	}

	water() {

		const msg = WaterAdd(this.msg.channel)

		this.msg.channel.send(msg)
		// this.msg.channel.send(':cup_with_straw: Ativando alertas de hidratação!')

		// setInterval(() => {
		// 	this.msg.channel.send(':cup_with_straw: Beba água!')
		// }, 3600000)
	}

	async mention() {
		const x = Math.floor(Math.random() * 10);
		return this.msg.channel.send(mentions[x])
	}

	async question() {
		try {
			const id = await Watson.getSessionID()
			const message = await Watson.message(this.args.join(" "), id)
			Watson.deleteSession(id)
			return this.msg.channel.send(message)
		} catch (error) {
			return this.msg.channel.send("Aconteceu algum erro, eu volto já.")
		}
	}
}

export default Responses