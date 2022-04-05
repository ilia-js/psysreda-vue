export default (context, inject) => {
  // This function send notification to telegram
  const telegram = text => {
    console.log('%c%s', 'color: green', 'Send with telegram:')
    console.log('%c%s', 'color: brown', text)
    const url = new URL('https://psysreda.ru/public/telegram')
    const params = {
      text: text,
      mode: localStorage.getItem('test_env') !== null ? 'test' : 'prod'
    }
    url.search = new URLSearchParams(params).toString()
    fetch(url)
  }
  inject('telegram', telegram)
}
