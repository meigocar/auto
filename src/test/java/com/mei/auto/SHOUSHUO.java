package com.mei.auto;

import org.apache.commons.compress.utils.Lists;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

public class SHOUSHUO {

    public static void main(String[] args) {
        int[] a = {7, 6, 4, 3, 1};

        int[] nums1 = {8, 4, 9, 5};
        int[] nums2 = {9, 4, 9, 8, 4};

        Arrays.stream(intersect(nums1, nums2));
    }

    public void ak(String a){
        var dateFormatThreadLocal = ThreadLocal.withInitial(() -> {
            DateFormat z = new SimpleDateFormat();
            return z;
        });

    }


    public static int[] intersect(int[] nums1, int[] nums2) {
        if (nums1 == null || nums2 == null || nums1.length == 0 || nums2.length == 0) {
            return new int[0];
        }
        var max = new ArrayList<Integer>(10);
        for (int i = 0; i < nums1.length; i++) {
            for (int j = i; j < nums2.length; j++) {
                var list = new ArrayList<Integer>(10);
                for (int k = 0; k < Math.min(nums1.length - i, nums1.length - j); k++) {
                    if (nums1[i] == nums2[j]) {
                        list.add(nums1[i]);
                        if (max.size() < list.size())
                            Collections.copy(max, list);
                    } else {
                        break;
                    }
                }

//                for (int z = j; z < nums2.length; z++) {
//
//                }
            }

        }
        System.out.println(max.toArray());
        return nums1;
    }


    public static int gupiao(int[] nums) {
        int max = 0;
        for (int i = 0; i < nums.length; i++) {
            for (int j = i; j < nums.length; j++) {
                int zhuanqi = nums[j] - nums[i];
                if (zhuanqi > max) {
                    max = zhuanqi;
                }
            }
        }
        return max;
    }


    public static boolean containsDuplicate(int[] nums) {

        int max = 0;
        List maxList = new ArrayList();
        for (int i = 0; i < nums.length; i++) {
            for (int j = i; j < nums.length; j++) {
                var list = Lists.newArrayList();
                int sum = 0;
                for (int z = i; z <= j; z++) {
                    list.add(nums[z]);
                    sum += nums[z];
                }
                if (max < sum) {
                    max = sum;
                    maxList = list;
                }
            }
        }
        System.out.println(max);
        System.out.println(maxList);
        return true;
    }

    public static void zzsfjyz(int a) {
        if (a == 2) {
            System.out.println(a);
            return;
        }
        for (int i = 2; i <= Math.sqrt(a); i++) {
            if (a % i == 0) {
                zzsfjyz(i);
                zzsfjyz(a / i);
                return;
            }
        }
        System.out.println(a);
    }

    public static boolean sxh(int a) {
        int length = String.valueOf(a).length();
        int[] b = new int[length];

        for (int i = 0; i < length; i++) {
            b[i] = (a / (int) Math.pow(10d, (i + 1))) % 10;
        }

        b[length - 1] = a % 10;

        int sum = 0;
        for (int i = 0; i < length; i++) {
            sum += (int) Math.pow(b[i], 3);
        }
        if (a == sum) {
            return true;
        } else
            return false;

    }

    public static int search(int[] values, int v) {
        if (values.length == 0) {
            return 0;
        }
        int start = 0;
        int end = values.length;
        while (start <= end) {
            int mid = (start + end) / 2;
            if (values[mid] == v)
                return mid;
            else if (values[mid] > v) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        ;
        return -1;
    }

}
