package java.secao6;

import java.util.Scanner;

public class Exercicio02 {
    
    public static void main(String[] args) {
        int numero, a, b;
        Scanner teclado = new Scanner(System.in);

        System.out.print("Informe um nuero: ");
        numero = teclado.nextInt();

        if(numero > 0) {
            a = numero;   
        } else {
            b = numero;
        }

        System.out.println(numero);
        teclado.close();
    }
}
