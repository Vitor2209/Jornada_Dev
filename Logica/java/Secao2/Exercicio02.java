package java.Secao2;
import java.util.Scanner;

public class Exercicio02 {

    int num1;
    int num2;
    int soma;
    int multiplicacao;
    Scanner teclado;

    public Exercicio02() {
        this.teclado = new Scanner(System.in);
    }

    public void lerNumeros() {
        System.out.print("Digite o primeiro número inteiro: ");
        this.num1 = teclado.nextInt();

        System.out.print("Digite o segundo número inteiro: ");
        this.num2 = teclado.nextInt();
    }

    public void calcularSoma() {
        this.soma = this.num1 + this.num2;
        System.out.println("A soma dos números é: " + this.soma);
    }

    public void calcularMultiplicacao() {
        this.multiplicacao = this.num1 * this.num2;
        System.out.println("A multiplicação dos números é: " + this.multiplicacao);
    }

    public static void main(String[] args) {
        Exercicio02 exercicio = new Exercicio02();
        exercicio.lerNumeros();
        exercicio.calcularSoma();
        exercicio.calcularMultiplicacao();
    }
}

