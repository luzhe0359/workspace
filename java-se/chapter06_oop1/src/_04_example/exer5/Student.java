package _04_example.exer5;

/**
 * ClassName: Student
 * Package: _04_example.exer5
 * Description:
 *      定义类Student，包含三个属性：学号number(int)，年级state(int)，成绩score(int)。
 *
 * @Author luzhe0359
 * @Create 2024/10/16 14:10
 * @Version 1.0
 */
public class Student {

    int number; //学号
    int state; //年级
    int score; //成绩

    public String show() {
        return "学号:" + number + ",年级:" + state + ",成绩:" + score;
    }
}
