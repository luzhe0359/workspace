/*
 * @Description:
 * @Author: zugelu
 * @Date: 2021-07-19 16:48:24
 * @LastEditors: zugelu
 * @LastEditTime: 2021-07-19 17:07:16
 */
import { ref } from "vue";
import axios from "axios"
export default function useRequest<T> (url: string) {

    const result = ref<T | null>(null);
    const loading = ref(true)
    const errMsg = ref('')

    axios.get(url).then(res => {
        // 关闭加载
        loading.value = false;
        result.value = res.data
    }).catch(err => {
        loading.value = false;
        errMsg.value = err.message || '未知错误'
    })

    return {
        loading,
        result,
        errMsg,
    }
}