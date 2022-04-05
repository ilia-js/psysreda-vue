export default (context, inject) => {
  const helpers = {
    // TODO Should I remove it?
    isDevOrTest () {
      return (
        localStorage.getItem('test_env') !== null ||
        process.env.NODE_ENV === 'development'
      )
    }
  }
  inject('helpers', helpers)
}
