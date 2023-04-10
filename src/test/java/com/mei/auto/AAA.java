package com.mei.auto;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

public class AAA {

    public static void main(String[] args) throws NoSuchAlgorithmException {
        String str = "Hello, World, wa haha!";
        // 使用Base64编码
        String encoded = Base64.getEncoder().encodeToString(str.getBytes());
        System.out.println("Encoded String: " + encoded);
        // 使用Base64解码
        String decoded = new String(Base64.getDecoder().decode(encoded));
        System.out.println("Decoded String: " + decoded);


        String input = "Hello, World!";
        MessageDigest md = MessageDigest.getInstance("MD5");
        byte[] result = md.digest(input.getBytes());
        StringBuilder sb = new StringBuilder();
        for (byte b : result) {
            sb.append(String.format("%02x", b));
        }
        System.out.println("MD5 hash of \"" + input + "\": " + sb.toString());

    }


}
