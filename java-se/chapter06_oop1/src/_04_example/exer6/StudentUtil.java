package _04_example.exer6;

/**
 * ClassName: StudentUtil
 * Package: _04_example.exer6
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/10/16 14:49
 * @Version 1.0
 */
public class StudentUtil {
    //输出指定年级成绩
    public void printStudentWithState(Student[] students, int state){
        for (int i = 0; i < students.length; i++) {
            if (students[i].state == 3) {
                System.out.println("学号:" + students[i].number + "," + "年级:" + students[i].state + "," + "成绩:" + students[i].score);
            }
        }
    }

    //输出所有学生信息
    public void printStudent(Student[] students){
        for (int i = 0; i < students.length; i++) {
            System.out.println(students[i].show());
        }
    }

    //按成绩从低到高排序
    public void sortStudent(Student[] students) {
        for (int i = 0; i < students.length - 1; i++) {
            for (int j = i + 1; j < students.length; j++) {
                if (students[i].score > students[j].score) {
                    Student temp = new Student();
                    temp = students[i];
                    students[i] = students[j];
                    students[j] = temp;
                }
            }
        }
    }
}
