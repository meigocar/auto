//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.mei.auto.component;

import com.mei.auto.component.util.LockService;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.Resource;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.PrintStream;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class OracleA1V4 {
    private static final Logger LOGGER = LoggerFactory.getLogger(OracleA1V4.class);
    @Value("${webdriver.driver.active}")
    String webBrowser;
    @Resource
    public DriverService service;
    private Map<String, Object> vars;
    private static SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    private static int win = 0;
    static int suc = 0;
    static int fai = 0;
    final long beginTime = System.currentTimeMillis();
    long procPreTime = System.currentTimeMillis();
    @Value("${request.shape.type}")
    String shapeType;
    @Value("${relogin.timeout}")
    Long reLoginPeriodTimes;
    @Value("${reflush.timeout}")
    Long reFlushPeriodTime;
    @Value("${recommit.waittime.max}")
    int reCommitWaitTime;
    @Value("${azure.time.wait.max}")
    public int azureWait;
    @Value("${begin.wait}")
    Long beginWait;
    boolean status;
    String windowTag;
    final Map<String, Object> paramsMap = new ConcurrentHashMap();

    public boolean isStatus() {
        return this.status;
    }

    public OracleA1V4() {
    }

    @PostConstruct
    public void postCust() {
        this.paramsMap.put("baseTime", 10000);
        this.reLoginPeriodTimes = this.reLoginPeriodTimes * 1000L * 60L;
        this.reFlushPeriodTime = this.reFlushPeriodTime * 1000L * 60L;
        this.reCommitWaitTime *= 1000;
        this.azureWait = this.azureWait * 1000 * 60;
        this.beginWait = this.beginWait * 1000L;
    }

    public void run() throws Exception {
        if (!this.status) {
            this.status = true;
            this.windowInit();
            this.process();
        }
    }

    private void process() throws Exception {
        while(this.status) {
            this.login();
            long reLongTime = System.currentTimeMillis() + this.reLoginPeriodTimes;
            boolean userLogined = true;

            while(true) {
                if (this.status && System.currentTimeMillis() < reLongTime) {
                    try {
                        this.oracleA1();
                    } catch (Exception var10) {
                        var10.printStackTrace();
                        ++fai;
                    }

                    if (win > 0) {
                        SimpleDateFormat var10001 = dateFormat;
                        LOGGER.info(var10001.format(System.currentTimeMillis()) + " ******************** bye bye *****************");
                        PrintStream var10000 = System.out;
                        String var6 = dateFormat.format(System.currentTimeMillis());
                        var10000.println(var6 + " **************I WIN！！！, HA HA:" + win + "***********");
                        var10001 = dateFormat;
                        LOGGER.info(var10001.format(System.currentTimeMillis()) + " ******************** bye bye *****************");
                        var10000 = System.out;
                        var6 = dateFormat.format(System.currentTimeMillis());
                        var10000.println(var6 + DriverService.driver.getCurrentUrl() + "  " + DriverService.driver.getTitle());
                        this.close();
                        return;
                    }

                    try {
                        LOGGER.info("oracelVps close try to lock");
                        LockService.DRIVERLOCK.lock();
                        LOGGER.info("oracelVps close locked");
                        if (!DriverService.driver.getWindowHandle().equals(this.windowTag)) {
                            DriverService.driver.switchTo().window(this.windowTag);
                        }

                        if (!DriverService.driver.getCurrentUrl().contains("cloud/sign-in.html")) {
                            continue;
                        }

                        userLogined = false;
                    } finally {
                        LOGGER.info("oracelVps process release lock");
                        LockService.DRIVERLOCK.unlock();
                    }
                }

                if (userLogined) {
                    this.logout();
                }
                break;
            }
        }

    }

    public void oracleA1() throws Exception {
        if (this.status) {
            try {
                LOGGER.info("oracelVps oracleA1 try to lock");
                LockService.DRIVERLOCK.lock();
                LOGGER.info("oracelVps oracleA1 locked");
                if (!DriverService.driver.getWindowHandle().equals(this.windowTag)) {
                    DriverService.driver.switchTo().window(this.windowTag);
                }

                DriverService.driver.get("https://cloud.oracle.com/compute/instances/create?region=ap-singapore-1");

                //等待页面加载完成
                DriverService.wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("span.region-header-name-text")));
                DriverService.wait.until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(By.cssSelector("#sandbox-compute-container")));
                DriverService.wait.until(ExpectedConditions.jsReturnsValue("return document.readyState='complete'"));

                //点击image
                DriverService.wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#oui-savant__viewstack__container > div:nth-child(2) > div:nth-child(2) > div > div.oui-savant__Panel.oui-savant__Panel--large.oui-savant__Panel__animate > div.oui-savant__Panel--Contents > div.fullscreen-two-thirds-width > div > fieldset:nth-child(6) > div.oui-legend-wrapper.oui-flex.oui-flex-between.oui-flex-top > div.oui-margin-left.oui-flex.oui-flex-top.oui-flex- > button"))).click();
                DriverService.wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#oui-savant__viewstack__container > div:nth-child(2) > div:nth-child(2) > div > div.oui-savant__Panel.oui-savant__Panel--large.oui-savant__Panel__animate > div.oui-savant__Panel--Contents > div.fullscreen-two-thirds-width > div > fieldset:nth-child(6) > div.oui__fieldset-content.oui-fieldset-content-top-zero-padding > div:nth-child(1) > div.create-instance-dialog__picker-result.ux-exp-field-wrapper > div.create-instance-dialog__picker-result__box > div.create-instance-dialog__picker-result__button-container > button"))).click();
                DriverService.wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#oui-savant__viewstack__container > div:nth-child(3) > div:nth-child(2) > div > div.oui-savant__Panel.oui-savant__Panel--medium.oui-savant__Panel__animate > div.oui-savant__Panel--Contents > section > button:nth-child(2) > div > div"))).click();
                DriverService.wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#oui-savant__viewstack__container > div:nth-child(3) > div:nth-child(2) > div > div.oui-savant__Panel.oui-savant__Panel--medium.oui-savant__Panel__animate > div.oui-savant__Panel--Contents > div.oui-margin-medium-top.images-table-wrapper > section > div > div > table > tbody > tr:nth-child(5) > td.oui-table-shrink > input"))).click();
                DriverService.wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#oui-savant__viewstack__container > div:nth-child(3) > div:nth-child(2) > div > div.oui-savant__Panel.oui-savant__Panel--medium.oui-savant__Panel__animate > div.oui-savant__Panel--Footer > button.oui-button.oui-button-primary"))).click();
                //点击网络
                DriverService.wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#oui-savant__viewstack__container > div:nth-child(2) > div:nth-child(2) > div > div.oui-savant__Panel.oui-savant__Panel--large.oui-savant__Panel__animate > div.oui-savant__Panel--Contents > div.fullscreen-two-thirds-width > div > fieldset:nth-child(7) > div.oui-legend-wrapper.oui-flex.oui-flex-between.oui-flex-top > div.oui-margin-left.oui-flex.oui-flex-top.oui-flex- > button"))).click();
                DriverService.wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("span.platform-image-version")));
                WebElement element = DriverService.wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".oui-fieldset-default:nth-child(6) .oui-button")));
                DriverService.js.executeScript("arguments[0].scrollIntoView();arguments[0].click()", new Object[]{element});
                WebElement vcnId = DriverService.wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("vcnId")));
                DriverService.js.executeScript("arguments[0].scrollIntoView();", new Object[]{vcnId});
                DriverService.wait.until(ExpectedConditions.presenceOfNestedElementLocatedBy(vcnId, By.xpath("//option[. = 'vcn-20220115-0032']")));
                vcnId.findElement(By.xpath("//option[. = 'vcn-20220115-0032']")).click();

                //等待子网的值加载完成
                var dropdown = DriverService.driver.findElement(By.name("subnetId"));
                DriverService.wait.until(ExpectedConditions.presenceOfNestedElementLocatedBy(dropdown,By.xpath("//option[text()='subnet-20220115-0032（区域）']")));

                (DriverService.wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".oui-flex:nth-child(2) > .oui-margin-small-bottom:nth-child(3) .oui-form-label")))).click();
                DriverService.driver.findElement(By.name("sshKey")).sendKeys(new CharSequence[]{"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDAtURiRFDLWNmRgh5rxW1X/ko46eNIEAiIR3assoz7LGTYpwikAEIUM8ivvGB3R5OID3oTNnznHMuDHSBLIvuOHdB6lh8ej6myzYHq3tB32W2sUgsDGpcLsRa/HHEAceai4XrDm7etoPka3mf7yWE8x4YZHpgwjnmsd0GhMMtQcp/DywpWEvnIACRuWhY9Ygk5Rsxke2hczqtfa014VNB6WX6qvUhQANBNcOr9k/Gx6vuZ6IqPKGf/QQufa7+WlvLlfc6yUIK5dTIa5FhrogmM0Wqe65iuUegHoYlFErWFugMaSGvDW3SyA/tvAE7a6kCi7uF+xdb0Y1djhmEiZWyNHsItiZRuPmV+FOX6WhSDdpfJBJ9WV2+yiW3HZzFdGl4lQZQtDfEp4HS4ubg9C9v997zJtE/8pdqCVwkYAXReuPPPNeQ0TxkhllUBBVlyaKyou1xFbO8TqPY8eWpXcWnkqpLLGRg9KfHYRA7Adi3mO4FtutUbWUqtEdl86N/ImL0= mei@meijinnhundeMBP"});
            } finally {
                LockService.DRIVERLOCK.unlock();
                LOGGER.info("oracleVps oracleA1 release Lock");
            }

            long now;
            for(long reFlushTime = System.currentTimeMillis() + this.reFlushPeriodTime; System.currentTimeMillis() < reFlushTime; this.procPreTime = now) {
                if (!this.status) {
                    return;
                }

                String text;
                try {
                    LOGGER.info("oracleVps press button try lock");
                    LockService.DRIVERLOCK.lock();
                    if (!DriverService.driver.getWindowHandle().equals(this.windowTag)) {
                        DriverService.driver.switchTo().window(this.windowTag);
                        DriverService.wait.until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(By.cssSelector("#sandbox-compute-container")));
                        DriverService.wait.until(ExpectedConditions.jsReturnsValue("return document.readyState='complete'"));
                    }

                    DriverService.wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".oui-button-primary"))).click();
                    ++suc;
                    DriverService.wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".oui-savant__Panel--PanelMessageBlock")));
                    text = DriverService.driver.findElement(By.cssSelector(".oui-savant__Panel--PanelMessageBlock")).getText();
                } finally {
                    LockService.DRIVERLOCK.unlock();
                    LOGGER.info("oracleVps press button release lock");
                }

                if (text.contains("因为您已达到限制")) {
                    ++win;
                    if (win >= 5) {
                        return;
                    }
                } else {
                    win = 0;
                }

                now = System.currentTimeMillis();
                LOGGER.info(text);
                long pastMins = (now - this.beginTime) / 60000L;
                long hours = pastMins / 60L;
                long mins = pastMins - hours * 60L;
                LOGGER.info(String.format("oracleVps, %s, past: %d:%d, cost:%d, suc:%d || fail:%d || win:%d", dateFormat.format(System.currentTimeMillis()), hours, mins, (now - this.procPreTime) / 1000L, suc, fai, win));
                Thread.sleep((long)((new Random()).nextInt(this.reCommitWaitTime) + (Integer)this.paramsMap.get("baseTime")));
            }

        }
    }

    public void close() throws InterruptedException {
        this.status = false;

        try {
            LOGGER.info("oracelVps close try to lock");
            LockService.DRIVERLOCK.lock();
            LOGGER.info("oracelVps close locked");
            DriverService.driver.switchTo().window(this.windowTag).close();
            DriverService.driver.switchTo().window(DriverService.inintWindow);
            LOGGER.info("关闭 oracle vps 浏览器");
        } finally {
            LockService.DRIVERLOCK.unlock();
            LOGGER.info("oracle vps release locked");
        }

    }

    public Map<String, Object> getParamsMap() {
        return this.paramsMap;
    }

    public void windowInit() {
        try {
            LOGGER.info("oracelVps windowInit try to lock");
            LockService.DRIVERLOCK.lock();
            LOGGER.info("oracelVps windowInit locked");
            this.windowTag = DriverService.driver.switchTo().newWindow(WindowType.TAB).getWindowHandle();
            DriverService.driver.get("https://www.oracle.com/cloud/sign-in.html");
            DriverService.driver.manage().window().setSize(new Dimension(1400, 1600));
        } finally {
            LockService.DRIVERLOCK.unlock();
            LOGGER.info("oracelVps windowInit release Lock");
        }

    }

    public void login() throws Exception {
        int n = 0;

        while(this.status) {
            try {
                LOGGER.info("oracelVps login try to lock");
                LockService.DRIVERLOCK.lock();
                LOGGER.info("oracelVps login locked");
                if (!DriverService.driver.getWindowHandle().equals(this.windowTag)) {
                    DriverService.driver.switchTo().window(this.windowTag);
                }

                DriverService.driver.get("https://www.oracle.com/cloud/sign-in.html");
                WebElement cloudAccountName = DriverService.wait.until(ExpectedConditions.elementToBeClickable(By.id("cloudAccountName")));
                cloudAccountName.clear();
                cloudAccountName.sendKeys(new CharSequence[]{"mjc88"});
                LOGGER.info("login step 1 before");
                DriverService.wait.until(ExpectedConditions.elementToBeClickable(By.id("cloudAccountButton"))).click();
                LOGGER.info("login step 1 success");
                Thread.sleep(3000L);
                LOGGER.info("pageTitle:" + DriverService.driver.getTitle());
                if (!DriverService.driver.getCurrentUrl().contains("cloud.oracle.com/?tenant=mjc88&region=ap-singapore-1")) {
                    DriverService.driver.switchTo().parentFrame();
                    LOGGER.info("login steping 2 before");
                    WebDriverWait wait = new WebDriverWait(DriverService.driver, Duration.ofSeconds(30L));
                    wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("submit-federation")));
                    LOGGER.info("login steping 2");
                    DriverService.driver.findElement(By.id("submit-federation")).submit();
                    LOGGER.info("login step 2 sucess");
                    wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("idcs-signin-basic-signin-form-username")));
                    DriverService.driver.findElement(By.id("idcs-signin-basic-signin-form-username")).sendKeys(new CharSequence[]{"mjc.88@126.com"});
                    DriverService.driver.findElement(By.id("idcs-signin-basic-signin-form-password|input")).sendKeys(new CharSequence[]{"JInchun@4515"});
                    LOGGER.info("login enter username,pass");
                    DriverService.driver.findElement(By.cssSelector("#idcs-signin-basic-signin-form-submit .oj-button-label")).click();
                    LOGGER.info("login finish");
                    Thread.sleep(2000L);
                    wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#home\\:quick-actions\\:item\\:compute-instance")));
                    LOGGER.info("logined success!!!");
                    return;
                }

                LOGGER.info("allready logined success!!!");
            } catch (Exception var8) {
                var8.printStackTrace();
                int var10001 = n++;
                LOGGER.info("login fail, replay:" + var10001);
                continue;
            } finally {
                LockService.DRIVERLOCK.unlock();
                LOGGER.info("oracelVps windowInit release Lock");
            }

            return;
        }

    }

    void logout() throws Exception {
        while(this.status) {
            try {
                try {
                    LOGGER.info("oracelVps logout try to lock");
                    LockService.DRIVERLOCK.lock();
                    LOGGER.info("oracelVps logout locked");
                    LOGGER.info("session logout begin");
                    if (!DriverService.driver.getWindowHandle().equals(this.windowTag)) {
                        DriverService.driver.switchTo().window(this.windowTag);
                    }

                    DriverService.driver.get("https://cloud.oracle.com/?region=ap-singapore-1");
                    DriverService.driver.switchTo().parentFrame();
                    DriverService.wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("user-circle-rect")));
                    WebElement userE = DriverService.driver.findElement(By.id("user-circle-rect"));
                    userE.click();
                    DriverService.driver.findElement(By.id("user-menu-sign-out")).click();
                    DriverService.wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".form-federated > h4")));
                    Thread.sleep(1000L);
                    LOGGER.info("session logout finish");
                    return;
                } catch (Exception var6) {
                    String curl = DriverService.driver.getCurrentUrl();
                    if (curl != null && curl.contains("sign-in.html")) {
                        LOGGER.info("session logout had allready finished");
                        return;
                    }
                }
            } finally {
                LockService.DRIVERLOCK.unlock();
                LOGGER.info("oracelVps logout release Lock");
            }
        }

    }

    public WebDriver getDriver() {
        return DriverService.driver;
    }
}
