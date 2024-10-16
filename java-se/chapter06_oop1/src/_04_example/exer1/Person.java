package _04_example.exer1;

/**
 * ClassName: Person
 * Package: _04_example.exer1
 * Description:
 * 创建Person类的对象，设置该对象的name、age和gender属性，
 * 调用study方法，输出字符串“studying”;
 * 调用showAge()方法，返回age值;
 * 调用addAge(int addAge)方法给对象的age属性值增加addAge岁。比如：2岁。
 *
 * @Author luzhe0359
 * @Create 2024/10/16 10:04
 * @Version 1.0
 */
public class Person {
    String name;
    int age;
    char gender;

    public void study() {
        System.out.println("studying");
    }

    public int showAge() {
        return age;
    }

    public void addAge(int addAge) {
        age += addAge;
    }
}
