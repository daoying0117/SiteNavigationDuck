const searchEngines = [
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
]

const searchOptions = [
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
        key: "https://www.bing.com/search?q=",
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
]

const quickAccessList = [
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

const currentSearchConfig = {
    label: "谷歌",
    key: "https://www.google.com/search?q=",
    icon: "https://www.google.com/favicon.ico",
}

function getCurrentSearchConfig() {
    let result = currentSearchConfig;
    //从cookie中获取defaultSearchEngine
    if (typeof window !== 'undefined') {
        let key = localStorage.getItem("defaultSearchEngine")
        if (key) {
            let searchConfig = searchEngines.find(item => item.key == key)
            if (searchConfig) {
                result = searchConfig;
            }
        }
    }
    return result;
}

function getQuickAccessList() {
    let result = quickAccessList;
    //从cookie中获取defaultSearchEngine
    if (typeof window !== 'undefined') {
        let key = localStorage.getItem("quickAccessJson")
        if (key) {
            if (typeof key === 'string') {
                try {
                    let objArr = JSON.parse(key);
                    if (typeof objArr === "object" && objArr.length > 0) {
                        let flag = true;
                        //判断数据类型
                        objArr.forEach(item => {
                            if (typeof item === 'object') {
                                if (!item.name || !item.url) {
                                    flag = false
                                }
                            }
                        })
                        if (flag) {
                            result = objArr;
                        }
                    }
                } catch (e) {
                    result = quickAccessList;
                }
            }
        }
    }
    return result;
}

export { searchEngines, searchOptions, currentSearchConfig, quickAccessList, getCurrentSearchConfig, getQuickAccessList }