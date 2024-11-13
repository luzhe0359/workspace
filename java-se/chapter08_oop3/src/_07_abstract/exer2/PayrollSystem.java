package _07_abstract.exer2;

import java.util.Scanner;

/**
 * ClassName: PayrollSystem
 * Package: _07_abstract.exer2
 * Description:
 *      定义PayrollSystem类，创建Employee变量数组并初始化，该数组存放各类雇员对象的引用。
 *      利用循环结构遍历数组元素，输出各个对象的类型,name,number,birthday,以及该对象生日。
 *      当键盘输入本月月份值时，如果本月是某个Employee对象的生日，还要输出增加工资信息。
 * @Author luzhe0359
 * @Create 2024/11/13 11:41
 * @Version 1.0
 */
public class PayrollSystem {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        Employee[] emps = new Employee[2];

        emps[0] = new SalariedEmployee("张三", 5001, new MyDate(1996, 1, 1), 18000);
        emps[1] = new HourlyEmployee("李四", 5002, new MyDate(1997, 2, 2), 240, 100);

        System.out.println("请输入本月月份：");
        int month = input.nextInt();

        for (int i = 0; i < emps.length; i++) {
            System.out.println(emps[i].toString());
            System.out.println("工资为：" + emps[i].earnings() + "元");

            if (emps[i].getBirthday().getMonth() == month) {
                System.out.println("恭喜" + emps[i].getName() + "生日快乐! 奖励100块~");
            }
        }

        input.close();
    }
}
