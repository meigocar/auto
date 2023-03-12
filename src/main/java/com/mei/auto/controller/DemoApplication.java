//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.mei.auto.controller;

import com.mei.auto.AutoDispatcher;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoApplication {
    @Resource
    AutoDispatcher autoDispatcher;

    public DemoApplication() {
    }

    @GetMapping({"/hello"})
    public String hello(@RequestParam(value = "name",defaultValue = "World") String name) {
        return String.format("Hello %s!", name);
    }

    @GetMapping({"/oracleVps"})
    public String oracleVps(@RequestParam("command") String command) {
        if ("start".equals(command)) {
            this.autoDispatcher.startOracleVpsCreateTask();
        } else {
            this.autoDispatcher.stopOracleVpsCreateTask();
        }

        return String.format("oracle vps status :" + this.autoDispatcher.getOracelCreateStatus());
    }

    @GetMapping({"/oracleVpsParams"})
    public String oracleVpsParams(@RequestParam("baseTime") Integer baseTime) {
        this.autoDispatcher.getParamsMap().put("baseTime", baseTime);
        return String.format("oracle vps status :" + this.autoDispatcher.getOracelCreateStatus());
    }
}
