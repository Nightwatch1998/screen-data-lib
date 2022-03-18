const path = require('path')
//将第三方模块与本地模块进行混合打包,解决依赖安装问题
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')

const inputPath = path.resolve(__dirname,'./src/index.js')
const outputUmdPath = path.resolve(__dirname,'./dist/imooc.datav.js')
const outputEsPath = path.resolve(__dirname,'./dist/imooc.datav.es.js')



module.exports = {
    input: inputPath,
    output:[{
        file:outputUmdPath,
        format:'umd',
        name:'imoocDatav',
        globals:{
            'vue':'vue',
        }
    }],
    plugins:[
        //有顺序,vue要在前面调用
        vue(),
        resolve(),
        commonjs(),
        babel({
            exclude:'node_modules/**',
            runtimeHelpers:true,
            plugins:[
                [
                    '@babel/transform-runtime',{
                        regenerator:true
                    }
                ]
            ]
        }),
        json(),
        postcss({
            plugins:[]
        })
    ],
    external:['vue']
}