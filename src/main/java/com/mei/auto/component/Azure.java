//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.mei.auto.component;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.security.SecureRandom;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.Date;
import java.util.Map;
import java.util.Objects;
import java.util.ResourceBundle;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import javax.net.ssl.KeyManager;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLHandshakeException;
import javax.net.ssl.X509TrustManager;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.ssl.SSLContexts;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WindowType;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Azure {
    private Map<String, Object> vars;
    JavascriptExecutor js;
    OracleA1V4 oracleA1V4 = null;
    public WebDriver driver = null;
    private static SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    WebDriverWait wait = null;
    ResourceBundle env = ResourceBundle.getBundle("application");
    String imgDir;
    Integer waitT;
    String azureWindow;
    public Lock lock;

    public Azure() {
        this.imgDir = this.env.getString("azure.images.dir");
        this.waitT = Integer.valueOf(this.env.getString("azure.time.wait"));
        this.azureWindow = null;
        this.lock = new ReentrantLock();
    }

    public static void main(String[] args) throws Exception {
        Azure gTest = new Azure();
        gTest.setUp();
        Objects.requireNonNull(gTest);
        Objects.requireNonNull(gTest);
        Thread monitor = new Thread(gTest.new Monitor());
        monitor.start();

        try {
            gTest.login();
        } catch (Exception var4) {
            var4.printStackTrace();
        }

        gTest.run();
    }

    public void run() throws Exception {
        this.commit(1);

        while(true) {
            while(true) {
                try {
                    Thread.sleep((long)('\uea60' * this.waitT));
                    this.commit(2);
                } catch (Exception var2) {
                    var2.printStackTrace();
                }
            }
        }
    }

    public void setUp() {
        this.oracleA1V4 = new OracleA1V4();
        this.driver = this.oracleA1V4.getDriver();
        this.wait = new WebDriverWait(this.driver, Duration.ofSeconds(30L));
    }

    public void login() {
        this.driver.get("https://portal.azure.com/#cloudshell");
        this.driver.manage().window().setSize(new Dimension(900, 700));
        this.driver.findElement(By.id("i0116")).click();
        this.driver.findElement(By.id("i0116")).sendKeys(new CharSequence[]{"mjc.88@126.com"});
        this.wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("idSIButton9")));
        this.driver.findElement(By.id("idSIButton9")).click();
        this.wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("passwd")));
        this.driver.findElement(By.name("passwd")).sendKeys(new CharSequence[]{"mei@4515"});
        this.driver.findElement(By.id("idSIButton9")).click();
        this.driver.findElement(By.id("idSIButton9")).click();
    }

    public synchronized void commit(int type) throws Exception {
        try {
            this.lock.lock();
            if (this.azureWindow != null) {
                this.driver.switchTo().window(this.azureWindow);
            }

            this.driver.switchTo().parentFrame();
            String oldTab = this.driver.getWindowHandle();
            String newTab = this.driver.switchTo().newWindow(WindowType.TAB).getWindowHandle();
            this.driver.get("https://portal.azure.com/#cloudshell");
            if (this.azureWindow != null) {
                this.driver.switchTo().window(oldTab).close();
            }

            this.azureWindow = newTab;
            this.driver.switchTo().window(this.azureWindow);
            PrintStream var10000 = System.out;
            Date var10002 = new Date();
            var date = dateFormat.format(var10002);
            var10000.println("azure, now :" + date);
            Thread.sleep(6000L);
            this.driver.switchTo().parentFrame().switchTo().frame("consoleFrameId");
            this.wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".xterm-text-layer")));
            Date var7;
            if (type == 1) {
                this.driver.findElement(By.cssSelector(".xterm-helper-textarea")).sendKeys(new CharSequence[]{"sh start.sh"});
                var10000 = System.out;
                var7 = new Date();
                var10000.println("azure, sh start.sh" + String.valueOf(var7));
            } else if (type == 2) {
                this.driver.findElement(By.cssSelector(".xterm-helper-textarea")).sendKeys(new CharSequence[]{"echo $HOME"});
                var10000 = System.out;
                var7 = new Date();
                var10000.println("azure, echo " + String.valueOf(var7));
            }

            this.driver.findElement(By.cssSelector(".xterm-helper-textarea")).sendKeys(new CharSequence[]{Keys.RETURN});
            Thread.sleep(2000L);
        } finally {
            this.lock.unlock();
        }

    }

    public class Monitor implements Runnable {
        HttpClient client;

        public Monitor() {
            try {
                SSLContext sslcontext = SSLContexts.custom().build();
                sslcontext.init((KeyManager[])null, new X509TrustManager[]{new MyX509TrustManager()}, new SecureRandom());
                SSLConnectionSocketFactory factory = new SSLConnectionSocketFactory(sslcontext, SSLConnectionSocketFactory.BROWSER_COMPATIBLE_HOSTNAME_VERIFIER);
                this.client = HttpClients.custom().setSSLSocketFactory(factory).build();
            } catch (Exception var4) {
                var4.printStackTrace();
            }

        }

        public void monitor() throws Exception {
            while(true) {
                try {
                    int i = this.url();
                    System.out.println("azure check status: " + i + ", time:" + Azure.dateFormat.format(new Date()));
                    if (i == 0) {
                        Azure.this.commit(1);
                    }

                    Thread.sleep(10000L);
                } catch (Exception var2) {
                    var2.printStackTrace();
                }
            }
        }

        public int url() throws Exception {
            HttpGet httpget = new HttpGet("https://azure.reami.top");

            try {
                HttpResponse response = this.client.execute(httpget);
                BufferedReader br = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));
                String input = br.readLine();
                br.close();
                return "Bad Request".equals(input) ? 1 : 0;
            } catch (SSLHandshakeException var5) {
                return 0;
            }
        }

        public void run() {
            try {
                this.monitor();
            } catch (Exception var2) {
                var2.printStackTrace();
            }

        }
    }
}
