<template>
    <div>
        <div>
            <n-layout>
                <n-layout has-sider>
                    <n-layout-sider content-style="padding: 24px;">
                        <div class="nav-icon">

                        </div>
                    </n-layout-sider>

                    <n-layout-header>头部说明</n-layout-header>

                </n-layout>

                <n-layout-content>
                    <div class="nav-search">
                        <n-input round placeholder="搜索" size="large">
                            <template #suffix>
                                <n-icon :component="FlashOutline" />
                            </template>
                        </n-input>
                    </div>
                    <div class="nav-node">
                        <Components />
                    </div>
                </n-layout-content>

                <n-layout-footer>
                    <div class="footer-center">
                        <a href="" style="text-decoration: none; color: inherit;" target="_blank">
                            <span>
                                备案信息
                            </span>
                        </a>
                    </div>
                </n-layout-footer>
            </n-layout>
        </div>
        <!-- 导航首页 -->

    </div>
</template>

<script setup>
import { FlashOutline } from "@vicons/ionicons5";
import Components from './Components.vue'
components: {
    FlashOutline,
        Components
}
</script>

<style>
.nav-icon {
    width: 80px;
    height: 80px;
    background: rebeccapurple;
}

.nav-node {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
}

.n-layout-footer {
    height: 60px;
}

.nav-search {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 120px;
}

.nav-search .n-input {
    width: 42%;
    height: 50px;
}
.footer-center{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>