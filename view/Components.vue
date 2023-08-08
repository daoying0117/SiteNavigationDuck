<template>
    <div class="nav-box">
        <div class="nav-box-son" v-for="item in data">
            <a class="nav-box-son-url" :href="item.url" target="_blank">
                <n-card hoverable>
                    <n-image :src="item.img" :preview-disabled="true" />
                    <n-gradient-text type="error">
                        <span class="nav-box-son-text">{{ item.name }}</span>
                    </n-gradient-text>
                </n-card>
            </a>

        </div>
    </div>
</template>

<script setup>

import { ref,onMounted } from 'vue'

import {getQuickAccessList} from '../data/exportData'

const data = ref(
    []
)

onMounted(() => {
    data.value = getQuickAccessList();
})
</script>

<style scoped>
.n-card {
    max-width: 17vh;
    max-height: 17vh;
    border-radius: 40px
}

.n-image {
    height: 8vh;
    min-width: 8vh;
    display: flex;
    justify-content: center;
}

.n-gradient-text {
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-box-son-text {
    margin-top: 2vh;
    display: flex;
    font-size: 1.5vh;
    font-weight: bold;
    text-align: center;
}

.nav-box-son-url {
    text-decoration: none;
}

.nav-box {
    width: 700px;
    display: flex;
    flex-wrap: wrap;
}

.nav-box .nav-box-son {
    flex-basis: 25%;
    /* 每个盒子占据父容器宽度的四分之一 */
    padding: 1vh;
    box-sizing: border-box;
}

@media (max-width: 768px){
    .nav-box {
        width: 100%;
    }
    .nav-box .nav-box-son {
        flex-basis: 50%;
    }
}
</style>