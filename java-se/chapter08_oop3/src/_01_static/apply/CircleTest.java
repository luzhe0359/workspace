package _01_static.apply;

/**
 * ClassName: CircleTest
 * Package: _01_static.apply
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/11/8 14:50
 * @Version 1.0
 */
public class CircleTest {
    public static void main(String[] args) {
        Circle c1 = new Circle();
        System.out.println(c1);

        Circle c2 = new Circle();
        System.out.println(c2);

        Circle c3 = new Circle(3.0);
        System.out.println(c3);

        System.out.println(Circle.total);
    }
}

class Circle {
    double radius;

    int id; // 编号

    static int total; // 个数

    static int init = 100; // 自增id初始值

    public Circle() {
        this.id = init;
        init++;
        total++;
    }

    public Circle(double radius) {
        this();
        this.radius = radius;
    }

    @Override
    public String toString() {
        return "Circle{" +
                "radius=" + radius +
                ", id=" + id +
                '}';
    }
}