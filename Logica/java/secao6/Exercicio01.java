package java.secao6;

import java.util.Scanner;

public class Exercicio01 {
    
    public static void main(String[] args) {
        
        int n;
        Scanner teclado = new Scanner(System.in);

        n = teclado.nextInt();

        if (n > 100) {
            System.out.println("Número maior que 100");
        } else {
            System.out.println("Número menor ou igual a 100");
        }

        teclado.close();

    }
}
