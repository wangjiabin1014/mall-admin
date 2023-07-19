<template>
    <div>
        <div id="card" style="background-color: #ececec; padding: 20px;">
            <a-row :gutter="16">
                <a-col :span="8">
                    <a-card title="商品总览" :bordered="false">
                        <p>card content</p>
                    </a-card>
                </a-col>
                <a-col :span="8">
                    <a-card title="用户总览" :bordered="false">
                        <p>card content</p>
                    </a-card>
                </a-col>
                <a-col :span="8">
                    <a-card title="销售总览" :bordered="false">
                        <p>card content</p>
                    </a-card>
                </a-col>
            </a-row>
        </div>
        <v-chart></v-chart>
    </div>
</template>

<script>
import VChart from './VChart.vue';
export default{
    components:{
        VChart,
    }
}
</script>
  
<style lang="less" scoped>
@import url('~@/assets/css/index.less');
</style>