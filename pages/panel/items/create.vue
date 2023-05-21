<template>
  <UtilsTheContentWrapper :list="list">
    <template #content>
      <ContainersDoCreate
        :title="$t('item')"
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
            :label="$t('description')"
            :module-name="moduleName"
            icon="user"
            store-key="description"
          />

          <FormFFile
            :label="$t('image')"
            :module-name="moduleName"
            preview="items"
            store-key="image"
            lg="12"
          />

          <FormFInputIcon
            :label="$t('cal')"
            :module-name="moduleName"
            icon="user"
            type="number"
            store-key="cal"
          />

          <FormFInputIcon
            :label="$t('sar')"
            :module-name="moduleName"
            icon="user"
            type="number"
            store-key="sar"
          />

          <FormFVSelectIcon
            :label="$t('categories')"
            label-select="title"
            :module-name="moduleName"
            icon="list"
            global
            list-key="categories"
            store-key="category"
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
      moduleName: 'panel/items',
      list: [
        {
          text: this.$t('items'),
          active: false,
          to: '/panel/items'
        },
        {
          text: this.$t('create'),
          active: true,
          to: '/panel/items/create'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
