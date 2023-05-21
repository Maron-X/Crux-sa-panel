<template>
  <UtilsTheContentWrapper :list="list">
    <template #content>
      <UtilsTheTable
        :title="$t('item')"
        :filter="false"
        :headers="headers"
        del-key="title"
        module-name="panel/items"
        path="/panel/items"
        lottie="https://assets7.lottiefiles.com/packages/lf20_zzbz9na6.json"
      />
    </template>
  </UtilsTheContentWrapper>
</template>

<script>
export default {
  name: 'Items',
  layout: 'panel',
  async asyncData({ $fire, store }) {
    const data = await $fire.firestore
      .collection('items')
      .orderBy('createdAt', 'asc')

    const { size, docs } = await data.get()

    store.dispatch('panel/items/getAllDataFromApi', {
      data: docs,
      total: size
    })
  },
  data() {
    return {
      list: [
        {
          text: this.$t('items'),
          active: true,
          to: '/panel/items'
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
          label: this.$t('name')
        },
        {
          key: 'cal',
          label: this.$t('cal')
        },
        {
          key: 'sar',
          label: this.$t('sar')
        },
        {
          key: 'cal',
          label: this.$t('cal')
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
