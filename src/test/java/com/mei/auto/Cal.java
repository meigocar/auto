package com.mei.auto;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.util.ArrayList;
import java.util.List;

public class Cal {

    public static void main(String[] args) {
        String s = "1 + 4 / (2 + 2) - 3 /3";
//        String s = "2+3*4-5";

        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("js");

        try {
            Object result = engine.eval(s.replace("\s",""));
            System.out.println("计算结果是：" + result.toString());
        } catch (Exception e) {
            System.out.println("表达式无效！");
        }

        System.out.println("计算结果是" + cal(s));
    }

    public static Integer cal(String o) {
       String s = o.replace("\s","");
        List<String> list = new ArrayList<>();
        StringBuffer cont = new StringBuffer();
        List<String> operate = new ArrayList<>();
        for (int i = 0; i < s.length(); i++) {
            String c = s.substring(i, i + 1);
            if (c.equals("+") || c.equals("-") || c.equals("/") || c.equals("*")) {
                operate.add(c);
                list.add(cont.toString().trim());
                cont = new StringBuffer();
            } else if (c.equals("(")) {
                var substring = s.substring(i + 1, s.lastIndexOf(")"));
                cont = new StringBuffer();
                cont.append(cal(substring));
                i = s.lastIndexOf(")");
            }  else
                cont.append(c);

        }
        list.add(cont.toString());
        System.out.println(list);
        System.out.println(operate);


        for (int i = 0; i < operate.size(); i++) {
            int zhi = 0;
            if (operate.get(i).equals("*")) {
                zhi = Integer.valueOf(list.get(i)) * Integer.valueOf(list.get(i + 1));
            } else if (operate.get(i).equals("/")) {
                zhi = Integer.valueOf(list.get(i)) / Integer.valueOf(list.get(i + 1));
            } else {
                continue;
            }
            operate.remove(i);
            list.remove(i);
            list.set(i, String.valueOf(zhi));
            i--;
        }
        int sum = Integer.valueOf(list.get(0));
        for (int i = 0; i < operate.size(); i++) {
            if (operate.get(i).equals("+")) {
                sum += Integer.valueOf(list.get(i + 1));
            } else {
                sum -= Integer.valueOf(list.get(i + 1));
            }
        }
        System.out.println(sum);
        System.out.println("======");
        return sum;
    }
}
