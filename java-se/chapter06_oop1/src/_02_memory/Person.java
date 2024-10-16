package _02_memory;

/**
 * ClassName: Person
 * Package: _02_memory
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/10/11 11:25
 * @Version 1.0
 */
public class Person {
    // 属性
    String name; // 名字
    int age; // 年龄
    char gender; // 性别

    // 方法
    public void eat() {
        System.out.println("人必须吃饭");
    }
    public void sleep(int hour) {
        System.out.println("健康睡眠应保证每天睡" + hour + "小时");
    }
    public void interests(String hobby) {
        System.out.println("我的爱好是：" + hobby);
    }
}
