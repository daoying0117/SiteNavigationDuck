<template>
    <n-config-provider :theme="theme">
        <div>
            <n-layout>
                <n-layout has-sider class="topLayout">
                    <n-layout-sider>
                        <div class="nav-icon">
                            <n-image src="/img/javacat.png" :preview-disabled="true" />
                        </div>
                    </n-layout-sider>

                    <n-layout-header>
                        
                        <!-- 设置 -->
                        <div class="header-setting">
                            <n-button quaternary circle >
                                <template #icon>
                                  <n-icon><SettingsOutline/></n-icon>
                                </template>
                              </n-button>
                        </div>
                    </n-layout-header>

                </n-layout>

                <n-layout-content content-style="padding: 48px; height:84vh;">
                    <InputSearch/>
                    <div class="nav-node">
                        <Components />
                    </div>
                </n-layout-content>

                <n-layout-footer>
                    <div class="footer-center">
                        <a href="https://beian.miit.gov.cn/" style="text-decoration: none; color: inherit;" target="_blank">
                            <span>
                                Copyright © 爪哇鸭  黑ICP备2022001516号
                            </span>
                        </a>
                    </div>
                </n-layout-footer>
            </n-layout>
        </div>
        <!-- 导航首页 -->

    </n-config-provider>
</template>

<script setup>
import Components from './Components.vue'
import InputSearch from './InputSearch.vue'
import {darkTheme} from "naive-ui";
import { SettingsOutline } from "@vicons/ionicons5";

components: {
    Components,
    InputSearch
}

import { ref,onMounted,onBeforeUnmount } from 'vue'
const theme = ref(null)

const detectColorScheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme.value = darkTheme
  } else {
    theme.value = null
  }
};

onMounted(() => {
  detectColorScheme();
  window.matchMedia('(prefers-color-scheme: dark)').addListener(detectColorScheme);
});

onBeforeUnmount(() => {
  window.matchMedia('(prefers-color-scheme: dark)').removeListener(detectColorScheme);
});
</script>

<style>
.nav-icon {
    margin: 1vh;
    width: 8vh;
    height: 8vh;
}
.nav-icon .n-image {
    height: 100px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
}

.n-input .n-input__input-el  {
    height: 6.5vh;
    font-size: 2.4vh;
}

.nav-node {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
}

.footer-center{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex: 1;
}

.n-layout-content{
    height: 100%;
}

.n-layout-footer{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 6vh;
}
.topLayout{
    height: 10vh;
}

.n-layout-header{
    display: grid;
    place-items: center end;
}
.header-setting{
    margin: 3vh;
}


</style>