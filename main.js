var app = new Vue ({
    el: '#root',
    data: {
        throws: {}
    },

    methods: {
        randomNumbers() {
            for (i = 0; i <=7; i++){
                let randomNum = (Math.floor(Math.random() * 6)) + 1;
                if(this.throws[randomNum] === undefined) {
                    this.throws[randomNum] = 1;
                } else {
                    this.throws[randomNum]++;
                }
            }

            console.log(this.throws);

        }
    }
})

