//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.mei.auto.component;

import com.mei.auto.component.util.LockService;
import java.io.File;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.Point;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.WindowType;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class DIDIFLJ {
    private static final Logger LOGGER = LoggerFactory.getLogger(DIDIFLJ.class);
    @Value("${dd.token}")
    String token;
    @Value("${dd.token2}")
    String token2;
    final String indexURL = "https://page.udache.com/ut-webx/ut-welfarecenter/index.html#/index";
    WebDriverWait checkWait;
    int waitSecond = 3;
    Map<String, Boolean> taskMaps = new HashMap();
    private String windowTag;
    boolean status;

    public DIDIFLJ() {
    }

    public void start() throws Exception {
        if (!this.status) {
            this.status = true;
            List<String> tokens = List.of(this.token, this.token2);
            Date before = new Date();
            boolean first = true;

            for(DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); this.status; Thread.sleep(10000L)) {
                Date now = new Date();
                long left = 21600L - (now.getTime() - before.getTime()) / 1000L;
                if (left > 0L && !first) {
                    long h = left / 3600L;
                    long m = (left - h * 3600L) / 60L;
                    long s = left % 60L;
                    LOGGER.info(String.format("didiFLJ %s, left: %d:%d:%d", format.format(now), h, m, s));
                } else {
                    tokens.stream().forEach((token) -> {
                        int i = 0;

                        while(this.status && i < 3) {
                            try {
                                this.init(token);
                                this.process();
                                break;
                            } catch (Exception var4) {
                                var4.printStackTrace();
                                ++i;
                            }
                        }

                    });
                    first = false;
                    before = new Date();
                }
            }

        }
    }

    public void init(String token) throws Exception {
        try {
            LOGGER.info("DDFLJ init try lock");
            LockService.DRIVERLOCK.lock();
            if (this.windowTag == null) {
                this.windowTag = DriverService.driver.switchTo().newWindow(WindowType.TAB).getWindowHandle();
            }

            if (!DriverService.driver.getWindowHandle().equals(this.windowTag)) {
                DriverService.driver.switchTo().window(this.windowTag);
            }

            DriverService.driver.manage().window().setSize(new Dimension(300, 1000));
            DriverService.driver.manage().window().setPosition(new Point(0, 0));
            this.checkWait = new WebDriverWait(DriverService.driver, Duration.ofSeconds(3L));
            LOGGER.info("ddflj token, " + token);
            DriverService.driver.get("https://epassport.diditaxi.com.cn/passport/login/v5/signInByOpenid?wsgsig=dd03-DmuFIgOMoF9YfKFa7FNtdDP1wV%2Fzb7Of5rn%2FBs%2F8wV%2Fyg357NF7VecZNTe9ygRed3BjPfDx%2BSVEO0NqC5VJqdtI%2BZqaTg7Fc7FJrdjq4Zl5xf4r96lswBjIJTeqv");
            Thread.sleep(1000L);
            DriverService.js.executeScript("window.localStorage.setItem(arguments[0],arguments[1])", new Object[]{"ticket", token});
            DriverService.driver.get("https://act.xiaojukeji.com/");
            Thread.sleep(1000L);
            DriverService.js.executeScript(" window.localStorage.setItem(arguments[0],arguments[1])", new Object[]{"didih5_trinity_login_ticket", token});
            DriverService.driver.get("https://page.udache.com/");
            Thread.sleep(1000L);
            DriverService.js.executeScript("window.sessionStorage.clear() ; window.localStorage.setItem(arguments[0],arguments[1])", new Object[]{"didih5_trinity_login_ticket", token});
        } finally {
            LockService.DRIVERLOCK.unlock();
            LOGGER.info("DDFLJ release lock");
        }

    }

    public void process() throws Exception {
        this.taskMaps.put("浏览特惠洗车", false);
        this.taskMaps.put("访问租车", false);
        this.taskMaps.put("免费去领券", false);
        this.taskMaps.put("浏览好车频道", false);
        this.taskMaps.put("浏览顺风车", false);
        this.taskMaps.put("从固定入口访", false);
        this.taskMaps.put("浏览看车选车", false);
        this.taskMaps.put("浏览爆款好车", false);
        this.taskMaps.put("浏览滴滴有车", false);
        this.taskMaps.put("去梦想小店签", false);
        this.taskMaps.put("去养券大师签", false);
        this.taskMaps.put("浏览充值中心", false);

        try {
            LOGGER.info("DDFLJ process try lock");
            LockService.DRIVERLOCK.lock();
            LOGGER.info("DDFLJ process locked");
            if (!DriverService.driver.getWindowHandle().equals(this.windowTag)) {
                DriverService.driver.switchTo().window(this.windowTag);
            }

            DriverService.driver.get("https://page.udache.com/ut-webx/ut-welfarecenter/index.html#/index");
            this.popWindowHandle();
            this.guaguale();
            WebElement refreshButton = null;

            while(true) {
                label274: {
                    if (this.status) {
                        List<WebElement> elements = DriverService.driver.findElements(By.cssSelector(".task-btn"));
                        if (elements == null) {
                            break label274;
                        }

                        Map<String, Boolean> todoTasks = new HashMap();
                        elements.stream().forEach((ex) -> {
                            WebElement p = ex.findElement(By.xpath("./.."));
                            WebElement titleE = p.findElement(By.cssSelector(".task-title_text"));
                            int wordsL = titleE.getText().length() < 6 ? titleE.getText().length() : 6;
                            if (this.taskMaps.containsKey(titleE.getText().substring(0, wordsL)) && !ex.getText().contains("已完成")) {
                                todoTasks.put(titleE.getText().substring(0, wordsL), false);
                            }

                        });

                        label251:
                        while(true) {
                            if (this.status && !todoTasks.isEmpty()) {
                                elements = DriverService.driver.findElements(By.cssSelector(".task-btn"));
                                Iterator var4 = elements.iterator();

                                while(true) {
                                    while(true) {
                                        if (!this.status || !var4.hasNext()) {
                                            continue label251;
                                        }

                                        WebElement e = (WebElement)var4.next();
                                        WebElement p = e.findElement(By.xpath("./.."));
                                        WebElement titleE = p.findElement(By.cssSelector(".task-title_text"));
                                        String title6 = "";

                                        try {
                                            int wordsL = titleE.getText().length() < 6 ? titleE.getText().length() : 6;
                                            title6 = titleE.getText().substring(0, wordsL);
                                        } catch (Exception var17) {
                                            LOGGER.info("error");
                                        }

                                        if (!e.getText().contains("已完成")) {
                                            try {
                                                LOGGER.info("begin task：" + titleE.getText());
                                                if (!titleE.getText().contains("浏览爆款好车") && !titleE.getText().contains("浏览充值中心") && !titleE.getText().contains("浏览顺风车") && !titleE.getText().contains("从固定入口访") && !titleE.getText().contains("访问租车") && !titleE.getText().contains("免费去领券") && !titleE.getText().contains("浏览特惠洗车") && !titleE.getText().contains("浏览滴滴有车") && !titleE.getText().contains("浏览好车频道") && !titleE.getText().contains("浏览看车选车")) {
                                                    if (titleE.getText().contains("完成一次打车") && e.getText().contains("领任务")) {
                                                        DriverService.js.executeScript("arguments[0].click()", new Object[]{e});
                                                        todoTasks.remove(title6);
                                                    } else if (titleE.getText().contains("去养券大师签")) {
                                                        this.voucherMaser(e);
                                                    } else {
                                                        if (!titleE.getText().contains("去梦想小店签")) {
                                                            continue;
                                                        }

                                                        this.dreamShop(e);
                                                    }
                                                } else {
                                                    DriverService.js.executeScript("arguments[0].click()", new Object[]{e});
                                                }

                                                try {
                                                    Thread.sleep((long)(this.waitSecond * 1000));
                                                    DriverService.driver.get("https://page.udache.com/ut-webx/ut-welfarecenter/index.html#/index");
                                                    Thread.sleep((long)(this.waitSecond * 1000));
                                                    LOGGER.info("看下是否有完成的任务，窗口待关闭？");
                                                    WebElement element = (WebElement)this.checkWait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".closeBtn")));
                                                    DriverService.js.executeScript("arguments[0].click() ", new Object[]{element});
                                                    LOGGER.info("有窗口已关闭。");
                                                } catch (Exception var16) {
                                                    LOGGER.info("无窗口。");
                                                }

                                                Thread.sleep(1500L);
                                                continue label251;
                                            } catch (Exception var19) {
                                                var19.printStackTrace();
                                            }
                                        } else {
                                            todoTasks.remove(title6);
                                        }
                                    }
                                }
                            }

                            refreshButton = (WebElement)DriverService.wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".task-refresh > span")));
                            if (!refreshButton.getText().contains("今日刷新用光")) {
                                DriverService.js.executeScript("arguments[0].focus();arguments[0].click() ", new Object[]{refreshButton});

                                try {
                                    DriverService.wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("div.popup-content")));
                                    LOGGER.info("没有更多任务退出");
                                } catch (Exception var18) {
                                    Thread.sleep((long)(this.waitSecond * 1000));
                                    File var5 = (File)((TakesScreenshot)DriverService.driver).getScreenshotAs(OutputType.FILE);
                                    break label274;
                                }
                            }
                            break;
                        }
                    }

                    LOGGER.info("本轮结束！！！！");
                    return;
                }

                System.err.println("hahaha,完成一批任务: " + refreshButton.getText());
            }
        } finally {
            LockService.DRIVERLOCK.unlock();
            LOGGER.info("DDFLJ process release locked");
        }
    }

    private void dreamShop(WebElement e) throws InterruptedException {
        DriverService.js.executeScript("arguments[0].click();", new Object[]{e});
        Thread.sleep((long)(this.waitSecond * 1000));
        WebElement canvas = (WebElement)DriverService.wait.until(ExpectedConditions.elementToBeClickable(By.id("GameCanvas")));
        Dimension canvas_dimensions = DriverService.driver.manage().window().getSize();
        int button_x = canvas_dimensions.getWidth() / 9 - canvas_dimensions.getWidth() / 2;
        int button_y = canvas_dimensions.getHeight() * 4 / 11 - canvas_dimensions.getHeight() / 2;
        (new Actions(DriverService.driver)).moveToElement(canvas, button_x, button_y).click().perform();
        Thread.sleep(2000L);
        (new Actions(DriverService.driver)).moveToElement(canvas, -20, 0).click().perform();
        LOGGER.info("完成梦想签到");
    }

    private void voucherMaser(WebElement e) throws InterruptedException {
        Pair<Double, Double> pairs1 = new Pair(0.2604166666666667, 0.5952380952380952);
        Pair<Double, Double> pairs2 = new Pair(0.5208333333333334, 0.5952380952380952);
        Pair<Double, Double> pairs3 = new Pair(0.7291666666666667, 0.5952380952380952);
        Pair<Double, Double> pairs4 = new Pair(0.2604166666666667, 0.41666666666666663);
        Pair<Double, Double> pairs5 = new Pair(0.5208333333333334, 0.41666666666666663);
        Pair<Double, Double> pairs6 = new Pair(0.7291666666666667, 0.41666666666666663);
        Pair<Double, Double> pairs7 = new Pair(0.5208333333333334, 0.23809523809523808);
        List<Pair<Double, Double>> pairs = new ArrayList();
        pairs.add(pairs1);
        pairs.add(pairs2);
        pairs.add(pairs3);
        pairs.add(pairs4);
        pairs.add(pairs5);
        pairs.add(pairs6);
        pairs.add(pairs7);
        DriverService.js.executeScript("arguments[0].click()", new Object[]{e});
        Thread.sleep((long)(this.waitSecond * 1000));
        WebElement canvas = (WebElement)DriverService.wait.until(ExpectedConditions.elementToBeClickable(By.id("Cocos2dGameContainer")));
        Dimension canvas_dimensions = canvas.getSize();
        Iterator var12 = pairs.iterator();

        while(var12.hasNext()) {
            Pair<Double, Double> pair = (Pair)var12.next();
            Double button_x = (double)canvas_dimensions.getWidth() * (Double)pair.getKey() - (double)(canvas_dimensions.getWidth() / 2);
            Double button_y = (double)canvas_dimensions.getHeight() * (Double)pair.getValue() - (double)(canvas_dimensions.getHeight() / 2);
            (new Actions(DriverService.driver)).moveToElement(canvas, button_x.intValue(), button_y.intValue()).click().perform();
            Thread.sleep(1000L);
        }

        LOGGER.info("===");
    }

    private void popWindowHandle() {
        try {
            ((WebElement)this.checkWait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".bottom-group > .mpx-view")))).click();
            ((WebElement)this.checkWait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".closeBtn")))).click();
            LOGGER.info("有签到，关窗");
        } catch (Exception var3) {
            LOGGER.info("无签到弹窗！");
        }

        try {
            DriverService.driver.findElement(By.cssSelector("div.closeBtn")).click();
            LOGGER.info("有其他弹窗，关闭");
        } catch (Exception var2) {
            LOGGER.info("无其他弹窗！");
        }

    }

    private boolean guaguale() {
        try {
            ((WebElement)DriverService.wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#navigation-item-divide > .icon")))).click();
            WebElement element = (WebElement)DriverService.wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("span:nth-child(4)")));
            if (element.getText().contains("立即报名")) {
                element = (WebElement)DriverService.wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("div.main-btn")));
                DriverService.js.executeScript("arguments[0].scrollIntoView();arguments[0].focus();arguments[0].click() ", new Object[]{element});
                LOGGER.info("点立即报名");
                Thread.sleep(2000L);
                element = (WebElement)DriverService.wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("div.divide-apply_btn")));
                DriverService.js.executeScript("arguments[0].click() ", new Object[]{element});
                LOGGER.info("确认报名");
                Thread.sleep(1000L);
                element = (WebElement)DriverService.wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".closeBtn")));
                DriverService.js.executeScript("arguments[0].click() ", new Object[]{element});
                LOGGER.info("报名成功，关窗口");
            } else {
                LOGGER.info("立即报名按钮 不存在");
            }
        } catch (Exception var2) {
            LOGGER.info("立即报名失败!!!");
        }

        ((WebElement)DriverService.wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("div.welfare-divide_header-back")))).click();
        return true;
    }

    public void close() {
        try {
            LockService.DRIVERLOCK.lock();
            DriverService.driver.switchTo().window(this.windowTag).close();
            DriverService.driver.switchTo().window(DriverService.inintWindow);
            this.status = false;
        } finally {
            LOGGER.info("关闭福利金浏览器");
            LockService.DRIVERLOCK.unlock();
        }

    }
}
