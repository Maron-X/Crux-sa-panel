<template>
  <UtilsTheContentWrapper :list="list">
    <template #content>
      <UtilsTheTable
        :title="$t('adds-item')"
        :filter="false"
        :headers="headers"
        :del-key="'title'"
        module-name="panel/adds-items"
        path="/panel/adds-items"
        lottie="https://assets6.lottiefiles.com/packages/lf20_hiyclepy.json"
      />
    </template>
  </UtilsTheContentWrapper>
</template>

<script>
export default {
  name: 'AddsItems',
  layout: 'panel',
  async asyncData({ $fire, store }) {
    const data = await $fire.firestore
      .collection('adds_items')
      .orderBy('createdAt', 'asc')

    const { size, docs } = await data.get()

    store.dispatch('panel/adds-items/getAllDataFromApi', {
      data: docs,
      total: size
    })
  },
  data() {
    return {
      list: [
        {
          text: this.$t('adds-items'),
          active: true,
          to: '/panel/adds-items'
        }
      ],
      headers: [
        // {
        //   key: 'avatar',
        //   label: this.$t('image'),
        //   formatter: (value, key, item) => {
        //     return item.image
        //   }
        // },
        {
          key: 'title',
          label: this.$t('name')
        },
        {
          key: 'price',
          label: this.$t('price')
        },
        {
          key: 'category_name',
          label: this.$t('category')
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
