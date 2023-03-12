//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.mei.auto.component;

import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.Map;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class FreeVps {
    private WebDriver driver;
    private Map<String, Object> vars;
    JavascriptExecutor js;
    OracleA1V4 oracleA1V4 = null;
    private static SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    WebDriverWait wait = null;
    long procPreTime = System.currentTimeMillis();
    long beginTime = System.currentTimeMillis();

    public FreeVps() {
    }

    public static void main(String[] args) throws Exception {
        FreeVps gTest = new FreeVps();
        gTest.setUp();
        gTest.login();
        gTest.commit();
    }

    public void login() {
        this.driver.get("https://vpsfree.fr/clients/connexion");
        this.wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("emailaddress")));
        this.driver.findElement(By.id("emailaddress")).sendKeys(new CharSequence[]{"mjc_678@126.com"});
        this.driver.findElement(By.id("password")).sendKeys(new CharSequence[]{"mei@4515"});
        this.driver.findElement(By.cssSelector(".btn")).click();
    }

    public void setUp() {
        this.oracleA1V4 = new OracleA1V4();
        this.driver = this.oracleA1V4.getDriver();
        this.wait = new WebDriverWait(this.driver, Duration.ofSeconds(30L));
    }

    public void tearDown() {
        this.driver.quit();
    }

    public void commit() throws Exception {
        this.driver.manage().window().setSize(new Dimension(1078, 1064));
        int total = 0;
        int succ = 0;
        this.driver.findElement(By.cssSelector(".btn-outline-primary:nth-child(2)")).click();

        while(true) {
            try {
                this.wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//BODY/DIV[3]/DIV[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/BUTTON[1]")));
                this.driver.findElement(By.xpath("//BODY/DIV[3]/DIV[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/BUTTON[1]")).click();
                this.wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("os")));
                this.driver.findElement(By.id("os")).click();
                WebElement dropdown = this.driver.findElement(By.id("os"));
                dropdown.findElement(By.xpath("//option[. = 'Debian 11 (64 bits)']")).click();
                this.driver.findElement(By.cssSelector("label:nth-child(2)")).click();
                this.driver.findElement(By.id("selection22")).click();
                this.wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("hostname22")));
                this.driver.findElement(By.name("hostname22")).sendKeys(new CharSequence[]{"franch"});
                this.driver.findElement(By.name("password22")).sendKeys(new CharSequence[]{"mei@4515"});
                this.driver.findElement(By.cssSelector("#creanstance22 .btn")).click();
                this.wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".swal2-confirm")));
                this.driver.findElement(By.cssSelector(".swal2-confirm")).click();
                long now = System.currentTimeMillis();
                long pastMins = (now - this.beginTime) / 60000L;
                long hours = pastMins / 60L;
                long mins = pastMins - hours * 60L;
                System.out.println(String.format("%s past:%d:%d, cost %d , success:%d", dateFormat.format(System.currentTimeMillis()), hours, mins, (System.currentTimeMillis() - this.procPreTime) / 1000L, succ++));
                Thread.sleep(10000L);
            } catch (Exception var12) {
                var12.printStackTrace();
            }

            this.procPreTime = System.currentTimeMillis();
            ++total;
        }
    }
}
