const Discord = require('discord.js')

const bot = new Discord.Client();

bot.login('NzI1NzQzMDY2ODk5NTQ2MTQ0.XvTpfA.9tgL0a8dKbc45mBHPqdJ6r3sd-Q')

bot.once('ready', () => {
	console.log('Bot online')

	setInterval(() => {
		const x = Math.floor(Math.random() * 10);
		bot.user.setActivity(status[x].message, { type: status[x].type, name: 'Test'})
		
	}, 10000);
})


const status = [
	{type: 'LISTENING', message: 'Pablo Vittar'},
	{type: 'LISTENING', message: 'Pagode Japonês'},
	{type: 'LISTENING', message: 'ORGIA DE TRAVECO'},
	{type: 'WHATCHING', message: 'XVIDEOS'},
	{type: 'WHATCHING', message: 'CULTO DA UNIVERSAL'},
	{type: 'WHATCHING', message: '2GIRLS1CUP'},
	{type: 'PLAYING', message: 'Dead by Daylight'},
	{type: 'PLAYING', message: 'JogosHentai.net'},
	{type: 'PLAYING', message: 'GTA 6 BETA'},
	{type: 'WHATCHING', message: 'no Camêra Privê'},
	{type: 'LISTENING', message: 'Podcast Poucas'},
	{type: 'LISTENING', message: 'A Gay and a Non Gay'},
]

const xingamentos = [
	'Cala a boca, boca de buceta!',
	'Vai se fuder meu!',
	'Só fala merda um cuzão desses!',
	'Me deixa quieto, porra!',
	'Era pra eu te xingar, mas tô cansado caralho.',
	'Não vou xingar pois sou educado, e você que tá pedindo xingamento é um cuzão fodido.',
	'Son of a bitch. (Sou bilíngue pô)'
]

const bola8 = [
	'Com certeza!',
	'Eu não recomendo.',
	'Seria ideal.',
	'Hoje é não, faro.',
	'Talvez...',
	'Tenta a sorte',
	'Se nem você sabe, quem dirá eu.',
	'Sim!',
	'Não!',
	'Sem sombra de dúvidas.',
	'Ainda não sei responder sobre isso.',
	'Em casa de ferreiro o espeto é de pau. Então, vai com que é tua.',
	"Você já sabe a resposta."
]

bot.on('message', msg => {

	const array = msg.content.split(' ')
	const command = array[0]

	if(msg.author.bot) return

	if(command === '-help') {
		return msg.channel.send('Oi, esse bot está sendo construído por Francisco Vargas.')
	}

	if(command === '-question')  return msg.channel.send('Quando é comemorado o dia dos finados?')

	if(command === '-xinga') {
		const x = Math.floor(Math.random() * 7);
		msg.channel.send(xingamentos[x])
		return msg.delete()
	} 

	if(command === '-bola8') {
		const x = Math.floor(Math.random() * 13);
		msg.channel.send(bola8[x])
	} 
})