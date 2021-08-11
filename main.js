const DICE_SIDES = 6

const app = new Vue ({
    el: '#root',
    data: {
        throws: {}
    },
    methods: {
        randomNumbers() {
            for (let i = 0; i <=7; i++){
                const randomNum = (Math.floor(Math.random() * DICE_SIDES)) + 1;
                this.throws[randomNum]++
                // console.log(randomNum);
                // if(this.throws[randomNum] === undefined) {
                //     this.$set(this.throws, randomNum, 1);
                // } else {
                //     this.$set(this.throws, randomNum, ++this.throws[randomNum]);
                // }
            }
            console.log(this.throws);
        },
        resetThrows() {
            this.throws = {};
            for (let side = 1; side <= DICE_SIDES; side++) {
                this.$set(this.throws, side, 0)
            }
        }
    },
    mounted() {
        this.resetThrows()
    },
})

