package _01_static.exer1;

/**
 * ClassName: AccountTest
 * Package: _01_static.exer1
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/11/8 15:07
 * @Version 1.0
 */
public class AccountTest {
    public static void main(String[] args) {
        Account a1 = new Account();
        System.out.println(a1);

        Account a2 = new Account("888888", 200);
        System.out.println(a2);

        Account.setMinBalance(100);
        Account.setRate(0.01);

        System.out.println("银行存款的利率为：" +Account.getRate());
        System.out.println("银行最小存款额度为：" + Account.getMinBalance());
    }
}
