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
                            <n-button quaternary circle @click="configClickHandler">
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
                                Copyright © 爪哇鸭  ******
                            </span>
                        </a>
                    </div>
                </n-layout-footer>
            </n-layout>

            <n-drawer v-model:show="showConfig" :width="502" placement="right">
                <n-drawer-content title="配置" closable>
                    <n-form
                        ref="formRef"
                        label-width="30vh"
                        :model="configFormValue"
                        :rules="rules"
                    >
                        <n-form-item label="默认搜索引擎: " path="defaultSearchEngine">
                            <n-select
                                v-model:value="configFormValue.defaultSearchEngine"
                                placeholder="请选择默认搜索引擎"
                                :options="options"
                                value-field="key"
                            />
                        </n-form-item>

                        <n-form-item 
                            label="快速访问配置: " 
                            path="quickAccessJson"
                            :validation-status="quickAccessJsonValidationStatus"
                        >
                            <n-input
                                type="textarea"
                                placeholder="请输入快速访问配置"
                                :autosize="{
                                    minRows: 3
                                }"
                                v-model:value="configFormValue.quickAccessJson"
                            />
                        </n-form-item>

                        <n-form-item>
                            <n-button type="warning" @click="revertDefaultConfig">恢复默认配置</n-button>
                        </n-form-item>
                    </n-form>

                    <template #footer>
                        <n-button type="primary" @click="configSaveHandler">保存</n-button>
                    </template>
                </n-drawer-content>
            </n-drawer>
        </div>
        <!-- 导航首页 -->
    </n-config-provider>
</template>

<script setup>
import Components from './Components.vue'
import InputSearch from './InputSearch.vue'
import {darkTheme} from "naive-ui";
import { SettingsOutline } from "@vicons/ionicons5";
import {searchOptions,getCurrentSearchConfig,currentSearchConfig,quickAccessList,getQuickAccessList} from '../data/exportData'
import { ref,onMounted,onBeforeUnmount,reactive,computed } from 'vue'

components: {
    Components,
    InputSearch
}

const theme = ref(null);

const formRef = ref(null);

const options = reactive(searchOptions)

const searchConfig = ref(currentSearchConfig);

//配置表单
const configFormValue = ref({
    defaultSearchEngine: undefined,
    quickAccessJson: undefined,
})

//TODO 校验规则
const rules = {

}

// 用来判断配置抽屉是否打开
const showConfig = ref(false);

const quickAccessJsonValidationStatus = computed(() => {
    if (configFormValue.value.quickAccessJson) {
        try {
            let objArr = JSON.parse(configFormValue.value.quickAccessJson)

            //判断是不是数组
            if (!Array.isArray(objArr)) {
                return 'error';
            }

            //判断数组里面的对象是否符合要求
            for (let i = 0; i < objArr.length; i++) {
                let obj = objArr[i];
                if (!obj.name || !obj.url) {
                    return 'error';
                }
            }
            return 'success';
        } catch (e) {
            return 'error';
        }
    } else {
        return 'success';
    }
});

//回复默认配置方法
const revertDefaultConfig = () => {
    configFormValue.value.defaultSearchEngine = currentSearchConfig.key;
    configFormValue.value.quickAccessJson = JSON.stringify(quickAccessList);
}

//配置保存方法
const configSaveHandler = () => {
    //校验表单
    formRef.value?.validate(err => {
        if(!err){
            //保存数据到localStorage 有效时长为1年
            localStorage.setItem("defaultSearchEngine", configFormValue.value.defaultSearchEngine);
            localStorage.setItem("quickAccessJson", configFormValue.value.quickAccessJson);

            //刷新页面
            location.reload();
        }else{
            console.log("表单验证错误");
        }
    })

    showConfig.value = false;
}

//设置按钮点击事件
const configClickHandler = () => {
    //处理需要回显的数据
    configFormValue.value.defaultSearchEngine = searchConfig.value.key;
    configFormValue.value.quickAccessJson = JSON.stringify(getQuickAccessList());
    showConfig.value = true;
};

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

  searchConfig.value = getCurrentSearchConfig();
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