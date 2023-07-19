<template>
    <div class="menu-list">
        <a-menu :default-selected-keys="['1']" :default-open-keys="['sub1']" mode="inline" theme="dark"
            :inline-collapsed="$store.state.collapsed">
            <!-- <a-menu-item v-for="menu in $store.state.menuRoutes" :key="menu.name">
                <a-icon type="pie-chart" />
                <span>{{menu.mate.title}}</span>
            </a-menu-item> -->
            <a-sub-menu v-for="menu in $store.state.menuRoutes" :key="menu.name">
                <span slot="title"><a-icon type="mail" /><span> {{menu.mate.title}}</span></span>
                <a-menu-item v-for="child in menu.children" :key="child.name">{{ child.mate.title }}</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
           
        }
    }
}
</script>

<style lang="less" scoped></style>