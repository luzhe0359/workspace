package _08_constructor.exer2;

/**
 * ClassName: TriAngle
 * Package: _08_constructor.exer2
 * Description:
 *      编写两个类，TriAngle和TriAngleTest，其中TriAngle类中声明私有的底边长base和高height，
 *      同时声明公共方法访问私有变量。此外，提供类必要的构造器。
 *      另一个类中使用这些公共方法，计算三角形的面积。
 * @Author luzhe0359
 * @Create 2024/10/28 11:28
 * @Version 1.0
 */
public class TriAngle {
    private double base;
    private double height;

    public double getBase() {
        return base;
    }

    public void setBase(double b) {
        base = b;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double h) {
        height = h;
    }

    public TriAngle() {}

    public TriAngle(double b, double h) {
        base = b;
        height = h;
    }

    public double getArea() {
        return 0.5 * base * height;
    }
}
