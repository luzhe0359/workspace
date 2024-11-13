package _08_interface.exer2;

/**
 * ClassName: Circle
 * Package: _08_interface.exer2
 * Description:
 *      定义一个Circle类，声明radius属性，提供getter和setter方法
 * @Author luzhe0359
 * @Create 2024/11/13 15:53
 * @Version 1.0
 */
public class Circle {
    public double radius;

    public Circle() {
    }

    public Circle(double radius) {
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    @Override
    public String toString() {
        return "Circle{" +
                "radius=" + radius +
                '}';
    }
}
