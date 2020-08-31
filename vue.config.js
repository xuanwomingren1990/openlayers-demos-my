let styleVariables = require('./src/styles/styleVariables.js')
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                // 在scss中使用 scss 全局变量
                // prependData: `@import "~@/styles/index.scss";`

                // 在scss中使用 javaScript 全局变量
                prependData: Object.keys(styleVariables).map(k => `\$${k}: ${styleVariables[k]};`).join('\n')
            }
        }
    },
    devServer: {
        https: false,
        hotOnly: false,
        // host:'0.0.0.0',
        port:8183,
        proxy: { // 配置跨域
            '/geoserver': {
                target: 'http://localhost:8080/',
                changeOrigin: true, //允许跨域
            },
            '/igs': {
                target: 'http://172.17.9.142:6163/',
                changeOrigin: true, //允许跨域
            }
        },
        before: app => {
        }
    }
}
