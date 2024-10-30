package _01_this.exer2;

/**
 * ClassName: Customer
 * Package: _01_this.exer2
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/10/30 15:08
 * @Version 1.0
 */
public class Customer {
    private String firstName; // 名
    private String lastName; // 姓

    private Account account; // 账户

    public Customer(String f, String l) {
        this.firstName = f;
        this.lastName = l;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }
}
