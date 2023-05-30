<template>
  <div class="parent">
    <b-img
      v-if="$store.getters[`${moduleName}/fields`].image"
      @error="imageFound = false"
      :src="previewImage"
      style="width: 200px; height: 200px; margin: 5px auto"
      alt="Responsive image"
    ></b-img>

    <div
      class="w-100"
      v-if="!imageFound"
    >
      <a
        class="not-found-hint"
        href="https://imageshack.com/my/albums"
        target="_blank"
      >
        <p>لم يتم العثور على الصورة</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['moduleName'],
  data() {
    return {
      imageFound: true
    }
  },
  computed: {
    previewImage() {
      this.imageFound = true
      let shortPath = this.$store.getters[`${this.moduleName}/fields`].image
      if (!shortPath) return

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
    }
  }
}
</script>

<style>
.parent {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
