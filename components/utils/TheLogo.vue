<template>
  <li class="nav-item mr-auto w-100">
    <b-link
      class="navbar-brand w-100"
      to="/"
    >
      <span class="brand-logo">
        <b-img
          :style="{ 'max-width': maxWidth + 'px' }"
          :src="require('@/static/logo.png')"
          alt="logo"
        />
      </span>
      <h2 class="brand-text">Crux-sa</h2>
    </b-link>
  </li>
</template>

<script>
export default {
  props: {
    maxWidth: {
      type: [Number, String],
      default: 36
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
