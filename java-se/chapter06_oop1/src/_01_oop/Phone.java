package _01_oop;

/**
 * ClassName: Phone
 * Package: oop
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/10/11 11:00
 * @Version 1.0
 */
public class Phone {
    // 属性
    String name; // 品牌
    double price; // 价格

    // 方法
    public void call(){
        System.out.println("手机能拨打电话");
    }

    public void sendMessage(String message){
        System.out.println("发送信息：" + message);
    }

    public void playGame(){
        System.out.println("手机能玩游戏");
    }
}