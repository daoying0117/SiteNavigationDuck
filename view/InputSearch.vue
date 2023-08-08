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

import { ref, reactive,onMounted } from 'vue'

import {searchEngines, searchOptions,getCurrentSearchConfig} from '../data/exportData'

const inputValue = ref(null);

const selectValue = reactive({});

// 定义搜索引擎类型
const options = reactive(searchOptions)

const searchEngine = reactive(searchEngines)

const searchHandleKeyUp = (e) => {

    let inputText = inputValue.value;

    //如果是回车键跳转页面
    if (e.key === "Enter") {
        if(inputText){
        //进行URL编码
            inputText = encodeURIComponent(inputText);
        }
        window.open(selectValue.key + inputText)
        inputValue.value = null;
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

onMounted(() => {
    const currentSearchConfig = getCurrentSearchConfig();
    selectValue.label = currentSearchConfig.label;
    selectValue.key = currentSearchConfig.key;
    selectValue.icon = currentSearchConfig.icon;
})

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
    margin-top: 10px;
}

.nav-search .n-input {
    width: 42%;
    height: 6.5vh;
    min-width: 40vh;
}
</style>