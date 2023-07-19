<template>
    <div class="menu-header">
        <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
            <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
        <div class="breadcrumb">
            <a-breadcrumb>
                <a-breadcrumb-item>首页</a-breadcrumb-item>
                <a-breadcrumb-item><a href="">统计</a></a-breadcrumb-item>
            </a-breadcrumb>
        </div>
        <ul class="user-info">
            <li class="item">欢迎{{ $store.state.user.username }}！<a-icon type="down" /></li>
<<<<<<< HEAD
            <li class="item" @click="logout">退出</li>
=======
            <li class="item">退出</li>
>>>>>>> 4e95d7ebd4bcd59e07dd1f6a7a5db08a47976514
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        toggleCollapsed() {
            this.$store.dispatch('changeCollapsed')
<<<<<<< HEAD
        },
        logout(){
            this.$store.dispatch('logout')
            this.$router.push({name:'Login'})
=======
>>>>>>> 4e95d7ebd4bcd59e07dd1f6a7a5db08a47976514
        }
    }
}
</script>

<style></style>