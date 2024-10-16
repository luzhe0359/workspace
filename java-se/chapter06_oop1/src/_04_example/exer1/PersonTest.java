package _04_example.exer1;

/**
 * ClassName: PersonText
 * Package: _04_example.exer1
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/10/16 10:07
 * @Version 1.0
 */
public class PersonTest {
    public static void main(String[] args) {
        Person p1 = new Person();
        p1.name = "Tom";
        p1.age = 18;
        p1.gender = '男';

        p1.study();
        p1.addAge(6);

        int age = p1.showAge();
        System.out.println("age =>" + age);

        Person p2 = new Person();
        System.out.println(p2.age); // 0

        p2.addAge(2);
        System.out.println("p1的年龄是："+p1.showAge()); // 24
        System.out.println("p2的年龄是："+p2.showAge()); // 2
    }
}
