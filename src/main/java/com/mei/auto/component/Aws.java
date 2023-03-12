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
import java.util.Objects;
import java.util.ResourceBundle;
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
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WindowType;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Aws {
    OracleA1V4 oracleA1V4 = null;
    private static SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    WebDriverWait wait = null;
    ResourceBundle env = ResourceBundle.getBundle("application");
    String imgDir;
    Integer waitT;
    Azure azure;
    private WebDriver driver;
    String awsWindow;

    public Aws() {
        this.imgDir = this.env.getString("azure.images.dir");
        this.waitT = Integer.valueOf(this.env.getString("azure.time.wait"));
        this.azure = new Azure();
        this.driver = this.azure.driver;
        this.awsWindow = null;
    }

    public static void main(String[] args) throws Exception {
        final Aws aws = new Aws();
        aws.azure.setUp();
        aws.driver = aws.azure.driver;
        (new Thread(new Runnable() {
            public void run() {
                Aws var10004 = aws;
                Objects.requireNonNull(var10004);
                Objects.requireNonNull(var10004);
                Thread monitor = new Thread(var10004.new Monitor());
                monitor.start();
                aws.run();
            }
        })).start();
        aws.statrtAzure();
    }

    public void statrtAzure() throws Exception {
        try {
            this.azure.login();
        } catch (Exception var3) {
            var3.printStackTrace();
        }

        Azure var10004 = this.azure;
        Objects.requireNonNull(var10004);
        Thread monitor = new Thread(new Monitor());
        monitor.start();
        this.azure.run();
    }

    public void run() {
        (new Thread(new Runnable() {
            public void run() {
                while(true) {
                    try {
                        Aws.this.commit();
                        Thread.sleep((long)('\uea60' * Aws.this.waitT));
                    } catch (Exception var2) {
                        var2.printStackTrace();
                    }
                }
            }
        })).start();
    }

    public void setUp() {
        this.oracleA1V4 = new OracleA1V4();
        this.driver = this.oracleA1V4.getDriver();
        this.wait = new WebDriverWait(this.driver, Duration.ofSeconds(30L));
    }

    public void login() throws Exception {
        this.driver.get("https://ap-southeast-2.console.aws.amazon.com/cloudshell/home?region=ap-southeast-2");
        this.driver.manage().window().setSize(new Dimension(900, 700));
        this.driver.findElement(By.id("resolving_input")).click();
        this.driver.findElement(By.id("resolving_input")).sendKeys(new CharSequence[]{"mjc_678@126.com"});
        Thread.sleep(1000L);
        this.driver.findElement(By.id("next_button")).click();
        Thread.sleep(1000L);
        this.driver.findElement(By.id("password")).click();
        this.driver.findElement(By.id("password")).sendKeys(new CharSequence[]{"mei@4515"});
        Thread.sleep(1000L);
        this.driver.findElement(By.id("signin_button")).click();
        Thread.sleep(1000L);
    }

    public synchronized void commit() throws Exception {
        this.azure.lock.lock();

        try {
            if (this.awsWindow != null) {
                this.driver.switchTo().window(this.awsWindow);
            }

            String oldTab = this.driver.getWindowHandle();
            String newTab = this.driver.switchTo().newWindow(WindowType.TAB).getWindowHandle();
            this.driver.get("https://ap-southeast-2.console.aws.amazon.com/cloudshell/home?region=ap-southeast-2");
            if (this.awsWindow != null) {
                this.driver.switchTo().window(oldTab).close();
            }

            this.awsWindow = newTab;
            this.driver.switchTo().window(this.awsWindow);
            Thread.sleep(6000L);
            if (!this.driver.getTitle().contains("AWS CloudShell")) {
                this.login();
                Thread.sleep(3000L);
            }

            this.driver.findElement(By.cssSelector("#aceterm-editor-container > textarea")).sendKeys(new CharSequence[]{"sh start.sh"});
            this.driver.findElement(By.cssSelector("#aceterm-editor-container > textarea")).sendKeys(new CharSequence[]{Keys.RETURN});
            String date = dateFormat.format(new Date());
            System.out.println("aws now : " + date);
            Thread.sleep(2000L);
        } finally {
            this.azure.lock.unlock();
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
                    System.out.println("aws check status: " + i + ", time:" + Aws.dateFormat.format(new Date()));
                    if (i == 0) {
                        Aws.this.commit();
                    }

                    Thread.sleep(10000L);
                } catch (Exception var2) {
                    var2.printStackTrace();
                }
            }
        }

        public int url() throws Exception {
            HttpGet httpget = new HttpGet("https://aws.reami.top");

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
