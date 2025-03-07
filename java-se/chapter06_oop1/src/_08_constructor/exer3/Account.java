package _08_constructor.exer3;

/**
 * ClassName: Account
 * Package: _08_constructor.exer3
 * Description:
 *      1、写一个名为Account的类模拟账户。该类的属性和方法如下图所示。
 *          该类包括的属性：账号id，余额balance，年利率annualInterestRate；
 *          包含的构造器：自定义
 *          包含的方法：访问器方法（getter和setter方法），取款方法withdraw()，存款方法deposit()。
 *
 *          提示：在提款方法withdraw中，需要判断用户余额是否能够满足提款数额的要求，如果不能，应给出提示。
 *
 *      2、创建Customer类。
 *          a. 声明三个私有对象属性：firstName、lastName和account。
 *          b. 声明一个公有构造器，这个构造器带有两个代表对象属性的参数（f和l）
 *          c. 声明两个公有存取器来访问该对象属性，方法getFirstName和getLastName返回相应的属性。
 *          d. 声明setAccount 方法来对account属性赋值。
 *          e. 声明getAccount 方法以获取account属性。
 *
 *      3、写一个测试程序。
 *          （1）创建一个Customer ，名字叫 Jane Smith, 他有一个账号为1000，余额为2000元，年利率为 1.23％ 的账户。
 *          （2）对Jane Smith操作。
 *          存入 100 元，再取出960元。再取出2000元。
 *          打印出Jane Smith 的基本信息：
 *
 *          成功存入 ：100.0
 *          成功取出：960.0
 *          余额不足，取款失败
 *          Customer [Smith, Jane] has a account: id is 1000, annualInterestRate is 1.23％, balance is 1140.0
 *
 * @Author luzhe0359
 * @Create 2024/10/28 11:39
 * @Version 1.0
 */
public class Account {
    private int id;
    private double balance;
    private double annualInterestRate;

    public Account(int i, double b, double a) {
        id = i;
        balance = b;
        annualInterestRate = a;
    }

    public int getId() {
        return id;
    }

    public void setId(int i) {
        id = i;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double b) {
        balance = b;
    }

    public double getAnnualInterestRate() {
        return annualInterestRate;
    }

    public void setAnnualInterestRate(double a) {
        annualInterestRate = a;
    }

    // 取款
    public void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println("成功取出：" + amount + " 余额：" + balance);
        } else {
            System.out.println("余额不足，取款失败！");
        }
    }

    // 存款
    public void deposit(double amount) {
        balance += amount;
        System.out.println("成功存入：" + amount + " 余额：" + balance);
    }
}