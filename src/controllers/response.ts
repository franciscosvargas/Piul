import Discord from 'discord.js'

import ballPhrases from '../assets/phrases/8ball'
import messages from '../assets/phrases/messages'

import NewsAPI from './apis/news'
import search from './apis/news'

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
		return this.msg.channel.send(messages.help)
	}

	water() {
		this.msg.channel.send(':cup_with_straw: Ativando alertas de hidratação!')

		setInterval(() => {
			this.msg.channel.send(':cup_with_straw: Beba água!')
		}, 3600000)
	}
}

export default Responses