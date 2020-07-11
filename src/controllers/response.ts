import Discord from 'discord.js'

import ballPhrases from '../assets/phrases/8ball'

import NewsAPI from './apis/news'

class Responses {

	msg: Discord.Message
	args: string[]

	constructor(Message: Discord.Message, Args: string[]) {
		this.msg = Message
		this.args = Args
	}
	
	ball() {
		if(this.args.length == 0) return this.msg.channel.send('Sem uma pergunta eu não posso ajudar né?!\n`-bola8 sua pergunta`')

		const x = Math.floor(Math.random() * 13);
		return this.msg.channel.send(ballPhrases[x])
	}

	ping() {
		return this.msg.channel.send('Pong!  :ping_pong: ')
	}

	async news() {
		if(this.args.length == 0) return this.msg.channel.send(':stop_sign: Me fala sobre o que você quer saber!\nExemplo: `-news corona virus`')
		const searchTerm = this.args.join(' ')

		this.msg.channel.send(`:mag:  Estou procurando notícias sobre **${searchTerm}**...`)

		const api = new NewsAPI(this.args)

		const newsList = await api.search()

		if(newsList.length == 0) return this.msg.channel.send(`:loudspeaker:  Não encontrei nenhuma notícia recente sobre isso.`)
		
		newsList.map(news => {
			this.msg.channel.send(`\n\n**${news.title}** \n*${news.description}*\n`)
		})
	}

	help() {
		return this.msg.channel.send('Saiba mais sobre mim em: https://github.com/franciscosvargas/Piul')
	}
}

export default Responses