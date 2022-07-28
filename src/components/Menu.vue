 <template>
    <div class="menu-container" v-if="openMenu">
        <div class="menu">
            <div class="menu-item">
                <div :class="listOneDisplay ? 'menu-item-main open' : 'menu-item-main'" @click="listOneDisplay = !listOneDisplay">
                    <div class="menu-item-title">
                        Clients
                    </div>
                    <font-awesome-icon icon="fa-solid fa-plus" />
                </div>
                <div class="menu-list" v-if="listOneDisplay">
                    <div class="menu-list-item">Active Traders</div>
                    <div class="menu-list-item">Funds and Offices</div>
                    <div class="menu-list-item">Compare Accounts</div>
                </div>
            </div>
           <div class="menu-item">
                <div :class="listTwoDisplay ? 'menu-item-main open' : 'menu-item-main'" @click="listTwoDisplay = !listTwoDisplay">
                    <div class="menu-item-title">
                        Trading
                    </div>
                    <font-awesome-icon icon="fa-solid fa-plus" />
                </div>
                <div class="menu-list" v-if="listTwoDisplay">
                    <div class="menu-list-item">Product Guide</div>
                    <div class="menu-list-item">Platform & Data Fees</div>
                    <div class="menu-list-item">Trading Hours</div>
                    <div class="menu-list-item">Deposit</div>
                    <div class="menu-list-item">Withdraw</div>
                    <div class="menu-list-item">Single Stock Margin Table</div>
                </div>
            </div>
            <div class="menu-item">
                <div :class="listThreeDisplay ? 'menu-item-main open' : 'menu-item-main'" @click="listThreeDisplay = !listThreeDisplay">
                    <div class="menu-item-title">
                        Insights
                    </div>
                    <font-awesome-icon icon="fa-solid fa-plus" />
                </div>
                <div class="menu-list" v-if="listThreeDisplay">
                    <div class="menu-list-item">News</div>
                    <div class="menu-list-item">YouTube</div>
                </div>
            </div>
            <div class="menu-item">
                <div :class="listFourDisplay ? 'menu-item-main open' : 'menu-item-main'" @click="listFourDisplay = !listFourDisplay">
                    <div class="menu-item-title">
                        Discover
                    </div>
                    <font-awesome-icon icon="fa-solid fa-plus" />
                </div>
                <div class="menu-list" v-if="listFourDisplay">
                    <div class="menu-list-item">About Us</div>
                    <div class="menu-list-item">FAQ</div>
                    <div class="menu-list-item">Contact Us</div>
                    <div class="menu-list-item">Careers</div>
                </div>
            </div>
        </div>
    </div>
 </template>
 
 <script>
 import { mapState } from 'vuex';

 export default {
    data(){
        return{
            listOneDisplay : false,
            listTwoDisplay : false,
            listThreeDisplay : false,
            listFourDisplay : false
        }
    },
    computed : {
       ...mapState(["openMenu"]),
    }
 }
 </script>
 
 <style lang="scss">
 @import '../sass/variables.scss';

    .menu-container{
        background-color: #225FD2;
        height: 100%;
        width: 100%;
        position: fixed;
        z-index: 2;
        overflow: auto;

        .menu{
            padding-top: 6rem;
        }
        .menu-item-main{
            display: flex;
            align-items: center;
            border-bottom: 1px solid rgba(0,0,0,0.15);
            padding: 20px !important;

            &.open{
                border: none;

                .menu-item-title{
                    opacity: 0.6;
                }

                .fa-plus{
                    -webkit-transform: rotate(-310deg) translate3d(0px, 3px, 0);
                    transform: rotate(-310deg) translate3d(0px, 3px, 0);
                }
            }

            .menu-item-title{
                font-family: $font-1;
                font-size: 16px;
                line-height: 21px;
                color: $white;
                letter-spacing: 0.07rem;
                flex: 1 1 0;
            }
            .fa-plus{
                color: $white;
                width: 20px;
                height: 20px;
                transition-property: opacity, -webkit-transform, transform;
                transition-duration: 0.4s;
                -webkit-transform: rotate(0deg) translate3d(0, 0, 0);
                transform: rotate(0deg) translate3d(0, 0, 0);
                opacity: 1;
            }
        }
        .menu-list{
            transform: matrix3d(1, 0, 0, 0, 0, 0.96593, -0.25882, 0, 0, 0.25882, 0.96593, 0, 0, 0, 0, 1);
            transform-origin: 50% -50px;
            transition: 0.25s ease;
            transition-delay: 0s;
            transition-property: transform;
            will-change: transform, width, height;
            padding: 20px 0;
            min-width: 220px;

            .menu-list-item{
                padding: 15px 40px !important;
                color: $white;
                font-family: $font-1;
                font-size: 15px;
                line-height: 25px;
                letter-spacing: 0.07rem;
                border-bottom: 1px solid rgba(0,0,0,0.15);
            }
        }
        
    }
 </style>