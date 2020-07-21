
import Discord from 'discord.js'
let channelsToAlert = []


export function WaterAdd(channel) {
	
	function verifyAlertIsEnabled(channel): boolean {
		const has = channelsToAlert.filter(item => item.id === channel)

		if(has.length > 0) return true

		return false
	}

	const isEnabled = verifyAlertIsEnabled(channel.id)

	const msg = isEnabled 
		? removeFromList(channel)
		: addToList(channel)

	return msg

}

export function WaterAlert() {
	
	function sendAlert() {

		const channels = refreshArray()

		channels.map(channel => {
			channel.send(':cup_with_straw: Hora de beber água')
		})
	}

	setInterval(() => {
		sendAlert()
	}, 2700000)
}

function addToList(channel): string {
	channelsToAlert.push(channel)

	return ':cup_with_straw: Ativando alertas de hidratação!' 
}

function removeFromList(channel): string {
	const index = channelsToAlert.findIndex(item => item.id === channel.id)

	channelsToAlert.splice(index, 1);

	return ':cup_with_straw: Desativando alertas de hidratação!' 
}

function refreshArray() {
	return channelsToAlert
}
