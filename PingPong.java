import java.io.Console;

public class PingPong {

  public static void main(String[] args) {
    Console myConsole = System.console();

    System.out.println("Pick any number!");
    String stringNumberPicked = myConsole.readLine();
    Integer integerNumberPicked = Integer.parseInt(stringNumberPicked);

    Integer currentNum = 0;
    System.out.println(currentNum);
    currentNum = currentNum + 1;

    while(currentNum <= integerNumberPicked) {
      if((currentNum % 5 == 0) && (currentNum % 3 == 0)) {
        System.out.println("ping-pong");
      }
      else if(currentNum % 5 == 0) {
        System.out.println("pong");
      }
      else if(currentNum % 3 == 0) {
        System.out.println("ping");
      }
      else {
        System.out.println(currentNum);
      }
      currentNum = currentNum + 1;
    }

    }
}
