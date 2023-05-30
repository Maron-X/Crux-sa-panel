<template>
  <UtilsTheContentWrapper :list="list">
    <template #content>
      <ContainersDoUpdate
        :id="id"
        :title="$t('category')"
        :module-name="moduleName"
        :path="moduleName"
      >
        <template #inputs>
          <FormFInputIcon
            :label="$t('ar_name')"
            :module-name="moduleName"
            icon="user"
            store-key="title"
          />
          <FormFInputIcon
            :label="$t('en_name')"
            :module-name="moduleName"
            icon="user"
            store-key="title_en"
          />

          <!-- <FormFFile
            :label="$t('image')"
            :module-name="moduleName"
            preview="categories"
            icon="image"
            store-key="image"
          /> -->

          <FormFInputIcon
            dir="ltr"
            :label="$t('image')"
            :module-name="moduleName"
            icon="image"
            store-key="image"
          />
          <PreviewDriveImage :moduleName="moduleName" />
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
      this.$store.dispatch('panel/categories/resetData')
    }, 1500)
    next()
  },
  layout: 'panel',
  async asyncData({ $fire, store, params }) {
    await store.dispatch('panel/categories/resetData')
    const id = await params.slug
    const doc = await $fire.firestore.collection('categories').doc(id).get()

    await store.dispatch('panel/categories/showSingleData', doc.data())
    return {
      id
    }
  },
  data() {
    return {
      moduleName: 'panel/categories',
      list: [
        {
          text: this.$t('categories'),
          active: false,
          to: '/panel/categories'
        },
        {
          text: this.$t('update'),
          active: true,
          to: '/panel/categories/update'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
