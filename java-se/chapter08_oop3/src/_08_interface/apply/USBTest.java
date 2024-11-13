package _08_interface.apply;

/**
 * ClassName: USBTest
 * Package: _08_interface.apply
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/11/13 15:15
 * @Version 1.0
 */
public class USBTest {
    public static void main(String[] args) {

        // 1.创建接口实现类的对象
        Computer computer = new Computer();
        Printer printer = new Printer();

        computer.transferData(printer);
        System.out.println("-----------------------------");

        // 2.创建接口实现类的匿名对象
        computer.transferData(new Camera());
        System.out.println("-----------------------------");

        // 3.创建接口匿名实现类的对象
        USB usb = new USB(){

            @Override
            public void start() {
                System.out.println("U盘初始化中");
            }

            @Override
            public void stop() {
                System.out.println("U盘关闭中");
            }
        };
        computer.transferData(usb);
        System.out.println("-----------------------------");

        // 4.创建接口匿名实现类的匿名对象
        computer.transferData(new USB(){
            @Override
            public void start() {
                System.out.println("U盘初始化中...");
            }

            @Override
            public void stop() {
                System.out.println("U盘关闭中...");
            }
        });
    }
}

class Computer {
    public void transferData(USB usb) {
        System.out.println("设备连接成功");
        usb.start();

        System.out.println("传输数据中....");
        usb.stop();
    }
}

class Printer implements USB {

    @Override
    public void start() {
        System.out.println("打印机开始工作...");
    }

    @Override
    public void stop() {
        System.out.println("打印机停止工作...");
    }
}

class Camera implements USB {
    @Override
    public void start() {
        System.out.println("照相机开始工作...");
    }

    @Override
    public void stop() {
        System.out.println("照相机停止工作...");
    }
}

interface USB {
    //声明常量
    //USB的长、宽、高、...

    //方法
    public abstract void start();
    void stop();
}