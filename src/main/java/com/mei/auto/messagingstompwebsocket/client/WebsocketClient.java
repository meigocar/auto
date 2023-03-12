//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.mei.auto.messagingstompwebsocket.client;

import ch.qos.logback.classic.spi.ILoggingEvent;
import com.mei.auto.messagingstompwebsocket.Greeting;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.util.HtmlUtils;

@Component("websocketClient")
public class WebsocketClient {
    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    public WebsocketClient() {
    }

    public void sendMsg(ILoggingEvent eventObject) {
        this.sendMsg(eventObject.getFormattedMessage());
    }

    public void sendMsg(String msg) {
        this.messagingTemplate.convertAndSend("/topic/greetings", new Greeting(HtmlUtils.htmlEscape(msg)));
    }
}
