package _08_interface.exer2;

/**
 * ClassName: InterfaceTest
 * Package: _08_interface.exer2
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/11/13 15:58
 * @Version 1.0
 */
public class InterfaceTest {
    public static void main(String[] args) {
        CompareObject c1 = new ComparableCircle(2.5);
        CompareObject c2 = new ComparableCircle(3.3);

        int result = c1.compareTo(c2);
        if (result > 0) {
            System.out.println("c1 is bigger than c2");
        } else if (result < 0) {
            System.out.println("c1 is smaller than c2");
        } else {
            System.out.println("c1 and c2 are equal");
        }
    }
}
