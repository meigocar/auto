//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.mei.auto.component;

import org.openqa.selenium.*;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;
import java.util.Random;

public class AliyunHK {
    private WebDriver driver;
    private Map<String, Object> vars;
    JavascriptExecutor js;
    OracleA1V4 oracleA1V4 = null;
    private static SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    Integer wait = 1000;

    public AliyunHK() {
    }

    public static void main(String[] args) throws Exception {
        AliyunHK gTest = new AliyunHK();
        gTest.setUp();
        gTest.oracleA1();
    }

    public void setUp() {
        this.oracleA1V4 = new OracleA1V4();
        this.driver = this.oracleA1V4.getDriver();
    }

    public void tearDown() {
        this.driver.quit();
    }

    public void oracleA1() throws Exception {
        this.driver.manage().window().setSize(new Dimension(1078, 1064));
        int total = 0;
        int succ = 0;

        while(true) {
            while(true) {
                try {
                    this.driver.get("https://common-buy.aliyun.com/?commodityCode=swas&request=%257B%2522ord_time%2522%253A%25221%253AMonth%2522%252C%2522order_num%2522%253A1%252C%2522instance_type%2522%253A%2522server%2522%252C%2522datadisk_type%2522%253A%2522essddatadisk%2522%252C%2522version_type%2522%253A%2522swas.s2.c2m1s40b30t1.un%2522%252C%2522image_type%2522%253A%2522systemimage%2522%252C%2522system_image%2522%253A%252287987f90ac2943c1b23f4c46cc80839c%2522%257D&regionId=cn-hongkong");
                    WebElement buyButton = this.driver.findElement(By.cssSelector(".vc-zjq-price-btn"));
                    ++total;
                    SimpleDateFormat var10001;
                    String oldTab;
                    if (buyButton.getAttribute("class").contains("vc-zjq-price-btn-disable")) {
                        var10001 = dateFormat;
                        System.out.println(var10001.format(new Date()) + ",can't buy, totals:" + total + ", succ:" + succ);
                    } else {
                        ++succ;
                        String date = dateFormat.format(new Date());
                        System.out.println(date + ",ok, now can buy,succ:" + succ + ", totals:" + total);
                        oldTab = date + ".png";
                        File var8 = (File)((TakesScreenshot)this.driver).getScreenshotAs(OutputType.FILE);
                    }

                    Thread.sleep((long)((new Random()).nextInt(this.wait) * 1000));
                    oldTab = this.driver.getWindowHandle();
                    String newTab = this.driver.switchTo().newWindow(WindowType.TAB).getWindowHandle();
                    this.driver.switchTo().window(oldTab).close();
                    this.driver.switchTo().window(newTab);
                } catch (Exception var9) {
                    var9.printStackTrace();
                }
            }
        }
    }
}
