package _07_encapsulation.exer3;

/**
 * ClassName: Employee
 * Package: _07_encapsulation.exer3
 * Description:
 *      案例：普通员工类
 *      （1）声明员工类Employee，
 *      - 包含属性：姓名、性别、年龄、电话，属性私有化
 *      - 提供get/set方法
 *      - 提供String getInfo()方法
 *      （2）在测试类的main中创建员工数组，并从键盘输入员工对象信息，最后遍历输出
 *
 * @Author luzhe0359
 * @Create 2024/10/25 16:50
 * @Version 1.0
 */
public class Employee {
    private String name;
    private char gender;
    private int age;
    private String phone;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getInfo() {
        return "姓名：" + name + "\t性别：" + gender + "\t年龄:" + age + "\t电话：" + phone;
    }
}
