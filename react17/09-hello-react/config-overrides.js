/*
 * @Description: 
 * @Author: zugelu
 * @Date: 2021-08-04 14:17:58
 * @LastEditors: zugelu
 * @LastEditTime: 2021-08-04 14:40:00
 */
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#ccc' },
        }
    }),

);