<template>
  <div class="menu">
    <router-link to="/" class="menu__link">Top</router-link>
    <router-link to="/works" class="menu__link">Works</router-link>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
$menuHeight: 50px;
.menu {
  background-color: #333;
  height: $menuHeight;
  &__link {
    float: left;
    text-align: center;
    height: $menuHeight;
    line-height: $menuHeight;
    color: white;
    width: 100px;
    border-right: 1px solid white;
    &:hover {
      background-color: #444;
    }
  }
}
</style>
