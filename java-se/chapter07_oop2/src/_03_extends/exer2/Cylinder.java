package _03_extends.exer2;

/**
 * ClassName: Cylinder
 * Package: _03_extends.exer2
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/11/1 15:41
 * @Version 1.0
 */
public class Cylinder extends Circle {
    private double height;

    public Cylinder() {
        this.height = 1;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    // 求圆柱的体积
    public double findVolume() {
//        return Math.PI * getRadius() * getRadius() * getHeight();
        return super.getArea() * getHeight();
    }
}
