<template>
    <div class="menu-list">
        <a-menu :default-selected-keys="['1']" :default-open-keys="['sub1']" mode="inline" theme="dark"
            :inline-collapsed="$store.state.collapsed">
<<<<<<< HEAD
            <!-- <a-menu-item v-for="menu in $store.state.menuRoutes" :key="menu.name">
                <a-icon type="pie-chart" />
                <span>{{menu.mate.title}}</span>
            </a-menu-item> -->
            <a-sub-menu v-for="menu in $store.state.menuRoutes" :key="menu.name">
                <span slot="title"><a-icon type="mail" /><span> {{menu.mate.title}}</span></span>
                <a-menu-item v-for="child in menu.children" :key="child.name">{{ child.mate.title }}</a-menu-item>
=======
            <a-menu-item key="1">
                <a-icon type="pie-chart" />
                <span>Option 1</span>
            </a-menu-item>
            <a-menu-item key="2">
                <a-icon type="desktop" />
                <span>Option 2</span>
            </a-menu-item>
            <a-menu-item key="3">
                <a-icon type="inbox" />
                <span>Option 3</span>
            </a-menu-item>
            <a-sub-menu key="sub1">
                <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
                <a-menu-item key="5">
                    Option 5
                </a-menu-item>
                <a-menu-item key="6">
                    Option 6
                </a-menu-item>
                <a-menu-item key="7">
                    Option 7
                </a-menu-item>
                <a-menu-item key="8">
                    Option 8
                </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
                <a-menu-item key="9">
                    Option 9
                </a-menu-item>
                <a-menu-item key="10">
                    Option 10
                </a-menu-item>
                <a-sub-menu key="sub3" title="Submenu">
                    <a-menu-item key="11">
                        Option 11
                    </a-menu-item>
                    <a-menu-item key="12">
                        Option 12
                    </a-menu-item>
                </a-sub-menu>
>>>>>>> 4e95d7ebd4bcd59e07dd1f6a7a5db08a47976514
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