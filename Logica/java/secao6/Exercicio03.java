package java.secao6;

import java.util.Scanner;

public class Exercicio03 {
    
    public static void main(String[] args) {
        int numero, p, i = 0;
        Scanner teclado = new Scanner(System.in);

        System.out.print("Informe um número inteiro: ");
        numero = teclado.nextInt();

        if(numero % 2 == 0) {
            p = numero;
            System.out.println("O número " + p + " é par.");
        } else {
            i = numero;
            System.out.println("O número " + i + " é ímpar.");
        }
        teclado.close();
    }
}
