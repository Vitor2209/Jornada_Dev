package java.secao3;

import java.util.Scanner;

public class Exercicio07 {
    
    public static void main(String[] args) {
        
        float altura, peso_ideal;
        Scanner teclado = new Scanner(System.in);

        System.out.print("Digite a sua altura em metros (ex: 1.75): ");
        altura = teclado.nextFloat();   

        peso_ideal = (72.7f * altura) - 58;
        System.out.println("O seu peso ideal é: " + peso_ideal + " kg");
        
        teclado.close();
    }
}
