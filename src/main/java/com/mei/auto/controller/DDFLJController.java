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
public class DDFLJController {
    @Resource
    AutoDispatcher autoDispatcher;

    public DDFLJController() {
    }

    @GetMapping({"/didi/ddflj"})
    public String oracleVps(@RequestParam("command") String command) {
        if ("start".equals(command)) {
            this.autoDispatcher.startDDFLJ();
        } else {
            this.autoDispatcher.closeDDFLJ();
        }

        return String.format("didiflj is running");
    }
}
