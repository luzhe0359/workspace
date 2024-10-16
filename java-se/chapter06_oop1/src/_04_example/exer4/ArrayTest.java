package _04_example.exer4;

/**
 * ClassName: ArrayTest
 * Package: _04_example.exer4
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/10/16 11:43
 * @Version 1.0
 */
public class ArrayTest {
    public static void main(String[] args) {
        Array arrs = new Array();
        int[] arr = new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

        System.out.println("最大值 => " + arrs.getMax(arr));
        System.out.println("最小值 => " + arrs.getMin(arr));
    }
}
