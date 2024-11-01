package _03_extends.exer2;

/**
 * ClassName: Circle
 * Package: _03_extends.exer2
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/11/1 15:40
 * @Version 1.0
 */
public class Circle {
    private double radius;

    public Circle() {
        this.radius = 1;
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    public double getArea() {
        return Math.PI * radius * radius;
    }
}
