package _04_example.exer4;

/**
 * ClassName: Array
 * Package: _04_example.exer4
 * Description:
 *      根据上一章数组中的常用算法操作，自定义一个操作int[]的工具类。
 *      涉及到的方法有：求最大值、最小值、总和、平均数、遍历数组、复制数组、数组反转、
 *      数组排序(默认从小到大排序)、查找等
 *
 * @Author luzhe0359
 * @Create 2024/10/16 11:41
 * @Version 1.0
 */
public class Array {
    /**
     * 获取数组中的最大值
     *
     * @param arr 输入的整数数组
     * @return 数组中的最大值
     */
    public int getMax(int[] arr){
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if(arr[i] > max){
                max = arr[i];
            }
        }
        return max;
    }

    /**
     * 获取数组中的最小值
     *
     * @param arr 输入的整数数组
     * @return 数组中的最小值
     */
    public int getMin(int[] arr){
        int min = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if(arr[i] < min){
                min = arr[i];
            }
        }
        return min;
    }
}
