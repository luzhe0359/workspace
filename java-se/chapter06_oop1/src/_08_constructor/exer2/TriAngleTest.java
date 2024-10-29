package _08_constructor.exer2;

/**
 * ClassName: TriAngleTest
 * Package: _08_constructor.exer2
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/10/28 11:36
 * @Version 1.0
 */
public class TriAngleTest {
    public static void main(String[] args) {
        // 创建TriAngle实例1
        TriAngle t1 = new TriAngle();
        t1.setBase(1.1);
        t1.setHeight(2.5);

        System.out.println("t1的面积为：" + t1.getArea());

        // 创建TriAngle实例2
        TriAngle t2 = new TriAngle(2.5, 3.0);
        System.out.println("t2的底边长度为：" + t2.getBase());
        System.out.println("t2的高为：" + t2.getHeight());
        System.out.println("t2的面积为：" + t2.getArea());
    }
}
