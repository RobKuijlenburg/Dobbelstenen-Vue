var app = new Vue ({
    el: '#root',
    data: {
        throws: {}
    },

    methods: {
        randomNumbers() {
            for (i = 0; i <=7; i++){
                let randomNum = (Math.floor(Math.random() * 6)) + 1;
                console.log(randomNum);
                if(this.throws[randomNum] === undefined) {
                    this.$set(this.throws, randomNum, 1);
                } else {
                    this.$set(this.throws, randomNum, ++this.throws[randomNum]);
                }
            }

            console.log(this.throws);

        },

        resetThrows() {
            this.throws = {};
        }
    }
})

