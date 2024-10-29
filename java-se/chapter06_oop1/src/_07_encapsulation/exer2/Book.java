package _07_encapsulation.exer2;

/**
 * ClassName: Book
 * Package: _07_encapsulation.exer2
 * Description:
 *      案例：自定义图书类
 *
 *      设定属性包括：
 *      书名bookName，
 *      作者author，
 *      价格price；
 *
 *      方法包括：
 *      相应属性的get/set方法，
 *      图书信息介绍等。
 *
 * @Author luzhe0359
 * @Create 2024/10/25 16:26
 * @Version 1.0
 */
public class Book {
    private String bookName;
    private String author;
    private double price;

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        if (price < 0){
            System.out.println("价格输入有误，请重新输入");
        }else{
            this.price = price;
        }
    }

    public void showBook(){
        System.out.println("书名：" + bookName);
        System.out.println("作者：" + author);
        System.out.println("价格：" + price);
    }
}
