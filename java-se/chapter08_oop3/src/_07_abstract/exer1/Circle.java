package _07_abstract.exer1;

/**
 * ClassName: Circle
 * Package: _06_polymorphism.exer1
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/11/5 15:43
 * @Version 1.0
 */
public class Circle extends GeometricObject{
    private double radius;

    public Circle(String color, double weight, double radius) {
        super(color, weight);
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    @Override
    public double findArea() {
        return 3.14 * radius * radius;
    }
}
