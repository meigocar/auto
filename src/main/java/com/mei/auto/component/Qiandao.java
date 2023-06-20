package com.mei.auto.component;

import com.mei.auto.component.util.LockService;
import jakarta.annotation.Resource;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import static com.mei.auto.component.DriverService.js;

@Component
public class Qiandao {
    private static final Logger logger = LoggerFactory.getLogger(Qiandao.class);
    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    @Value("${qiandao.url}")
    private String url;

    @Value("${dd.token}")
    private String[] tokens;

    @Resource
    private DriverService driverService;

    private boolean status;
    private String windowTag;
    private Set<String> failureList = new HashSet<>();

    public Qiandao() {
    }

    private void qiandao(String token) throws Exception {
        try {
            logger.info("qiando try to lock");
            LockService.DRIVERLOCK.lock();
            logger.info("qiando locked");

            WebDriver driver = DriverService.driver;
            String oldTag = driver.getWindowHandle();
            windowTag = driver.switchTo().newWindow(WindowType.TAB).getWindowHandle();
            driver.switchTo().window(oldTag).close();
            driver.switchTo().window(windowTag);

            driver.get(url);
            driver.manage().window().setPosition(new Point(10, 10));
            driver.manage().deleteAllCookies();
            js.executeScript("window.localStorage.setItem(arguments[0],arguments[1])", "didih5_trinity_login_ticket", token);
            Thread.sleep(1000L);
            driver.get(url);

            DriverService.wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".sign-btn"))).click();
            failureList.remove(token);
            logger.info("success, token," + token.substring(0, 10) + ", click now! " + new Date());
            Thread.sleep(2000L);
        } catch (Exception e) {
            failureList.add(token);
            logger.info("error token," + token.substring(0, 10) + ", click failure " + new Date());
            Thread.sleep(2000L);
            logger.error("token is: " + token, e);
        } finally {
            LockService.DRIVERLOCK.unlock();
            logger.info("qiando release lock");
        }
    }

    public void start() throws Exception {
        if (!status) {
            status = true;
            init();
            Date before = new Date();
            boolean first = true;

            while (status) {
                Date now = new Date();
                long left = 28800L - (now.getTime() - before.getTime()) / 1000L;

                if (left > 0L && !first && failureList.isEmpty()) {
                    long h = left / 3600L;
                    long m = (left - h * 3600L) / 60L;
                    long s = left % 60L;
                    logger.info(String.format("qiandao wait click, %s, left: %d:%d:%d", dateFormat.format(now), h, m, s));
                } else {
                    try {
                        js.executeScript("javascript:void(0)");
                    } catch (Exception e) {
                        logger.error("需要初始化窗口！",e);
                        driverService.tearDown();
                        driverService.setUp();
                        init();
                    }

                    for (String token : tokens) {
                        qiandao(token);
                    }

                    first = false;
                    before = new Date();
                }

                Thread.sleep(10000L);
            }
        }
    }

    private void init() {
        try {
            logger.info("qiando start try to lock");
            LockService.DRIVERLOCK.lock();
            WebDriver driver = DriverService.driver;
            driver.manage().window().setSize(new Dimension(500, 950));
            windowTag = driver.switchTo().newWindow(WindowType.TAB).getWindowHandle();
        } finally {
            LockService.DRIVERLOCK.unlock();
            logger.info("qiando start release locked");
        }
    }

    public void close() {
        try {
            LockService.DRIVERLOCK.lock();
            WebDriver driver = DriverService.driver;
            driver.switchTo().window(windowTag).close();
            driver.switchTo().window(DriverService.inintWindow);
            status = false;
        } finally {
            LockService.DRIVERLOCK.unlock();
            logger.info("关闭 签到 浏览器");
        }
    }
}
