/*

��������������String������

һ������String�����
1. String�࣬���������������ͣ��׳��ַ�����
2. String���͵ı���������ʹ��һ��""�ķ�ʽ���и�ֵ��
3. String�������ַ����ڲ������԰���0����1�������ַ���

����String������������ͱ����������
1. ����Ļ����������Ͱ���boolean���ڵ�8�֡�
2. String������������ͱ�����ֻ�����������㣬ʹ��"+"��ʾ��
3. ����Ľ����String���͡�

*/
class StringTest {
	public static void main(String[] args) {
		String str1 = "Hello World!";
		System.out.println("str1");
		System.out.println(str1);


		String str2 = ""; 
		String str3 = "a";//char c1 = 'a';


		//������������
		int num1 = 10;
		boolean b1 = true;
		String str4 = "hello";

		System.out.println(str4 + b1);

		String str5 = str4 + b1;
		String str6 = str4 + b1 + num1;
		System.out.println(str6);//hellotrue10
		
		//˼�������µ�����������ͨ���𣿲���
		//String str7 = b1 + num1 + str4;

		//��ν�String���͵ı���ת��Ϊ�����������ͣ�
		String str8 = "abc";//���ܿ���ת��Ϊ�����������͵ġ�

		int num2 = 10;
		String str9 = num2 + ""; //"10"
		//���벻ͨ��
		//int num3 = (int)str9;

		//���ʵ���أ�ʹ��Integer�ࡣ��ʱ����˽⡣
		int num3 = Integer.parseInt(str9);
		System.out.println(num3 + 1);
		
	}
}
