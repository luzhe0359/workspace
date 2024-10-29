package _08_constructor.exer3;

/**
 * ClassName: Customer
 * Package: _08_constructor.exer3
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/10/28 11:43
 * @Version 1.0
 */
public class Customer {
    private String firstName;
    private String lastName;
    private Account account;

    public Customer(String f, String l) {
        firstName = f;
        lastName = l;
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

    public void setAccount(Account a) {
        account = a;
    }
}
