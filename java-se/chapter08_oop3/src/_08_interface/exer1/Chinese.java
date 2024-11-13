package _08_interface.exer1;

/**
 * ClassName: Chinese
 * Package: _08_interface.exer1
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/11/13 15:40
 * @Version 1.0
 */
public class Chinese implements Eatable {
    @Override
    public void eat() {
        System.out.println("中国人使用筷子");
    }
}
