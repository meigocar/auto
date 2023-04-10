package com.mei.auto;

public class Test {

    static class Nodes {
        int v;
        Nodes next;

        public Nodes(int v, Nodes next) {
            this.v = v;
            this.next = next;
        }

        @Override
        public String toString() {
            return "Nodes{" +
                    "v=" + v +
                    ", next=" + next +
                    '}';
        }
    }

    public static void main(String[] a) {

        var nodes1 = new Nodes(10, new Nodes(20, new Nodes(30, null)));
        var nodes2 = new Nodes(1, new Nodes(23, new Nodes(32, null)));

        Nodes init = new Nodes(0, null);
        Nodes cur = init;
        while (nodes1 != null && nodes2 != null) {
            if (nodes2.v >= nodes1.v) {
                cur.next = nodes1;
                nodes1 = nodes1.next;
            } else {
                cur.next = nodes2;
                nodes2 = nodes2.next;
            }
            cur = cur.next;
        }

        if (nodes2 != null) {
            cur.next = nodes2;
        } else if (nodes1 != null) {
            cur.next = nodes1;
        }
        while ((init = init.next) != null) {
            System.out.println(init.v);
        }

    }
}
