<template>
  <UtilsTheContentWrapper :list="list">
    <template #content>
      <ContainersDoCreate
        :title="$t('item')"
        :module-name="moduleName"
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
          <FormFAreaIcon
            :label="$t('ar_description')"
            :module-name="moduleName"
            icon="edit-2"
            store-key="description"
            lg="6"
          />
          <FormFAreaIcon
            :label="$t('en_description')"
            :module-name="moduleName"
            icon="edit-2"
            store-key="en_description"
            lg="6"
          />

          <!-- <FormFFile
            :label="$t('image')"
            :module-name="moduleName"
            preview="items"
            store-key="image"
            icon="image"
            lg="12"
          /> -->

          <!-- <FormFInputIcon
            dir="ltr"
            :label="$t('image_path')"
            :module-name="moduleName"
            preview="items"
            store-key="image"
            icon="image"
            lg="12"
          /> -->

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

          <FormFInputIcon
            dir="ltr"
            :label="$t('image_path')"
            :module-name="moduleName"
            preview="items"
            store-key="image"
            icon="image"
            lg="6"
          />
          <PreviewDriveImage :moduleName="moduleName" />
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
      imageFound: true,

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

<style lang="scss" scoped></style>
