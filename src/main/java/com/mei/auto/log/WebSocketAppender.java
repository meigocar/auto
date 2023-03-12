//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.mei.auto.log;

import ch.qos.logback.classic.spi.ILoggingEvent;
import ch.qos.logback.core.AppenderBase;
import com.mei.auto.component.util.ApplicationContextUtil;
import com.mei.auto.messagingstompwebsocket.client.WebsocketClient;
import org.springframework.context.ApplicationContext;

public class WebSocketAppender extends AppenderBase<ILoggingEvent> {
    WebsocketClient websocketClient;

    public WebSocketAppender() {
    }

    protected void append(ILoggingEvent eventObject) {
        if (this.websocketClient == null) {
            ApplicationContext applicationContext = ApplicationContextUtil.getApplicationContext();
            if (applicationContext == null) {
                return;
            }

            this.websocketClient = (WebsocketClient)applicationContext.getBean("websocketClient", WebsocketClient.class);
        }

        this.websocketClient.sendMsg(eventObject);
    }
}
