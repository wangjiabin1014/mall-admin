<template>
  <div class="home">
    <left-menu></left-menu>
    <div :class="{ 'main-app': true, 'menu-unfold': $store.state.collapsed }">
      <header-nav></header-nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftMenu from '../components/LeftMenu.vue'
import HeaderNav from '../components/HeaderNav.vue'
export default {
  data() {
    return {
      
    };
  },
  components: {
    LeftMenu,
    HeaderNav
  },
  methods: {

  },
};
</script>

<style>
@import url('~@/assets/css/home.less');
</style>
