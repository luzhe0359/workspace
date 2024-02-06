/*
 * @Description: 
 * @Author: zugelu
 * @Date: 2021-07-19 16:19:25
 * @LastEditors: zugelu
 * @LastEditTime: 2021-07-19 16:21:34
 */
import {
    ref,
    onMounted,
    onBeforeUnmount,
} from "vue";
export default function () {
    const x = ref(-1);
    const y = ref(-1);

    const clickHandler = (event: MouseEvent) => {
        x.value = event.pageX;
        y.value = event.pageY;
    };
    onMounted(() => {
        window.addEventListener("click", clickHandler);
    });
    onBeforeUnmount(() => {
        window.removeEventListener("click", clickHandler);
    });

    return {
        x, y
    }
}