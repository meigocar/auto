
package com.mei.auto.controller;

import com.mei.auto.messagingstompwebsocket.Greeting;
import com.mei.auto.messagingstompwebsocket.HelloMessage;
import com.mei.auto.messagingstompwebsocket.client.WebsocketClient;
import jakarta.annotation.Resource;
import java.io.BufferedReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Objects;
import java.util.stream.Stream;
import org.apache.commons.compress.utils.Lists;
import org.apache.commons.lang3.math.NumberUtils;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class GreetingController {
    @Resource
    WebsocketClient websocketClient;

    public GreetingController() {
    }

    @MessageMapping({"/hello"})
    @SendTo({"/topic/greetings"})
    public Greeting greeting(HelloMessage message) throws Exception {
        Thread.sleep(1000L);
        if (NumberUtils.isDigits(message.getName())) {
            this.sendLogs(Integer.valueOf(message.getName()));
        }

        return new Greeting("Hello, " + HtmlUtils.htmlEscape(message.getName()) + "!");
    }

    private synchronized void sendLogs(int nums) throws IOException {
        List<String> list = Lists.newArrayList();
        BufferedReader reader = Files.newBufferedReader(Paths.get("./logback.log"));

        String line;
        while((line = reader.readLine()) != null) {
            list.add(line);
        }

        int lenth = list.size();
        if (nums > lenth) {
            nums = lenth;
        }
        list.subList(lenth - nums, lenth).stream().forEach(websocketClient::sendMsg);
    }
}
