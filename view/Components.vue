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

const data = ref(
    [
        {
            name: "GPT",
            url: "https://chat.openai.com/",
            img: "https://chat.openai.com/favicon.ico",
        },
        {
            name: "Google",
            url: "https://www.google.com/",
            img: "https://www.google.com/favicon.ico",
        },
        {
            name: "BiliBili",
            url: "https://www.bilibili.com/",
            img: "https://www.bilibili.com/favicon.ico",
        },
        {
            name: "知乎",
            url: "https://www.zhihu.com/",
            img: "https://www.zhihu.com/favicon.ico",
        },
        {
            name: "掘金",
            url: "https://www.juejin.cn/",
            img: "https://juejin.cn/favicon.ico",
        },
        {
            name: "Github",
            url: "https://www.github.com",
            img: "https://www.github.com/favicon.ico",
        },
        {
            name: "Maven",
            url: "https://mvnrepository.com/",
            img: "https://mvnrepository.com/assets/images/7080b8b0f6f48e6fbaffd5f9d85fcc7f-favicon.ico",
        },
        {
            name: "Spring",
            url: "https://spring.io/",
            img: "https://spring.io/favicon.ico",
        },
        {
            name: "RUST圣经",
            url: "https://course.rs/",
            img: "https://course.rs/favicon.svg",
        },
        {
            name: "百度",
            url: "https://www.baidu.com/",
            img: "https://www.baidu.com/favicon.ico",
        },
        {
            name: "京东",
            url: "https://www.jd.com/",
            img: "https://www.jd.com/favicon.ico",
        },
        {
            name: "elastic",
            url: "https://www.elastic.co/guide/en/elasticsearch/reference/7.17/getting-started.html",
            img: "https://www.elastic.co/favicon.ico",
        },
    ]
)

onMounted(() => {
    console.log(data)
    console.log(process.env.NODE_ENV,"env")

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