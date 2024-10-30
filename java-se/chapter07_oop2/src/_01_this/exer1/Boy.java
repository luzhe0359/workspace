package _01_this.exer1;

/**
 * ClassName: Boy
 * Package: _01_this.exer1
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/10/30 11:51
 * @Version 1.0
 */
public class Boy {
    private String name;
    private int age;

    public Boy() {
    }

    public Boy(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void marry(Girl girl) {
        System.out.println("我准备娶 " + girl.getName());
    }

    public void shout() {
        if(this.age >= 22) {
            System.out.println("我可以结婚了!");
        }else {
            System.out.println("我只能恋爱了!");
        }
    }
}
