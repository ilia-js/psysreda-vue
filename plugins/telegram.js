export default (context, inject) => {
  // This function send notification to telegram
  const telegram = (text) => {
    console.log('%c%s', 'color: green', 'Send with telegram:')
    console.log('%c%s', 'color: brown', text)
    const url = new URL('https://psysreda.ru/public/telegram')
    const params = { text: text }
    url.search = new URLSearchParams(params).toString()
    fetch(url)
  }
  // Inject telegram(text) in Vue, context and store.
  inject('telegram', telegram)
  // For Nuxt <= 2.12
  // context.telegram = telegram
}
