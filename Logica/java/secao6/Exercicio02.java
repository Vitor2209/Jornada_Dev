package java.secao6;

import java.util.Scanner;

public class Exercicio02 {
    
    public static void main(String[] args) {
        int numero, a = 0, b = 0;
        Scanner teclado = new Scanner(System.in);

        System.out.print("Informe um número: ");
        numero = teclado.nextInt();

        if(numero > 0) {
            a = numero;   
        } else {
            b = numero;
        }

        System.out.println("a = " + a);
        System.out.println("b = " + b);

        teclado.close();
    }
}

