//const api = process.env.VUE_APP_LARA

export default (context, inject) => {
	//This function send notification to telegram
  const notify = (text) => {
  	//console.log('api: ' + api)
		let api = 'http://psyholog.baikal.net.ru'
		let url = new URL(api + '/telegram')
		let params = {text: text}
		url.search = new URLSearchParams(params).toString()
		fetch(url)
	}
  // Inject $hello(text) in Vue, context and store.
  inject('notify', notify)
  // For Nuxt <= 2.12
  //context.$notify = notify
}