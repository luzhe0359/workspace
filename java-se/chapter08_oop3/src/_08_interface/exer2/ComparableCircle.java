package _08_interface.exer2;

/**
 * ClassName: ComparableCircle
 * Package: _08_interface.exer2
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/11/13 15:55
 * @Version 1.0
 */
public class ComparableCircle extends Circle implements CompareObject {
    public ComparableCircle() {
    }

    public ComparableCircle(double radius) {
        super(radius);
    }

    //根据对象的半径的大小，比较对象的大小
    @Override
    public int compareTo(Object o) {
        if (this == o) {
            return 0;
        } else if (o instanceof ComparableCircle) {
            ComparableCircle c = (ComparableCircle) o;
            // 写法1
//            if (this.getRadius() > c.getRadius()) {
//                return 1;
//            } else if (this.getRadius() < c.getRadius()) {
//                return -1;
//            } else {
//                return 0;
//            }
            // 写法2
            return Double.compare(this.getRadius(), c.getRadius());
        } else {
            return 2; //如果输入的类型不匹配，则返回2
//            throw new RuntimeException("传入的数据类型不匹配");
        }
    }
}
