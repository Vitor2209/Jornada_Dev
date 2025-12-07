package java.secao3;

import java.util.Scanner;

public class Exercicio06 {
    
    public static void main(String[] args) {
        
        float valor_por_horas, salario_mensal;
        int horas_trabalhadas;
        Scanner teclado = new Scanner(System.in);

        System.out.print("Digite o valor que você recebe por hora trabalhada: ");
        valor_por_horas = teclado.nextFloat();

        System.out.print("Digite o número de horas trabalhadas no mês: ");
        horas_trabalhadas = teclado.nextInt();

        salario_mensal = valor_por_horas * horas_trabalhadas;
        System.out.println("O seu salário mensal é: R$ " + salario_mensal);

        teclado.close();
    }
}
