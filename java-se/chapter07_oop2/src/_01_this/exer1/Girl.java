package _01_this.exer1;

/**
 * ClassName: Girl
 * Package: _01_this.exer1
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/10/30 11:53
 * @Version 1.0
 */
public class Girl {
    private String name;
    private int age;

    public Girl() {
    }

    public Girl(String name, int age) {
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

    public void marry(Boy boy) {
        System.out.println("我想嫁给 " + boy.getName());

        boy.marry(this);
    }

    public int compare(Girl girl) {
        return this.age - girl.getAge();
    }
}
