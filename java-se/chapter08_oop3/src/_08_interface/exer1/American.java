package _08_interface.exer1;

/**
 * ClassName: American
 * Package: _08_interface.exer1
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/11/13 15:41
 * @Version 1.0
 */
public class American implements Eatable {
    @Override
    public void eat() {
        System.out.println("美国人使用刀叉");
    }
}
