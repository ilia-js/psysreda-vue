
export default (context, inject) => {
	//This function send notification to telegram
  const notify = (text) => {
		let url = new URL('https://psysreda.ru/public/telegram')
		let params = { text: text }
		url.search = new URLSearchParams(params).toString()
		fetch(url)
	}
  // Inject $notify(text) in Vue, context and store.
  inject('notify', notify)
  // For Nuxt <= 2.12
  //context.$notify = notify
}