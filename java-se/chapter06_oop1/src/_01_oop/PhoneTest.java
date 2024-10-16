package _01_oop;

/**
 * ClassName: PhoneTest
 * Package: oop
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/10/11 11:15
 * @Version 1.0
 */
public class PhoneTest {
    public static void main(String[] args) {
        // 创建Phone对象
        Phone p1 = new Phone();
        // 给属性赋值
        p1.name = "小米";
        p1.price = 3999;

        System.out.println("name=" + p1.name + ", price=" + p1.price);

        // 调用方法
        p1.call();
        p1.sendMessage("无人扶我青云志，我自踏雪至山巅！");
        p1.playGame();
    }
}
