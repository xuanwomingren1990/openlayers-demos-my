// 导入单个组件
import {registerAnimation} from './functions'
import {hide} from './directives'
import {styleVariables} from "./variables";
import {MarkDownContainer} from './components'

// 以数组的结构保存组件，便于遍历
const plugins = [
    /*--------方法--------*/
    registerAnimation,
    /*------ -指令---------*/
    hide,
    /*------- 变量---------*/
    styleVariables,
    /*--------组件--------*/
    MarkDownContainer
]

// 定义 install 方法
const install = function (Vue) {
    if (install.installed) return
    install.installed = true
    // 遍历并注册插件
    plugins.map(plugin=>{
        Vue.use(plugin)
    })
}

/**
 * 便于整体引入插件
 * 导出的对象必须具备一个 install 方法
 */
export default {
    install
}

/**
 * 便于按需引入插件
 */
export {
    /*--------方法--------*/
    registerAnimation,
    /*------ -指令---------*/
    hide,
    /*------- 变量---------*/
    styleVariables,
    /*--------组件--------*/
    MarkDownContainer
}
