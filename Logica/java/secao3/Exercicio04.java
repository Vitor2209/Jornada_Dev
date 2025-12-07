package java.secao3;

import java.util.Scanner;

public class Exercicio04 {
    public static void main(String[] args) {
        
        int num1, num2, soma;
        Scanner teclado = new Scanner(System.in);

        System.out.print("Digite o primeiro número inteiro: ");
        num1 = teclado.nextInt();

        System.out.print("Digite o segundo número inteiro: ");
        num2 = teclado.nextInt();

        soma = num1 + num2;
        System.out.println("A soma dos números é: " + soma);
        
        teclado.close();
    }
}
