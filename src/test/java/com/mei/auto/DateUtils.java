package com.mei.auto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class DateUtils {


    public static void main(String[] args) {
        LocalDate start = LocalDate.of(2022, 10, 2);
        LocalDate end = LocalDate.of(2023, 4, 3);

        LocalDate c = LocalDate.of(2022, 4, 29);

        List<DateRange> ranges = splitDateRange(start, end, c);

        for (DateRange range : ranges) {
            System.out.println(range);
        }
    }


    public static class DateRange {
        public LocalDate start;
        public LocalDate end;

        public DateRange(LocalDate start, LocalDate end) {
            this.start = start;
            this.end = end;
        }

        @Override
        public String toString() {
            return "DateRange{" +
                    "start=" + start +
                    ", end=" + end +
                    '}';
        }
    }

    public static List<DateRange> splitDateRange(LocalDate startDate, LocalDate endDate, LocalDate c) {
        List<DateRange> ranges = new ArrayList<>();
        LocalDate firstMonthStart;
        int day = c.getDayOfMonth();
        if (day >= 1 && day <= 28) {
            LocalDate tempStart = startDate.withDayOfMonth(day);
            firstMonthStart = startDate.withDayOfMonth(day);
            if(tempStart.isBefore(startDate)) {
                firstMonthStart = tempStart.plusMonths(1);
                tempStart = tempStart.plusMonths(1);
            }
            //增加头部时间区间
            if(startDate.getDayOfMonth()!=c.getDayOfMonth()) {
                headList(ranges,startDate,firstMonthStart);
            }
            //增加可拆分月时间区间
            while (!tempStart.isAfter(endDate)) {
                LocalDate tempEnd = tempStart.plusMonths(1).minusDays(1);
                if (!tempEnd.isAfter(endDate)) {
                    ranges.add(new DateRange(tempStart, tempEnd));
                }
                tempStart = tempStart.plusMonths(1);
            }
        } else {
            var n = c.lengthOfMonth() - day;
            LocalDate tempStart = startDate.withDayOfMonth(startDate.lengthOfMonth() - n);
            firstMonthStart = startDate.withDayOfMonth(startDate.lengthOfMonth() - n);

            if(tempStart.isBefore(startDate)) {
                tempStart = tempStart.plusMonths(1);
                tempStart = tempStart.withDayOfMonth(tempStart.lengthOfMonth()-n);
                firstMonthStart = tempStart.withDayOfMonth(tempStart.lengthOfMonth()-n);
            }
            //增加头部时间区间
            if(startDate.lengthOfMonth()-startDate.getDayOfMonth()!=n) {
                headList(ranges,startDate,firstMonthStart);
            }
            while (!tempStart.isAfter(endDate)) {
                LocalDate tempEnd = tempStart.plusMonths(1);
                tempEnd = tempEnd.withDayOfMonth(tempEnd.lengthOfMonth()-n-1);
                if (!tempEnd.isAfter(endDate)) {
                    ranges.add(new DateRange(tempStart, tempEnd));
                }
                tempStart = tempEnd.plusDays(1);
            }
        }

        return ranges;
    }

    public static void headList(List<DateRange> ranges,LocalDate startDate,LocalDate firstMonthStart){
        //下面代码为拆日期头部不满一个月的时间段
        var firstEndDate = startDate.withDayOfMonth(startDate.lengthOfMonth());
        if (startDate.getMonthValue()==firstMonthStart.getMonthValue()) {
            ranges.add(new DateRange(startDate, firstMonthStart.minusDays(1)));
        } else {
            ranges.add(new DateRange(startDate, firstEndDate));
            ranges.add(new DateRange(firstEndDate.plusDays(1), firstMonthStart.minusDays(1)));
        }
    }
}
