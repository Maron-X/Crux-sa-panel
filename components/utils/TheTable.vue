<template>
  <b-card no-body>
    <div v-if="table.totalItems">
      <b-card
        class="mb-0"
        :title="title"
      >
        <div class="d-flex flex-wrap justify-content-between">
          <!-- Filter  -->
          <HelpersTableTFilter
            v-if="filter"
            :module-name="moduleName"
          />

          <!-- Search -->
          <!-- <HelpersTableTSearch
            v-if="search"
            :module-name="moduleName"
          /> -->

          <b-col
            lg="3"
            md="5"
            sm="6"
            class="px-0 order-sm-3 order-md-3 mb-2"
          >
            <b-form-group class="h-100 mb-0">
              <b-input-group
                size="md"
                class="table-search"
              >
                <b-form-input
                  id="filterInput"
                  v-model="filterSearch"
                  class="rounded-end"
                  type="search"
                  :placeholder="$t('inputs.searchPlaceholder')"
                />
                <b-input-group-append>
                  <b-button
                    class="search-btn-table rounded-end"
                    :disabled="!filterSearch"
                    @click="filterSearch = ''"
                  >
                    {{ $t('buttons.search') }}
                  </b-button>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>

          <!-- Create Button -->
          <HelpersTableTButton
            v-if="create"
            :title="title"
            :path="path"
          />
        </div>
      </b-card>

      <b-table
        striped
        hover
        responsive
        class="position-relative"
        per-page="10"
        :foot-clone="false"
        :current-page="currentPage"
        :fields="headers"
        :items="table.allData"
        :filter="filterSearch"
      >
        <template #cell(avatar)="data">
          <b-avatar
            class="pull-up"
            :src="getHandledImageLink(data.value)"
          />
        </template>
        <template #cell(arabicName)="data">
          <b-link to="">
            {{ data.value }}
          </b-link>
        </template>
        <template #cell(englishName)="data">
          <b-link to="">
            {{ data.value }}
          </b-link>
        </template>
        <template #cell(category)="data">
          <b-link to="">
            {{ data.value }}
          </b-link>
        </template>

        <template #cell(actions)="data">
          <span class="d-flex">
            <nuxt-link
              v-if="show"
              :to="localePath(`${path}/${data.item.id}`)"
            >
              <UtilsTheFIcon icon="eye" />
            </nuxt-link>
            <nuxt-link
              v-if="update"
              :to="localePath(`${path}/${data.item.id}`)"
            >
              <UtilsTheFIcon icon="edit" />
            </nuxt-link>
            <UtilsTheFIcon
              class="text-danger ml-1"
              icon="trash"
              @click.native="showMsgBoxTwo(data)"
            />
          </span>
        </template>

        <!-- Default fall-back custom formatted footer cell -->
        <template #foot()="data">
          <i>{{ data }}</i>
        </template>
      </b-table>

      <HelpersTLottie
        v-if="!table.allData.length"
        :title="title"
        :path="path"
        height="60"
        lottie="https://assets1.lottiefiles.com/packages/lf20_tmsiddoc.json"
      />

      <!-- pagination -->
      <HelpersTableTPagination v-if="pagination">
        <template #content>
          <b-pagination
            v-model="currentPage"
            class="custom-pagination"
            per-page="10"
            size="md"
            :total-rows="table.totalItems"
          />
        </template>
      </HelpersTableTPagination>
    </div>
    <!-- Lottie Player -->
    <HelpersTLottie
      v-else
      :title="title"
      :path="path"
      :lottie="lottie"
      :create="true"
    />
  </b-card>
</template>

<script>
export default {
  props: {
    moduleName: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    path: {
      type: String,
      default: null
    },
    headers: {
      type: Array,
      default: null
    },
    lottie: {
      type: String,
      default: null
    },
    create: {
      type: Boolean,
      default: true
    },
    update: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: true
    },
    search: {
      type: Boolean,
      default: true
    },
    filter: {
      type: Boolean,
      default: true
    },
    pagination: {
      type: Boolean,
      default: true
    },
    delKey: {
      type: String,
      default: 'name'
    }
  },
  data() {
    return {
      currentPage: 1,
      filterSearch: null
    }
  },

  computed: {
    table() {
      return this.$store.getters[`${this.moduleName}/table`]
    }
  },
  watch: {
    async currentPage(newValue) {
      await this.$store.commit(`${this.moduleName}/setTableValue`, {
        key: 'page',
        value: newValue
      })
      // await this.$store.dispatch(`${this.moduleName}/getDataByQuery`, {
      //   page: newValue
      // })
    }
  },
  methods: {
    getHandledImageLink(shortPath) {
      let link = shortPath
      // if (!shortPath.includes('firebasestorage')) {
      //   const noSlashShortPath = shortPath
      //     .replace('/', '')
      //     .replaceAll('/', '%2F')
      //   link =
      //     'https://evssyncwebireland1.idrive.com/evs/getThumbnail?thumbnail_type=I&p=' +
      //     noSlashShortPath
      // }
      return link
    },
    showMsgBoxTwo(data) {
      this.$bvModal
        .msgBoxConfirm(
          `${this.$t('modals.delete_msg')}( ${data.item[this.delKey]} )`,
          {
            title: this.$t('modals.delete_confirm'),
            size: 'sm',
            okVariant: 'primary',
            okTitle: this.$t('buttons.yes'),
            cancelTitle: this.$t('buttons.no'),
            cancelVariant: 'outline-secondary',
            hideHeaderClose: false,
            centered: false
          }
        )
        .then((value, i) => value && this.delete(data.item.id, data.item.image))
    },
    async delete(id, img) {
      await this.$store.dispatch(`${this.moduleName}/deleteFromDB`, { id, img })
      await this.$nuxt.refresh()
      await this.$toast.success(this.$t('msg.delete'))
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
