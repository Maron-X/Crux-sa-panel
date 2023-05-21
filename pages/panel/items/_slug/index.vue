<template>
  <UtilsTheContentWrapper :list="list">
    <template #content>
      <ContainersDoUpdate
        :id="id"
        :title="$t('item')"
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
            :label="$t('description')"
            :module-name="moduleName"
            icon="edit-2"
            store-key="description"
          />

          <FormFFile
            :label="$t('image')"
            :module-name="moduleName"
            preview="items"
            store-key="image"
            icon="image"
            lg="12"
          />

          <FormFInputIcon
            :label="$t('cal')"
            :module-name="moduleName"
            icon="layers"
            type="number"
            store-key="cal"
          />

          <FormFInputIcon
            :label="$t('sar')"
            :module-name="moduleName"
            icon="dollar-sign"
            type="number"
            store-key="sar"
          />

          <FormFVSelectIcon
            :label="$t('categories')"
            label-select="title"
            :module-name="moduleName"
            icon="grid"
            global
            list-key="categories"
            store-key="category"
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
      this.$store.dispatch('panel/items/resetData')
    }, 1500)
    next()
  },
  layout: 'panel',
  async asyncData({ $fire, store, params }) {
    await store.dispatch('panel/items/resetData')
    const id = await params.slug
    const doc = await $fire.firestore.collection('items').doc(id).get()

    await store.dispatch('panel/items/showSingleData', doc.data())
    return {
      id
    }
  },
  data() {
    return {
      moduleName: 'panel/items',
      list: [
        {
          text: this.$t('items'),
          active: false,
          to: '/panel/items'
        },
        {
          text: this.$t('update'),
          active: true,
          to: '/panel/items/update'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
