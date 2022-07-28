<template>
    <div class="header-container" :class="scrolling == 99999 ? 'fixed' : ''">
        <div class="left">
            <div class="logo-container">
                <a href="https://www.invast.com.au/home/">
                    <img class="logo" src="https://www.invast.com.au/wp-content/uploads/2021/12/logo-white.svg" alt="" />
                </a>
            </div>
            <div class="menu-link" @mouseover="mouseover(1)"  @mouseleave="mouseleave(1)">
                <div class="menu-link-title">Clients</div>
                <div :class="listOneDisplay ? 'menu-link-ul ul-hover' : 'menu-link-ul'" @mouseover="mouseover(1)"  @mouseleave="mouseleave(1)">
                    <div class="menu-link-li"><a href="https://www.invast.com.au/clients/active-traders/">Active Traders</a></div>
                    <div class="menu-link-li"><a href="https://www.invast.com.au/clients/funds/">Funds and Offices</a></div>
                    <div class="menu-link-li"><a href="https://www.invast.com.au/clients/account-classification/">Compare Accounts</a></div>
                </div>
            </div>
            <div class="menu-link" @mouseover="mouseover(2)"  @mouseleave="mouseleave(2)">
                <div class="menu-link-title">Trading</div>
                <div :class="listTwoDisplay ? 'menu-link-ul ul-hover' : 'menu-link-ul'" @mouseover="mouseover(2)"  @mouseleave="mouseleave(2)">
                    <div class="menu-link-li"><a href="https://www.invast.com.au/trading/product-guide/">Product Guide</a></div>
                    <div class="menu-link-li"><a href="https://www.invast.com.au/trading/platform-data-fees/">Platform & Data Fees</a></div>
                    <div class="menu-link-li"><a href="https://www.invast.com.au/trading/trading-hours/">Trading Hours</a></div>
                    <div class="menu-link-li"><a href="https://www.invast.com.au/trading/deposit/">Deposit</a></div>
                    <div class="menu-link-li"><a href="https://www.invast.com.au/trading/withdrawal/">Withdraw</a></div>
                    <div class="menu-link-li"><a href="https://www.invast.com.au/trading/single-stock-margin-table-retail/">Single Stock Margin Table</a></div>
                </div>
            </div>
            <div class="menu-link" @mouseover="mouseover(3)"  @mouseleave="mouseleave(3)">
                <div class="menu-link-title"><a href="https://www.invast.com.au/insights/">Insights</a></div>
                <div :class="listThreeDisplay ? 'menu-link-ul ul-hover' : 'menu-link-ul'" @mouseover="mouseover(3)"  @mouseleave="mouseleave(3)">
                    <div class="menu-link-li"><a href="https://www.invast.com.au/insights/#news">News</a></div>
                    <div class="menu-link-li"><a href="https://www.invast.com.au/insights/#youtube">YouTube</a></div>
                </div>
            </div>
            <div class="menu-link" @mouseover="mouseover(4)"  @mouseleave="mouseleave(4)">
                <div class="menu-link-title">Discover</div>
                <div :class="listFourDisplay ? 'menu-link-ul ul-hover' : 'menu-link-ul'" @mouseover="mouseover(4)"  @mouseleave="mouseleave(4)">
                    <div class="menu-link-li"><a href="https://www.invast.com.au/about-us/">About Us</a></div>
                    <div class="menu-link-li"><a href="https://www.invast.com.au/about-us/faq/">FAQ</a></div>
                    <div class="menu-link-li"><a href="https://www.invast.com.au/about-us/contact/">Contact Us</a></div>
                    <div class="menu-link-li"><a href="https://www.invast.com.au/about-us/career/">Careers</a></div>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="menu-button-b">
                <a href="https://www.invast.com.au/iress-login/">Iress login</a>
            </div>
            <div class="menu-button-w">
                <a href="https://www.invast.com.au/prime/">Institutional Clients</a>
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
    props: ["hide","scrolling"],
    methods:{
        mouseover(id){
            if(id == 1){
                this.listOneDisplay = true
                this.listTwoDisplay = false
                this.listThreeDisplay = false
                this.listFourDisplay = false
            }
            else if (id == 2){
                this.listOneDisplay = false
                this.listTwoDisplay = true
                this.listThreeDisplay = false
                this.listFourDisplay = false
            }
            else if (id == 3){
                this.listOneDisplay = false
                this.listTwoDisplay = false
                this.listThreeDisplay = true
                this.listFourDisplay = false
            }
            else if (id == 4){
                this.listOneDisplay = false
                this.listTwoDisplay = false
                this.listThreeDisplay = false
                this.listFourDisplay = true
            }
        },
        mouseleave(id){
            if (id == 1){
                this.listOneDisplay = false
            }
            else if (id == 2){
                this.listTwoDisplay = false
            }
            else if (id == 3){
                this.listThreeDisplay = false
            }
            else if (id == 4){
                this.listFourDisplay = false
            }
        }
    },
    mounted(){
        console.log(this.scrolling)
    }
};
</script>

<style lang="scss">
@import '../sass/variables.scss';

    .header-container{
        background-color: transparent;
        display: flex;
        flex-direction: row;
        padding-top: 1.2rem;
        padding-bottom: 1.2rem;
        align-content: center;
        align-items: center;
        position: absolute;
        z-index: 1;
        
        right: 0;
        left: 0;
        
        gap: 4vw;

        padding-left: 1rem;
        padding-right: 1rem;

        &.fixed{
            position: fixed !important;
        }

        @media screen and (min-width:500px) {
            justify-content: center;
            margin-right: auto;
            margin-left: auto;
            gap: 5vw;
        }
        @media screen and (min-width:550px) {
            gap: 10vw;
        }
        @media screen and (min-width:600px) {
            gap: 20vw;
        }
        @media screen and (min-width:700px) {
            gap: 35vw;
        }
        @media screen and (min-width:792px) {
            gap: 40vw;
        }
        @media screen and (min-width:986px) {
            gap: 50vw;
        }
        @media screen and (min-width:1150px) {
            gap: 18vw;
        }
        @media screen and (min-width:1200px) {
            gap: 12vw;
        }

        .left{
            display: flex;
            flex-direction: row;
            align-items: center;

            .logo{
                width: 54px;
                max-width : auto;
                padding-right: 1rem;
                cursor : pointer;
                padding-top: 0.2rem;
            }
            .menu-link{

                cursor: pointer;
                display: none;
                @media screen and (min-width :1150px) {
                    display: block;
                }

                .menu-link-title{
                    font-size: 16px;
                    line-height: 21px;
                    font-family: $font-1;
                    color: $white;
                    letter-spacing: 0.07rem;
                    font-weight: 500;
                    transition: 0.2s;
                    padding : 1.5rem 1.7rem;

                    a{
                        color: white;
                        text-decoration: none;
                    }

                    &:hover{
                        opacity: 0.6;
                        transition: 0.2s;
                    }
                }

                .menu-link-ul{
                    position: fixed;
                    background-color: $white;
                    box-shadow: 0px 20px 40px 0px rgb(0 0 0 / 16%);
                    border-radius: 8px;
                    min-width: 220px;
                    width: -webkit-max-content;
                    width: -moz-max-content;
                    width: max-content;
                    display: none;
                    padding-top: 1rem;
                    padding-bottom: 1rem;
                    transition: 0.25s ease;
                    transition-delay: 0s;

                    &.ul-hover{
                        display: block;
                        transform: matrix3d(1, 0, 0, 0, 0, 0.96593, -0.25882, 0, 0, 0.25882, 0.96593, 0, 0, 0, 0, 1);
                        transform-origin: 50% -50px;
                        transition-property: transform;
                        will-change: transform, width, height;
                        transform: translateY(0) scaleY(1);
                        &::after{
                            bottom: 100%;
                            left: 50%;
                            border: solid transparent;
                            content: "";
                            height: 0;
                            width: 0;
                            position: absolute;
                            pointer-events: none;
                            border-color: rgba(204, 204, 204, 0);
                            border-bottom-color: $white;
                            border-width: 8px;
                            margin-left: -65px;
                        }
                    }
                   
                    
                    .menu-link-li{
                        font-size: 16px;
                        font-family: $font-1;
                        color: $black;
                        line-height: 26px;
                        padding: 8px 20px !important;

                        a{
                            color: $black;
                            text-decoration: none;
                        }
                    }
                }
            }
        }

        .right{
            display: flex;
            flex-direction: row;
            gap: 0.5rem;

            @media screen and (min-width: 500px) {
                 gap: 2rem;
            }

            .menu-button-b{
                background-color: $black;
                color: $white;
                padding: 0.5rem 1.8rem;
                border: 1px solid $black;
                font-family: $font-1;
                border-radius: 47px;
                cursor: pointer;
                transition: 0.3s;
                text-align: center;
                font-size: 10px;
                line-height: 17px;
                padding: 0.5rem 1.4rem;

                @media screen and (min-width: 500px) {
                    font-size: 15px;
                    line-height: 20px;
                    padding: 0.5rem 1.4rem;
                }

                &:hover{
                    background-color: $white;
                    color: $black;
                    transition: 0.3s;

                    a{
                        color: $black;
                    }
                }

                a{
                    color: $white;
                    text-decoration: none;
                }
            }

            .menu-button-w{
                background-color: $white;
                color: $black;
                border: 1px solid $white;
                padding: 0.5rem 1.4rem;
                font-family: $font-1;
                border-radius: 47px;
                cursor: pointer;
                transition: 0.3s;
                text-align: center;
                font-size: 10px;
                line-height: 17px;
                padding: 0.5rem 1.4rem;

                @media screen and (min-width: 500px) {
                    font-size: 15px;
                    line-height: 20px;
                    padding: 0.5rem 1.4rem;
                }
                

                &:hover{
                    background-color: $black;
                    color: $white;
                    transition: 0.3s;
                    a{
                        color: $white;
                    }
                }

                a{
                    color: $black;
                    text-decoration: none;
                }
            }
        }

        
    }
    
</style>