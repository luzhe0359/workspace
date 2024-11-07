package _03_extends.exer1;

/**
 * ClassName: ManKind
 * Package: _03_extends.exer1
 * Description:
 *
 * @Author luzhe0359
 * @Create 2024/11/1 15:15
 * @Version 1.0
 */
public class ManKind {
    private int sex;
    private int salary;

    public ManKind() {
    }

    public ManKind(int sex, int salary) {
        this.sex = sex;
        this.salary = salary;
    }

    public int getSex() {
        return sex;
    }

    public void setSex(int sex) {
        this.sex = sex;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    public void manOrWoman(){
        if(sex==1){
            System.out.println("Man");
        }else{
            System.out.println("Woman");
        }
    }

    public void employeed() {
        if(salary == 0){
            System.out.println("no job");
        }else{
            System.out.println("job!!");
        }
    }
}
