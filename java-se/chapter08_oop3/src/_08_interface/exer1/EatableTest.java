package _08_interface.exer1;

/**
 * ClassName: EatableTest
 * Package: _08_interface.exer1
 * Description:
 *      创建Eatable数组，存储各国人对象，并遍历数组，调用eat()方法
 * @Author luzhe0359
 * @Create 2024/11/13 15:43
 * @Version 1.0
 */
public class EatableTest {
    public static void main(String[] args) {
        Eatable[] eatables = new Eatable[3];
        eatables[0] = new Chinese();
        eatables[1] = new American();
        eatables[2] = new Indian();

        for (int i = 0; i < eatables.length; i++) {
            eatables[i].eat();
        }
    }
}
