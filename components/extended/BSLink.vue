<template>
  <li class="nav-item">
    <nuxt-link
      :to="localePath(`${route}`)"
      class="d-flex align-items-center nav-item-link-style"
    >
      <UtilsTheFIcon
        :icon="icon"
        height="38"
      />
      <span
        class="menu-title text-truncate fs-5"
        size="lg"
        v-text="title"
      />
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
