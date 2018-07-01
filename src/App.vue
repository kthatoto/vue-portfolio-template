<template>
  <div id="app">
    <Menu/>
    <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
export default {
  name: 'App',
  components: { Menu }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
a, a:visited {
  color: inherit;
}
</style>
