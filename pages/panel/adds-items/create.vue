<template>
  <UtilsTheContentWrapper :list="list">
    <template #content>
      <ContainersDoCreate
        :title="$t('adds-item')"
        :module-name="moduleName"
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
      </ContainersDoCreate>
    </template>
  </UtilsTheContentWrapper>
</template>

<script>
export default {
  name: 'Create',

  layout: 'panel',
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
          text: this.$t('create'),
          active: true,
          to: '/panel/adds-items/create'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
