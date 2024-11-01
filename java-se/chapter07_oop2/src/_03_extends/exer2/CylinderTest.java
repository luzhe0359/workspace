package _03_extends.exer2;

/**
 * ClassName: CylinderTest
 * Package: _03_extends.exer2
 * Description:
 *      在CylinderTest类中创建Cylinder类的对象，设置圆柱的底面半径和高，并输出圆柱的体积。
 * @Author luzhe0359
 * @Create 2024/11/1 15:43
 * @Version 1.0
 */
public class CylinderTest {
    public static void main(String[] args) {
        Cylinder cy = new Cylinder();

        cy.setRadius(2.1);
        cy.setHeight(3.4);

        System.out.println("圆柱的高度为：" + cy.getHeight());
        System.out.println("圆柱的底面积为：" + cy.getArea());
        System.out.println("圆柱的体积为：" + cy.findVolume());
    }
}
