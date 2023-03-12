//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.mei.auto.component;

import com.mei.auto.component.util.LockService;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.openqa.selenium.By;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.WindowType;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Qiandao {
    private static final Logger logger = LoggerFactory.getLogger(Qiandao.class);
    private static SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    @Value("${qiandao.url}")
    String url;
    @Value("${dd.token}")
    String token;
    @Value("${dd.token2}")
    String token2;
    boolean status;
    String windowTag;

    public Qiandao() {
    }

    private void qiandao(String token) throws Exception {
        try {
            logger.info("qiando try to lock");
            LockService.DRIVERLOCK.lock();
            logger.info("qiando locked");
            if (!DriverService.driver.getWindowHandle().equals(this.windowTag)) {
                DriverService.driver.switchTo().window(this.windowTag);
            }

            DriverService.driver.get(this.url);
            DriverService.driver.manage().window().setPosition(new Point(10, 10));
            DriverService.js.executeScript("window.sessionStorage.clear() ; window.localStorage.setItem(arguments[0],arguments[1])", new Object[]{"didih5_trinity_login_ticket", token});
            Thread.sleep(1000L);
            DriverService.driver.get(this.url);
            ((WebElement)DriverService.wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".sign-btn")))).click();
        } finally {
            LockService.DRIVERLOCK.unlock();
            logger.info("qiando release lock");
        }

        Date now = new Date();
        Logger var10000 = logger;
        String var10001 = token.substring(0, 10);
        var10000.info("token," + var10001 + ", click now! " + String.valueOf(now));
        Thread.sleep(2000L);
    }

    public void start() throws Exception {
        if (!this.status) {
            this.status = true;

            try {
                logger.info("qiando start try to lock");
                LockService.DRIVERLOCK.lock();
                this.windowTag = DriverService.driver.switchTo().newWindow(WindowType.TAB).getWindowHandle();
            } finally {
                LockService.DRIVERLOCK.unlock();
                logger.info("qiando start release locked");
            }

            Date before = new Date();
            boolean first = true;

            for(DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); this.status; Thread.sleep(10000L)) {
                Date now = new Date();
                long left = 28800L - (now.getTime() - before.getTime()) / 1000L;
                if (left > 0L && !first) {
                    long h = left / 3600L;
                    long m = (left - h * 3600L) / 60L;
                    long s = left % 60L;
                    logger.info(String.format("qiandao wait click, %s, left: %d:%d:%d", format.format(now), h, m, s));
                } else {
                    try {
                        DriverService.js.executeScript("javascript:void(0)", new Object[0]);
                    } catch (Exception var18) {
                        logger.info("需要初始化窗口！");
                    }

                    try {
                        this.qiandao(this.token2);
                        this.qiandao(this.token);
                    } catch (Exception var17) {
                        var17.printStackTrace();
                    }

                    first = false;
                    before = new Date();
                }
            }

        }
    }

    public void close() {
        try {
            LockService.DRIVERLOCK.lock();
            DriverService.driver.switchTo().window(this.windowTag).close();
            DriverService.driver.switchTo().window(DriverService.inintWindow);
            this.status = false;
        } finally {
            LockService.DRIVERLOCK.unlock();
            logger.info("关闭 签到 浏览器");
        }

    }
}
