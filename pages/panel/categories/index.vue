<template>
  <UtilsTheContentWrapper :list="list">
    <template #content>
      <UtilsTheTable
        :title="$t('category')"
        :filter="false"
        :headers="headers"
        del-key="title"
        module-name="panel/categories"
        path="/panel/categories"
        lottie="https://assets10.lottiefiles.com/packages/lf20_ekfccbba.json"
      />
    </template>
  </UtilsTheContentWrapper>
</template>

<script>
export default {
  name: 'Categories',
  layout: 'panel',
  async asyncData({ $fire, store }) {
    const data = await $fire.firestore
      .collection('categories')
      .orderBy('createdAt', 'asc')

    const { size, docs } = await data.get()

    store.dispatch('panel/categories/getAllDataFromApi', {
      data: docs,
      total: size
    })
  },
  data() {
    return {
      list: [
        {
          text: this.$t('categories'),
          active: true,
          to: '/panel/categories'
        }
      ],
      headers: [
        {
          key: 'avatar',
          label: this.$t('image'),
          formatter: (value, key, item) => {
            return item.image
          }
        },
        {
          key: 'title',
          label: this.$t('ar_name')
        },
        {
          key: 'title_en',
          label: this.$t('en_name')
        },
        {
          key: 'actions',
          label: this.$t('actions')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
