package _07_encapsulation.exer1;

/**
 * ClassName: Person
 * Package: _07_encapsulation
 * Description:
 *      案例：
 *      创建程序,在其中定义两个类：Person和PersonTest类。定义如下：
 *      用setAge()设置人的合法年龄(0~130)，用getAge()返回人的年龄。
 *      在PersonTest类中实例化Person类的对象b，调用setAge()和getAge()方法，体会Java的封装性。
 *
 * @Author luzhe0359
 * @Create 2024/10/25 16:22
 * @Version 1.0
 */
public class Person {
    private int age;

    public void setAge(int a) {
        if (a < 0 || a > 130) {
            System.out.println("输入的年龄不合法");
        } else {
            this.age = a;
        }
    }

    public int getAge() {
        return this.age;
    }
}
