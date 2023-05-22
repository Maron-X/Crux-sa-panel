<template>
  <UtilsTheContentWrapper :list="list">
    <template #content>
      <component
        :is="table.allData.length ? 'ContainersDoUpdate' : 'ContainersDoCreate'"
        :title="$t('settings')"
        path="panel/settings"
        :module-name="moduleName"
      >
        <template #inputs>
          <FormFInputIcon
            label="انستجرام"
            :module-name="moduleName"
            icon="user"
            store-key="instagram"
          />
          <FormFInputIcon
            label="الواتس اب"
            :module-name="moduleName"
            icon="user"
            store-key="whatsapp"
          />
          <FormFInputIcon
            label="العنوان"
            :module-name="moduleName"
            icon="user"
            store-key="location"
          />
          <FormFInputIcon
            label=" ساعات العمل"
            :module-name="moduleName"
            icon="user"
            store-key="open_time"
          />
          <!-- <FormFInputIcon
            label="الرقم السرى"
            :module-name="moduleName"
            icon="user"
            store-key="password"
          /> -->
          <FormFInputIcon
            label="الهاتف"
            :module-name="moduleName"
            icon="user"
            store-key="phone"
          />
          <FormFInputIcon
            label="اسم الدخول"
            :module-name="moduleName"
            icon="user"
            store-key="username"
          />
        </template>
      </component>
      <!-- <ContainersDoUpdate :title="$t('settings')">

      </ContainersDoUpdate> -->
    </template>
  </UtilsTheContentWrapper>
</template>

<script>
export default {
  name: 'Settings',
  layout: 'panel',
  async asyncData({ $fire, store }) {
    const data = await $fire.firestore
      .collection('settings')
      .orderBy('createdAt', 'asc')

    const { size, docs } = await data.get()

    store.dispatch('panel/settings/getAllDataFromApi', {
      data: docs,
      total: size
    })
  },
  data() {
    return {
      moduleName: 'panel/settings',

      list: [
        {
          text: this.$t('settings'),
          active: true,
          to: '/panel/settings'
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
  },
  computed: {
    table() {
      return this.$store.getters[`${this.moduleName}/table`]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
