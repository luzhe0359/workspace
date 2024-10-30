package _01_this.exer1;

/**
 * ClassName: BoyGirlTest
 * Package: _01_this.exer1
 * Description:
 *      根据图示，添加必要的构造器，综合应用构造器的重载，this关键字。
 *
 * @Author luzhe0359
 * @Create 2024/10/30 11:49
 * @Version 1.0
 */
public class BoyGirlTest {
    public static void main(String[] args) {
        Boy boy1 = new Boy("Tom", 28);
        Girl girl1 = new Girl("Lily", 20);

        boy1.shout();

        girl1.marry(boy1);

        Girl girl2 = new Girl("Lucy", 18);

        System.out.println(girl1.getName() + girl1.getAge());
        System.out.println(girl2.getName() + girl2.getAge());

        int compare = girl1.compare(girl2);
        if(compare > 0) {
            System.out.println(girl1.getName() + "比" + girl2.getName() + "大" );
        } else if(compare < 0) {
            System.out.println(girl1.getName() + "比" + girl2.getName() + "小");
        } else {
            System.out.println(girl1.getName() + "和" + girl2.getName() + "一样大");
        }
    }
}
