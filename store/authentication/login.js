export const state = () => ({
  fields: {
    email: '',
    password: ''
  }
})

export const getters = {
  fields: state => state.fields
}

export const actions = {
  async submit({ state }) {
    // console.warn('login')
    const { user } = await this.$fire.auth.signInWithEmailAndPassword(
      state.fields.email,
      state.fields.password
    )

    // console.warn('user', user)

    await this.$auth.setUserToken(user._delegate.accessToken, user.refreshToken)

    // const position =
    //   (await this.$i18n.locale) === 'en' ? 'top-right' : 'top-left'
    const welcomeMessage =
      (await this.$i18n.locale) === 'en' ? 'Welcome' : 'مرحبا بك'
    const message = await `${welcomeMessage}`

    await this.$toast(message, {
      timeout: 3000,
      hideProgressBar: false,
      // position,
      closeOnClick: false,
      showCloseButtonOnHover: true
    })
  }
}

export const mutations = {
  setFieldValue(state, { key, value }) {
    state.fields[key] = value
  }
}
