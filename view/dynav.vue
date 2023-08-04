<template>
    <div>
        <div>
            <n-layout>
                <n-layout has-sider>
                    <n-layout-sider content-style="padding: 24px;">
                        <div class="nav-icon">
                            <n-image src="/img/javacat.png" :preview-disabled="true" />
                        </div>
                    </n-layout-sider>

                    <n-layout-header></n-layout-header>

                </n-layout>

                <n-layout-content>
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

    </div>
</template>

<script setup>
import Components from './Components.vue'
import InputSearch from './InputSearch.vue'

components: {
    Components,
    InputSearch
}
</script>

<style>
.nav-icon {
    width: 80px;
    height: 80px;
}
.nav-icon .n-image {
    height: 100px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
}

.n-input .n-input__input-el  {
    height: 50px;
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
    height: 60px;
}
.n-layout .n-layout-scroll-container{
    overflow: hidden;
}


</style>