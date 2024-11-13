package _08_interface.exer2;

/**
 * ClassName: CompareObject
 * Package: _08_interface.exer2
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/11/13 15:53
 * @Version 1.0
 */
public interface CompareObject {
    //若返回值是 0 , 代表相等; 若为正数，代表当前对象大；负数代表当前对象小
    public int compareTo(Object o);
}
