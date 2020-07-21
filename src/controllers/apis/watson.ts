import AssistantV2 from 'ibm-watson/assistant/v2'
import { IamAuthenticator } from 'ibm-watson/auth'
import { SrvRecord } from 'dns'

const assistant = new AssistantV2({
	version: process.env.IBM_VERSION,
	authenticator: new IamAuthenticator({
		apikey: process.env.IBM_KEY,
	}),
	url: process.env.IBM_ENDPOINT,
})

class Watson {

	async getSessionID() {

		let id = ''
		await assistant.createSession({
			assistantId: process.env.IBM_ASSISTANT
		})
		.then(res => {
			id = res.result.session_id
		})
		.catch(err => console.log(err))

		return id
	}

	deleteSession(id: string) {
		assistant.deleteSession({
			assistantId: process.env.IBM_ASSISTANT,
			sessionId: id,
		  })
	}

	async message(args: string, id: string) {
		let message = ''

		await assistant.message({
			assistantId: process.env.IBM_ASSISTANT,
			sessionId: id,
			input: {
			  'message_type': 'text',
			  'text': args
			  }
			})
			.then(res => {
				console.log(res.result.output)
			  message = res.result.output.generic[0].text
			})
			.catch(err => {
				console.log(err)
			  message = "(Erro) - Estou impossibilitado de responder"
			});

			return message
	}
}

export default new Watson()
