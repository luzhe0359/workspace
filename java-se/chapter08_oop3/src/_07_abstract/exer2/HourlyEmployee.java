package _07_abstract.exer2;

/**
 * ClassName: HourlyEmployee
 * Package: _07_abstract.exer2
 * Description:
 *      private成员变量wage和hour；
 *      提供必要的构造器；
 *      实现父类的抽象方法earnings(),该方法返回wage*hour值；
 *      toString()方法输出员工类型信息及员工的name，number,birthday。
 * @Author luzhe0359
 * @Create 2024/11/13 11:38
 * @Version 1.0
 */
public class HourlyEmployee extends Employee {
    private double wage;
    private int hour;

    public HourlyEmployee() {
    }

    public HourlyEmployee(String name, int number, MyDate birthday, double wage, int hour) {
        super(name, number, birthday);
        this.wage = wage;
        this.hour = hour;
    }

    public double getWage() {
        return wage;
    }

    public void setWage(double wage) {
        this.wage = wage;
    }

    public int getHour() {
        return hour;
    }

    public void setHour(int hour) {
        this.hour = hour;
    }

    @Override
    public double earnings() {
        return wage * hour;
    }

    @Override
    public String toString() {
        return "HourlyEmployee：" +
                super.toString();
    }
}
