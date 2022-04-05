export const formValidators = {
  requiredName (value) {
    return (value && !!value.trim()) || 'Укажите Ваше имя'
  },
  requiredPhone (value) {
    return (value && !!value.trim()) || 'Укажите Ваш телефон'
  },

  requiredConnector (value) {
    return (value && !!value.trim()) || 'Выберете способ связи'
  }
}
