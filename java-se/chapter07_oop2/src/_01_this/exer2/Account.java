package _01_this.exer2;

/**
 * ClassName: Account
 * Package: _01_this.exer2
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/10/30 15:06
 * @Version 1.0
 */
public class Account {
    private double balance; // 余额

    public Account(double balance) {
        this.balance = balance;
    }

    public double getBalance() {
        return balance;
    }

    // 存款
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("成功存入:" + amount);
            System.out.println("当前余额为:" + balance);
        }
    }

    // 取款
    public void withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
            System.out.println("成功取出:" + amount);
            System.out.println("当前余额为:" + balance);
        } else {
            System.out.println("余额不足");
        }
    }
}
