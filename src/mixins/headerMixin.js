import {mapState, mapMutations} from "vuex";

/**
 * Mixin Rand
 * Return a integer numeric value between min and max inclusive both.
 */

 export const headerMixin = {
    data: function(){
        return{
            w: window,
            prevScroll: 0,
            curScroll:0,
            direction: 0,
            prevDirection:0,
            hideHoverHeader: false
        }
    },
    computed:{
        ...mapState([
            'sizeFirstScreen',
            'scrollingTop',
            'ScrollingMaxTop'
        ]),
    },
    methods: {

        checkScroll(e) {

            /*
            ** Find the direction of scroll
            ** 0 - initial, 1 - up, 2 - down
            */
           
            let result = (this.sizeFirstScreen - e.srcElement.scrollTop) / 2
            if(result < -480){
                this.setScrollingTop(99999);
              } else {
                this.setScrollingTop(Math.floor(result));
                // console.log(result)
            }
            this.curScroll = e.srcElement.scrollTop;
            if (this.curScroll > this.prevScroll) {
                //scrolled up
                this.direction = 2;
                this.hideHoverHeader = true;
            }
            else if (this.curScroll < this.prevScroll) {
                //scrolled down
                this.direction = 1;
                this.hideHoverHeader = true;
            }

            if (this.direction !== this.prevDirection) {
                this.toggleHeader(this.direction, this.curScroll, e);
            }

            this.prevScroll = this.curScroll;

            this.setScrollingMaxTop(Math.floor(result))
        },

        toggleHeader(direction, curScroll, element) {
            if (direction === 2 && curScroll > 52 && element.srcElement.scrollTop > 15 ) {
                //replace 52 with the height of your header in px
                    this.setHideBar(true);
                    this.prevDirection = direction;
            }
            else if (direction === 1) {
                this.setHideBar(false);
                this.prevDirection = direction;
            }
        },

        ...mapMutations([
            'setHideBar',
            'setScrollingTop',
            'setScrollingMaxTop'
        ])

    },

    created() {
        this.prevScroll = this.w.scrollY
    },

    mounted(){
        let ref = this;
        // this.checkScroll();
        // window.addEventListener('scroll', this.checkScroll, {passive: true});

    }
}
