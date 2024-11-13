package _07_abstract.exer1;

/**
 * ClassName: GeometricTest
 * Package: _06_polymorphism.exer1
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/11/5 15:49
 * @Version 1.0
 */
public class GeometricTest {
    public static void main(String[] args) {
        GeometricTest test = new GeometricTest();

        Circle c1 = new Circle("red", 1.0, 8);
        Circle c2 = new Circle("red", 1.0, 9);

        test.showArea(c1);
        test.showArea(c2);

        boolean isEqual = test.compareArea(c1, c2);
        if (isEqual) {
            System.out.println("面积相等");
        }else {
            System.out.println("面积不相等");
        }

        test.showArea(new MyRectangle("red", 1.0, 10, 10));
    }


    /**
     * 比较两个几何对象的面积是否相等
     *
     * @param g1 第一个几何对象
     * @param g2 第二个几何对象
     * @return 如果两个几何对象的面积相等，则返回true；否则返回false
     */
    public boolean compareArea(GeometricObject g1, GeometricObject g2) {
        return g1.findArea() == g2.findArea();
    }

    /**
     * 显示几何图形的面积
     *
     * @param g 几何对象
     */
    public void showArea(GeometricObject g) {
        System.out.println("几何图形面积为: " + g.findArea());
    }
}
