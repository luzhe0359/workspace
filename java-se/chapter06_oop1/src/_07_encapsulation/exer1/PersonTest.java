package _07_encapsulation.exer1;

/**
 * ClassName: PersonTest
 * Package: _07_encapsulation.exer1
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/10/25 16:24
 * @Version 1.0
 */
public class PersonTest {
    public static void main(String[] args) {
        Person person = new Person();

//        person.age = 18; // 编译不通过
        person.setAge(-20);
        System.out.println("年龄为：" + person.getAge());

        person.setAge(18);
        System.out.println("年龄为：" + person.getAge());
    }
}
