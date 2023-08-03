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

import { ref } from 'vue'

const data = ref(
    [
        {
            name: "GPT",
            url: "https://chatbot.theb.ai/",
            img: "https://chatbot.theb.ai/assets/bai.png",
        },
        {
            name: "Google",
            url: "https://www.google.com/",
            img: "https://www.zuh8.com/wp-content/uploads/2022/07/a0cdb-www.google.com.png.webp",
        },
        {
            name: "Google",
            url: "https://www.google.com/",
            img: "https://www.zuh8.com/wp-content/uploads/2022/07/a0cdb-www.google.com.png.webp",
        },
        {
            name: "Google",
            url: "https://www.google.com/",
            img: "https://www.zuh8.com/wp-content/uploads/2022/07/a0cdb-www.google.com.png.webp",
        },
        {
            name: "Google",
            url: "https://www.google.com/",
            img: "https://www.zuh8.com/wp-content/uploads/2022/07/a0cdb-www.google.com.png.webp",
        },
        {
            name: "Google",
            url: "https://www.google.com/",
            img: "https://www.zuh8.com/wp-content/uploads/2022/07/a0cdb-www.google.com.png.webp",
        },
        {
            name: "GPT",
            url: "https://chatbot.theb.ai/",
            img: "https://chatbot.theb.ai/assets/bai.png",
        },
        {
            name: "Google",
            url: "https://www.google.com/",
            img: "https://www.zuh8.com/wp-content/uploads/2022/07/a0cdb-www.google.com.png.webp",
        },
        {
            name: "GPT",
            url: "https://chatbot.theb.ai/",
            img: "https://chatbot.theb.ai/assets/bai.png",
        },
        {
            name: "Google",
            url: "https://www.google.com/",
            img: "https://www.zuh8.com/wp-content/uploads/2022/07/a0cdb-www.google.com.png.webp",
        },
        {
            name: "GPT",
            url: "https://chatbot.theb.ai/",
            img: "https://chatbot.theb.ai/assets/bai.png",
        },
        {
            name: "Google",
            url: "https://www.google.com/",
            img: "https://www.zuh8.com/wp-content/uploads/2022/07/a0cdb-www.google.com.png.webp",
        },
    ]
)
</script>

<style scoped>
.n-card {
    max-width: 160px;
    max-height: 160px;
}

.n-image {
    height: 100px;
    display: flex;
    justify-content: center;
}

.n-gradient-text {
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-box-son-text {
    display: flex;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
}

.nav-box-son-url {
    text-decoration: none;
}

.nav-box {
    width: 780px;
    display: flex;
    flex-wrap: wrap;
}

.nav-box .nav-box-son {
    flex-basis: 25%;
    /* 每个盒子占据父容器宽度的四分之一 */
    padding: 20px;
    box-sizing: border-box;
}</style>