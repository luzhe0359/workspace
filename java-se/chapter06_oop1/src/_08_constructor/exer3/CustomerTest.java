package _08_constructor.exer3;

/**
 * ClassName: CustomerTest
 * Package: _08_constructor.exer3
 * Description:
 *      （1）创建一个Customer ，名字叫 Jane Smith, 他有一个账号为1000，余额为2000元，年利率为 1.23％ 的账户。
 *      （2）对Jane Smith操作。
 *          存入 100 元，再取出960元。再取出2000元。
 *          打印出Jane Smith 的基本信息：
 * @Author luzhe0359
 * @Create 2024/10/28 14:57
 * @Version 1.0
 */
public class CustomerTest {
    public static void main(String[] args) {
        // 创建客户Customer实例
        Customer cust = new Customer("Jane", "Smith");

        // 创建账户Account实例
        Account acct = new Account(1000, 2000, 0.0123);
        cust.setAccount(acct);

        // 针对于客户的账户进行取钱、存钱的操作
        cust.getAccount().deposit(100);
        cust.getAccount().withdraw(1000);
        cust.getAccount().withdraw(2000);

        System.out.println("Customer [" + cust.getFirstName() + "," + cust.getLastName() + "] has a account: id is"
                + cust.getAccount().getId() + ", annualInterestRate is" + cust.getAccount().getAnnualInterestRate()
                + ", balance is" + cust.getAccount().getBalance());
    }
}
