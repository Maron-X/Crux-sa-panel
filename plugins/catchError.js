export default function ({ $axios, store }) {
  // eslint-disable-next-line arrow-parens
  $axios.onError(error => {
    console.warn('error', error)
    store.dispatch('handlerFactory/displayErrors', error.response.data.errors)
  })
}
