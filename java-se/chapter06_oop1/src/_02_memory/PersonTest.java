package _02_memory;

/**
 * ClassName: PersonTest
 * Package: _02_memory
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/10/11 11:25
 * @Version 1.0
 */
public class PersonTest {
    public static void main(String[] args) {
        Person p1 = new Person();
        p1.name = "张三";
        p1.age = 23;
        p1.gender = '男';
        System.out.println("p1 姓名：" + p1.name + ", 年龄：" + p1.age + ", 性别：" + p1.gender);
    }
}
