package java.secao3;

import java.util.Scanner;

public class Exercicio05 {
    public static void main(String[] args) {
        
        int metros, centimetros;
        Scanner xuxa = new Scanner(System.in);

        System.out.print("Digite o valor em metros: ");
        metros = xuxa.nextInt();

        centimetros = metros * 100;
        System.out.println(metros + " metros equivalem a " + centimetros + " centímetros.");

        xuxa.close();
    }
}
