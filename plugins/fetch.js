export default async function ({ $fire, $axios, store, app }) {
  const data = await $fire.firestore
    .collection('categories')
    .orderBy('createdAt', 'asc')

  const { docs } = await data.get()
  const docsData = await docs.map(doc => ({ ...doc.data(), id: doc.id }))

  store.commit('global/setList', {
    key: 'categories',
    value: docsData
  })

  // store.dispatch('panel/categories/getAllDataFromApi', {
  //   data: docs,
  //   total: size
  // })

  //   // get All Activities
  //   const activities = await $axios.$get('activities')
  //   store.commit('global/setList', {
  //     key: 'activities',
  //     value: activities.data.data
  //   })
}
