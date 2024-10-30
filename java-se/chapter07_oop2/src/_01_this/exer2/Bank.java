package _01_this.exer2;

/**
 * ClassName: Bank
 * Package: _01_this.exer2
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/10/30 15:10
 * @Version 1.0
 */
public class Bank {
    private Customer[] customer; // 客户列表
    private int numberOfCustomer; // 客户数量

    public Bank(int size) {
        this.customer = new Customer[size]; // 初始化客户列表
    }

    /**
     * 向客户列表中添加一个新的客户
     *
     * @param f 客户的姓氏
     * @param l 客户的名字
     */
    public void addCustomer(String f, String l) {
        Customer cust = new Customer(f, l);
//        customers[numberOfCustomer] = cust;
//        numberOfCustomer++;
        this.customer[numberOfCustomer++] = cust;
    }

    public int getNumOfCustomers() {
        return this.numberOfCustomer;
    }
    
    /**
     * 根据索引获取客户信息
     *
     * @param index 客户的索引
     * @return 返回指定索引的客户对象，如果索引越界则返回null
     */
    public Customer getCustomer(int index) {
        if (index >= 0 && index < this.numberOfCustomer) {
            return this.customer[index];
        }
        return null;
    }
}
