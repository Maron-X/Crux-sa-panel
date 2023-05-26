<template>
  <div class="d-flex justify-content-center">
    <img src="/logo-text.png" />
  </div>
</template>

<script>
export default {
  name: 'Panel',
  layout: 'panel'
}
</script>

<style lang="scss">
.not-found-hint {
  width: 100%;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  height: 100px;
  color: red;
  text-align: center;
  margin: 20px auto;
}
</style>
