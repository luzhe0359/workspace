package _07_encapsulation.exer2;

/**
 * ClassName: BookTest
 * Package: _07_encapsulation.exer2
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/10/25 16:28
 * @Version 1.0
 */
public class BookTest {
    public static void main(String[] args) {
        Book book = new Book();

        book.setBookName("Java 剑来");
        book.setAuthor("Luzhe");
        book.setPrice(99);

        book.showBook();
    }
}
