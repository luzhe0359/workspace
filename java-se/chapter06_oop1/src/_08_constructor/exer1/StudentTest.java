package _08_constructor.exer1;

/**
 * ClassName: StudentTest
 * Package: _08_constructor.exer1
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/10/28 11:24
 * @Version 1.0
 */
public class StudentTest {
    public static void main(String[] args) {
        Student s1 = new Student("张三", 26, "北京大学", "计算机");
        System.out.println(s1.getInfo());

        Student s2 = new Student("李四", 25, "清华大学" );
        System.out.println(s2.getInfo());
    }
}
