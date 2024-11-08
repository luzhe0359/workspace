package _01_static;

/**
 * ClassName: ChineseTest
 * Package: _01_static
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/11/8 14:22
 * @Version 1.0
 */
public class ChineseTest {
    public static void main(String[] args) {
        System.out.println(Chinese.country); // 中国

        Chinese c1 = new Chinese();
        c1.name = "张三";
        c1.age = 18;
        c1.country = "China";

        Chinese c2 = new Chinese();
        c2.name = "李四";
        c2.age = 20;

        System.out.println(c1);
        System.out.println(c2);

        System.out.println(c1.country); // China
        System.out.println(c2.country); // China

        c2.country = "CHN";

        System.out.println(c1.country); // CHN
        System.out.println(c2.country); // CHN
    }
}

class Chinese {
    // 非静态变量、实例变量
    String name;
    int age;

    // 静态变量、类变量
    static String country = "中国";

    @Override
    public String toString() {
        return "Chinese{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}