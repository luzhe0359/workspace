package _04_example.exer6;

/**
 * ClassName: StudentTest
 * Package: _04_example.exer5
 * Description:
 *      创建20个学生对象，学号为1到20，年级和成绩都由随机数确定。
 *      问题一：打印出3年级(state值为3）的学生信息。
 *      问题二：使用冒泡排序按学生成绩排序，并遍历所有学生信息
 *
 * @Author luzhe0359
 * @Create 2024/10/16 14:18
 * @Version 1.0
 */
public class StudentTest {
    public static void main(String[] args) {

        //创建Student
        Student[] students = new Student[20];

        //赋值
        for (int i = 0; i < students.length; i++) {
            students[i] = new Student();

            //学号
            students[i].number = i + 1;
            //年级
            students[i].state = (int)(Math.random() * 6 + 1);
            //成绩
            students[i].score = (int)(Math.random() * 101);
        }

        //工具类
        StudentUtil util = new StudentUtil();

        //问题一：打印出3年级(state值为3）的学生信息。
        util.printStudentWithState(students, 3);

        System.out.println("排序前--------------------------------");
        //输出成绩
        util.printStudent(students);

        //问题二：使用冒泡排序按学生成绩排序，并遍历所有学生信息
        //冒泡排序
        util.sortStudent(students);

        System.out.println("排序后--------------------------------");
        //输出成绩
        util.printStudent(students);
    }
}
