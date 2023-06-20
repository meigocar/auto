//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.mei.auto.component;

import io.github.bonigarcia.wdm.WebDriverManager;
import jakarta.annotation.PostConstruct;

import java.net.MalformedURLException;
import java.net.URL;
import java.time.Duration;
import java.util.Arrays;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.ProfilesIni;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.safari.SafariOptions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class DriverService {
    public static WebDriverWait wait;
    public static WebDriver driver;
    public static JavascriptExecutor js;
    public static String inintWindow;
    @Value("${webdriver.driver.active}")
    String webBrowser;
    @Value("${webdriver.chrome.dir}")
    private String chromeDir;

    public DriverService() {
    }

    @PostConstruct
    public void init() {
        new Thread(() -> setUp()).start();
    }

    public void setUp() {
        if ("firefox".equals(this.webBrowser)) {
            WebDriverManager.firefoxdriver().setup();
            ProfilesIni profileIni = new ProfilesIni();
            FirefoxProfile profile = profileIni.getProfile("default-release");
            FirefoxOptions optionsx = (new FirefoxOptions()).addPreference("browser.startup.page", 1).addPreference("browser.startup.homepage", "https://www.google.com");
            optionsx.setProfile(profile);
            driver = new FirefoxDriver(optionsx);
        } else if ("safri".equals(this.webBrowser)) {
            SafariOptions optionsxx = new SafariOptions();
            driver = new SafariDriver(optionsxx);
        } else {
            ChromeOptions options;
            if ("chromium".equals(this.webBrowser)) {
                options = new ChromeOptions();
                options.addArguments(new String[]{"user-data-dir=" + this.chromeDir + "/chrome"});
                options.setExperimentalOption("excludeSwitches", Arrays.asList("disable-popup-blocking"));

                try {
                    driver = new RemoteWebDriver(new URL("http://129.150.59.83:4444/"), options);
                } catch (MalformedURLException var4) {
                    var4.printStackTrace();
                }
            } else {
                WebDriverManager.chromedriver().setup();
                options = new ChromeOptions();
                options.addArguments(new String[]{"user-data-dir=" + this.chromeDir + "/chrome"});
                options.addArguments("--remote-allow-origins=*");
                options.setExperimentalOption("excludeSwitches", Arrays.asList("disable-popup-blocking"));
                driver = new ChromeDriver(options);
            }
        }

        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(15L));
        wait = new WebDriverWait(driver, Duration.ofSeconds(30L));
        js = (JavascriptExecutor) driver;
        inintWindow = driver.getWindowHandle();
    }

    public void tearDown() throws InterruptedException {
        if (driver != null) {
            try {
                driver.quit();
            } catch (Exception e) {
            }
            System.out.println("close webBrowser");
            Thread.sleep(2000L);
        }
    }
}
