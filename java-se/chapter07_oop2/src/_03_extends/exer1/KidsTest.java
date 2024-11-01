package _03_extends.exer1;

/**
 * ClassName: KidsTest
 * Package: _03_extends.exer1
 * Description:
 *      (1)定义一个ManKind类，包括
 *          - 成员变量int sex和int salary；
 *          - 方法void manOrWoman()：根据sex的值显示“man”(sex==1)或者“woman”(sex==0)；
 *          - 方法void employeed()：根据salary的值显示“no job”(salary==0)或者“ job”(salary!=0)。
 *
 *      (2)定义类Kids继承ManKind，并包括
 *          - 成员变量int yearsOld；
 *          - 方法printAge()打印yearsOld的值。
 *
 *      (3)定义类KidsTest，在类的main方法中实例化Kids的对象someKid，用该对象访问其父类的成员变量及方法。
 *
 * @Author luzhe0359
 * @Create 2024/11/1 15:15
 * @Version 1.0
 */
public class KidsTest {
    public static void main(String[] args) {
        Kids kid = new Kids();

        kid.setSex(1);
        kid.setSalary(100);
        kid.setYearsOld(18);

        // 调用父类的成员方法
        kid.employeed();
        kid.manOrWoman();

        // 调用类自己的方法
        kid.printAge();
    }
}
