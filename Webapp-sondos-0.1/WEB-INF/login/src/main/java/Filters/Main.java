package Filters;
import org.slf4j.LoggerFactory;
public class Main {
    public static void main(String[] args) throws  InterruptedException{


        while (true){
            Thread.sleep(10);
            org.slf4j.Logger logger = LoggerFactory.getLogger(Main.class);
            logger.info("woooooole");

            new loginFilter().process();
        }


    }
}
