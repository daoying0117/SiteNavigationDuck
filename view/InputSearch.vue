<template>
    <div class="nav-search">
        <n-input round placeholder="搜索" v-model:value="inputValue" @keyup="searchHandleKeyUp" size="large">
            <template #prefix>
                <n-dropdown trigger="hover" placement="bottom-start" :options="options" @select="handleSelect">
                    <n-image :src="selectValue.icon" :preview-disabled="true"></n-image>
                </n-dropdown>
            </template>
            <template #suffix>
                <n-icon :component="FlashOutline" />
            </template>
        </n-input>
    </div>
</template>

<script setup>
import { FlashOutline } from "@vicons/ionicons5";

import { ref, reactive } from 'vue'

const inputValue = ref(null);

const selectValue = reactive({
    label: "谷歌",
    key: "https://www.google.com/search?q=",
    icon: "https://www.google.com/favicon.ico",
});
// 定义搜索引擎类型

const options = reactive([
    {
        key: "https://www.google.com/search?q=",
        label: "谷歌",
    },
    {
        label: "百度",
        key: "https://www.baidu.com/s?wd=",
    },
    {
        label: "GitHub",
        key: "https://github.com/search?q=",
    },
    {
        label: "必应",
        key: "https://cn.bing.com/search?q=",
    },
    {
        label: "搜狗",
        key: "https://www.sogou.com/web?query=",
    },
    {
        label: "360",
        key: "https://www.so.com/s?q=",
    },
    {
        label: "淘宝",
        key: "https://s.taobao.com/search?q=",
    },
    {
        label: "京东",
        key: "https://search.jd.com/Search?keyword=",
    },
    ,
    {
        label: "微博",
        key: "https://s.weibo.com/weibo/",
    },
    {
        label: "知乎",
        key: "https://www.zhihu.com/search?type=content&q=",
    }
])

const searchEngine = reactive([
    {
        key: "https://www.google.com/search?q=",
        label: "谷歌",
        icon: "https://www.google.com/favicon.ico",
    },
    {
        label: "百度",
        key: "https://www.baidu.com/s?wd=",
        icon: "https://www.baidu.com/favicon.ico",
    },
    {
        label: "GitHub",
        key: "https://github.com/search?q=",
        icon: "https://github.com/favicon.ico",
    },
    {
        label: "必应",
        key: "https://www.bing.com/search?q=",
        icon: "https://www.bing.com/favicon.ico",
    },
    {
        label: "搜狗",
        key: "https://www.sogou.com/web?query=",
        icon: "https://www.sogou.com/favicon.ico",
    },
    {
        label: "360",
        key: "https://www.so.com/s?q=",
        icon: "https://www.so.com/favicon.ico",
    },
    {
        label: "淘宝",
        key: "https://s.taobao.com/search?q=",
        icon: "https://www.taobao.com/favicon.ico",
    },
    {
        label: "京东",
        key: "https://search.jd.com/Search?keyword=",
        icon: "https://www.jd.com/favicon.ico",
    },
    {
        label: "知乎",
        key: "https://www.zhihu.com/search?type=content&q=",
        icon: "https://www.zhihu.com/favicon.ico",
    },
    {
        label: "微博",
        key: "https://s.weibo.com/weibo/",
        icon: "https://www.weibo.com/favicon.ico",
    },
])

const searchHandleKeyUp = (e) => {
    //如果是回车键跳转页面
    if (e.key === "Enter") {
        window.open(selectValue.key + inputValue.value)
    }
}

const handleSelect = (item) => {
    if(item){
        const now = searchEngine.find((v) => v.key === item);
        if(now){
            selectValue.label = now.label;
            selectValue.key = now.key;
            selectValue.icon = now.icon;
        }
    }
}

</script>

<style scoped>

.n-image{
    width: 32px;
    height: 32px;
}
.nav-search {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 120px;
}

.search .n-input .n-input__input-el {
    height: 50px !important;
}



.nav-search .n-input {
    width: 42%;
    height: 50px;
}
</style>