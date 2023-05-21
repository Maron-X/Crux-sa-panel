<template>
  <UtilsTheContentWrapper :list="list">
    <template #content>
      <ContainersDoUpdate
        :id="id"
        :title="$t('add-item')"
        :module-name="moduleName"
        :path="moduleName"
      >
        <template #inputs>
          <FormFInputIcon
            :label="$t('name')"
            :module-name="moduleName"
            icon="user"
            store-key="title"
          />
          <FormFInputIcon
            :label="$t('price')"
            :module-name="moduleName"
            icon="dollar-sign"
            type="number"
            store-key="price"
          />
          <FormFVSelectIcon
            :label="$t('categories')"
            label-select="title"
            :module-name="moduleName"
            icon="grid"
            global
            list-key="categories"
            store-key="category_id"
          />
        </template>
      </ContainersDoUpdate>
    </template>
  </UtilsTheContentWrapper>
</template>

<script>
export default {
  name: 'Update',
  beforeRouteLeave(to, from, next) {
    setTimeout(() => {
      this.$store.dispatch('panel/adds-items/resetData')
    }, 1500)
    next()
  },
  layout: 'panel',
  async asyncData({ $fire, store, params }) {
    await store.dispatch('panel/adds-items/resetData')
    const id = await params.slug

    const doc = await $fire.firestore.collection('adds_items').doc(id).get()

    await store.dispatch('panel/adds-items/showSingleData', doc.data())
    return {
      id
    }
  },
  data() {
    return {
      moduleName: 'panel/adds-items',
      list: [
        {
          text: this.$t('adds-items'),
          active: false,
          to: '/panel/adds-items'
        },
        {
          text: this.$t('update'),
          active: true,
          to: '/panel/adds-items/update'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
