const vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'day la fb cua tao',
        url: 'https://www.facebook.com/nam.gino.773',
        price: 10000,
        counter: 0,
        clientX: 0,
        clientY: 0,
        A: 0,
        B: 0,
        number: 50,
        name: '',
        bg: 'https://quangcaodanang.com/images//2017/03/loi-ich-khi-cai-dat-auto-tha-tym.jpg',
        listblog: [
            {
                'title': "thang nao dep trai moi doc duoc cai nay",
                'body' : "Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special $event variable.",
            },
            {
                'title': "thang nao dep trai moi doc duoc cai nay",
                'body' : "Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special $event variable.",
            },
            {
                'title': "thang nao dep trai moi doc duoc cai nay",
                'body' : "Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special $event variable.",
            },
            {
                'title': "thang nao dep trai moi doc duoc cai nay",
                'body' : "Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special $event variable.",
            },
            {
                'title': "thang nao dep trai moi doc duoc cai nay",
                'body' : "Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special $event variable.",
            },
                        {
                'title': "thang nao dep trai moi doc duoc cai nay",
                'body' : "Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special $event variable.",
            },            {
                'title': "thang nao dep trai moi doc duoc cai nay",
                'body' : "Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special $event variable.",
            },
            {
                'title': "thang nao dep trai moi doc duoc cai nay",
                'body' : "Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special $event variable.",
            },
            {
                'title': "thang nao dep trai moi doc duoc cai nay",
                'body' : "Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special $event variable.",
            },
            {
                'title': "thang nao dep trai moi doc duoc cai nay",
                'body' : "Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special $event variable.",
            },

            {
                'title': "thang nao dep trai moi doc duoc cai nay",
                'body' : "Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special $event variable.",
            },
            {
                'title': "thang nao dep trai moi doc duoc cai nay",
                'body' : "Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special $event variable.",
            },
            {
                'title': "thang nao dep trai moi doc duoc cai nay",
                'body' : "Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special $event variable.",
            },
            {
                'title': "thang nao dep trai moi doc duoc cai nay",
                'body' : "Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special $event variable.",
            },
            {
                'title': "thang nao dep trai moi doc duoc cai nay",
                'body' : "Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special $event variable.",
            },
            {
                'title': "thang nao dep trai moi doc duoc cai nay",
                'body' : "Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special $event variable.",
            },
            {
                'title': "thang nao dep trai moi doc duoc cai nay",
                'body' : "Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special $event variable.",
            },
            {
                'title': "thang nao dep trai moi doc duoc cai nay",
                'body' : "Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special $event variable.",
            },
            {
                'title': "thang nao dep trai moi doc duoc cai nay",
                'body' : "Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special $event variable.",
            },
            {
                'title': "thang nao dep trai moi doc duoc cai nay",
                'body' : "Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special $event variable.",
            },

        ]
    },

    methods: {
        say: function (text) {
            return 'hello ' + text;
        },
        formatPrice() {
            var number = this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },

        count(e) {
            this.counter += 3;
        },

        client(e) {
            console.log(e);
            this.clientX = e.clientX;
            this.clientY = e.clientY;
        },
        clientchild(e) {
            console.log('clientchild')
        },
    },
    computed: {
        addA() {
            return this.A + this.number;
        },
        addB() {
            return this.B + this.number;
        },
        obj() {
            return {
                backgroundImage: 'url(' + this.bg + ')',
                maginTop: '30px',
                padding: '50px'
            }
        }
    }
});