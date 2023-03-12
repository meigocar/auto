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
public class QiandoController {
    @Resource
    AutoDispatcher autoDispatcher;

    public QiandoController() {
    }

    @GetMapping({"/didi/qiandao"})
    public String oracleVps(@RequestParam("command") String command) {
        if ("start".equals(command)) {
            this.autoDispatcher.startQianDao();
        } else {
            this.autoDispatcher.closeQianDao();
        }

        return String.format("is running");
    }
}
