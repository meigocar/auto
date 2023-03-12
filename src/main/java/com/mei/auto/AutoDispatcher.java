//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.mei.auto;

import com.mei.auto.component.DIDIFLJ;
import com.mei.auto.component.OracleA1V4;
import com.mei.auto.component.Qiandao;
import jakarta.annotation.Resource;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import org.springframework.stereotype.Service;

@Service
public class AutoDispatcher {
    ExecutorService executorService = Executors.newFixedThreadPool(10);
    @Resource
    OracleA1V4 oracleA1V4;
    @Resource
    Qiandao qiandao;
    @Resource
    DIDIFLJ didiflj;

    public AutoDispatcher() {
    }

    public boolean startOracleVpsCreateTask() {
        this.executorService.execute(() -> {
            try {
                this.oracleA1V4.run();
            } catch (Exception var2) {
                throw new RuntimeException(var2);
            }
        });
        return true;
    }

    public boolean getOracelCreateStatus() {
        return this.oracleA1V4.isStatus();
    }

    public boolean stopOracleVpsCreateTask() {
        try {
            this.oracleA1V4.close();
            return true;
        } catch (Exception var2) {
            throw new RuntimeException(var2);
        }
    }

    public boolean startQianDao() {
        this.executorService.execute(() -> {
            try {
                this.qiandao.start();
            } catch (Exception var2) {
                throw new RuntimeException(var2);
            }
        });
        return true;
    }

    public boolean closeQianDao() {
        try {
            this.qiandao.close();
            return true;
        } catch (Exception var2) {
            throw new RuntimeException(var2);
        }
    }

    public boolean startDDFLJ() {
        this.executorService.execute(() -> {
            try {
                this.didiflj.start();
            } catch (Exception var2) {
                throw new RuntimeException(var2);
            }
        });
        return true;
    }

    public boolean closeDDFLJ() {
        try {
            this.didiflj.close();
            return true;
        } catch (Exception var2) {
            throw new RuntimeException(var2);
        }
    }

    public Map<String, Object> getParamsMap() {
        Map<String, Object> paramsMap = this.oracleA1V4.getParamsMap();
        return paramsMap;
    }
}
