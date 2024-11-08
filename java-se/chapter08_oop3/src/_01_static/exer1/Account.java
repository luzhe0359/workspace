package _01_static.exer1;

/**
 * ClassName: Account
 * Package: _01_static.exer1
 * Description:
 *      编写一个类实现银行账户的概念，包含的属性有“帐号”、“密码”、“存款余额”、“利率”、“最小余额”，
 *      定义封装这些属性的方法。账号要自动生成。
 *
 * @Author luzhe0359
 * @Create 2024/11/8 15:04
 * @Version 1.0
 */
public class Account {
    private int id; // 账号
    private String password; // 密码
    private double balance; // 存款余额
    private static double rate = 0.015; // 利率
    private static int minBalance = 10; // 最小余额
    private static int init = 1000; // 初始账号

    public Account() {
        this.id = init;
        init++;
        password = "123456";
    }

    public Account(String password, double balance) {
        this.password = password;
        this.balance = balance;
        this.id = init;
        init++;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public static double getRate() {
        return rate;
    }

    public static void setRate(double rate) {
        Account.rate = rate;
    }

    public static int getMinBalance() {
        return minBalance;
    }

    public static void setMinBalance(int minBalance) {
        Account.minBalance = minBalance;
    }

    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", password='" + password + '\'' +
                ", balance=" + balance +
                '}';
    }
}
