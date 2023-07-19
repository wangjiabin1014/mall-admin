<template>
    <div class="menu-list">
        <a-menu :default-selected-keys="[$router.currentRoute.matched[1] ? $router.currentRoute.matched[1].name : '']"
            :default-open-keys="[$router.currentRoute.matched[0].name]" mode="inline" theme="dark"
            :inline-collapsed="$store.state.collapsed">
            <template v-for="menu in $store.state.menuRoutes">
                <a-sub-menu v-if="!menu.mate.hidden" :key="menu.name">
                    <span slot="title"><a-icon :type="menu.mate.icon" /><span> {{ menu.mate.title }}</span></span>
                    <a-menu-item v-for="child in menu.children" :key="child.name">
                        <router-link :to="{ name: child.name }"><a-icon :type="child.mate.icon" /><span></span>{{ child.mate.title }}</router-link>
                    </a-menu-item>
                </a-sub-menu>
            </template>
        </a-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    // created() {
    //     console.log(this.$router)
    // }
}
</script>

<style lang="less" scoped></style>