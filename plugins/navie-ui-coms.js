/**
 * @name naive-ui.js
 * @description navie-ui 按需引入插件
 */
import {
    create,
    NButton,
    NInput,
    NIcon,
    NGrid,
    NGridItem,
    NGi,
    NLayout,
    NCard,
    NImage,
    NLayoutHeader,
    NLayoutSider,
    NLayoutContent,
    NLayoutFooter,
    NGradientText,
    NSelect,
    NDropdown
  } from 'naive-ui'

  const naive = create({
    components: [
        NButton,NInput,NIcon,NGrid,
        NGi,NGridItem,NLayout,NCard,
        NLayoutHeader,NLayoutSider,
        NLayoutContent,NLayoutFooter,
        NImage,NGradientText,NSelect,
        NDropdown
        
    ]
  })
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(naive)
});