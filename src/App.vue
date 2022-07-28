
<template>
  <div class="menu-btn" :class="openMenu ? 'menu-open' : ''">
      <div class="sub-menu-btn" @click="handleMenu">
          <div class="line line-1"></div>
          <div class="line line-2"></div>
          <div class="line line-3"></div>
          <div class="line line-4"></div>
      </div>
  </div>
  <HeaderVue :hide="hideBar" :scrolling="scrollingTop"/>
  <MenuVue />
  <div class="affiliation-content"  @scroll="checkScroll">
      <div class="background-image">
        <img src="./assets/business-affiliate-network.png" alt="">
      </div>
      <div class="block-1">
        <div class="left">
          <div class="title">Affiliate program exclusively tailored to GROW your business & BOOST your potential return-masked-value</div> 
          <p>Increase your profits with the highest rebates & commissions in the industry. </p>
          <a class="signup-btn" href="https://www.invast.com.au/home/#ivp-hsu">Sign up</a>
        </div>
        <div class="right">
        </div>
      </div>
      <div class="block-2">
        <div class="block-2-content">
          <div class="items">
            <div class="item">
              <img class="item-logo" src="./assets/grow.png" alt="">
              <p>Join a growing network of <b>30,000+</b> introducing brokers since 2005.</p>
            </div>
            <div class="item">
              <img class="item-logo" src="./assets/leader.png" alt="">
              <p>Partner with a <b>global leader</b> in the financial markets. </p>
            </div>
          </div>
          <div class="items">
            <div class="item">
              <img class="item-logo" src="./assets/Business.png" alt="">
              <p>Experience our exclusive IB program that <b>suits your business</b>.</p>
              </div>
            <div class="item">
              <img class="item-logo" src="./assets/partnership.png" alt="">
              <p>Build a client network with our <b>advanced partnership solution</b>.</p>
            </div>
          </div>
          
        </div>
      </div>
      <div class="block-3">
        <div class="block">
          <div class="sub-block-1">
          <img class="sub-block-img" src="./assets/Tight-Fixed-Spread-02.png" alt="">
          <div class="sub-block-content">
            <div class="sub-block-title">
              Tightest spreads in the industry
            </div>
            <div class="sub-block-text">
              Starting from <b style="color : #29A5E2;">2 cents</b> on Gold, 0.0* pips on EUR/USD
            </div>
          </div>
        </div>
        <div class="sub-block-2">
          <div class="sub-block-content">
            <div class="sub-block-title">
              Leverage up to 500:1 & swap free
            </div>
            <div class="sub-block-text">
              Swap-Free on most trading instruments with <b style="color : #29A5E2;">leverage up to 500:1</b> 
            </div>
          </div>
          <img class="sub-block-img" src="https://www.invast.com.au/wp-content/uploads/2021/12/iMac.png" alt="">
        </div>
        </div>      
      </div>
      <div class="block-4">
        <div class="block">
          <div class="sub-block">
            <div class="sub-block-content sub-block-left">
              <div class="sub-block-title">
                Cutting-edge trading platforms
              </div>
              <div class="sub-block-text">
                Full ECN platform, negative balance protection, no slippage
              </div>
            </div>
            <div class="sub-block-content sub-block-right">
              <div class="sub-block-title" style="color : #29A5E2;">
                Instant withdrawals
              </div>
              <div class="sub-block-text">
                Ultrafast withdrawals within 24 hours
              </div>
            </div>
          </div>
          <div class="sub-block">
            <div class="sub-block-content sub-block-left">
              <div class="sub-block-title" style="color : #29A5E2;">
                Security of funds
              </div>
              <div class="sub-block-text">
                US $1,000,000 Capital protection per account
              </div>
            </div>
            <div class="sub-block-content sub-block-right">
            <div class="sub-block-title">
              Extra marketing bonus
            </div>
            <div class="sub-block-text">
              Additional Marketing Bonus on top of your rebates
            </div>
          </div>
          </div>
          <div class="sub-block">
            <div class="sub-block-content sub-block-left">
              <div class="sub-block-title">
                Mega prizes
              </div>
              <div class="sub-block-text">
                Mega prizes with our IB Loyalty Program
              </div>
            </div>
            <div class="sub-block-content sub-block-right">
              <div class="sub-block-title" style="color : #29A5E2;">
                Experienced account managers
              </div>
              <div class="sub-block-text">
                A team of dedicated and highly experienced IB managers
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div class="block-5">
        <div class="block-5-content">
          <div class="card card-1">
            <div class="card-title">
              Register
            </div>
            <div class="card-text">
              Register with Invast and sign up to be an IB
            </div>
          </div>
          <div class="card card-2">
            <div class="card-title">
              Introduce
            </div>
            <div class="card-text">
              Refer clients to Invast
            </div>
          </div>
          <div class="card card-3">
            <div class="card-title">
              Earn
            </div>
            <div class="card-text">
              Grow your revenue as your clients trade!
            </div>
          </div>
        </div>
      </div>
      <div class="block-6">
        <div class="block">
          <div class="title">
            Start your trading journey with Invast Global today!
          </div>
          <a class="signup-btn" href="">Sign up</a>
        </div>
      </div>
          
  </div>
  <FooterVue />
</template>

<script>

import HeaderVue from './components/Header.vue'
import FooterVue from './components/Footer.vue'
import MenuVue from './components/Menu.vue'
import { headerMixin } from "./mixins/headerMixin";
import { mapMutations, mapState } from 'vuex';

export default {
  components: {
    HeaderVue,
    FooterVue,
    MenuVue
  },
  computed : {
    ...mapState(["openMenu", "hideBar", "scrollingTop"]),
  },
  mixins: [headerMixin],
  methods:{
      ...mapMutations(["setOpenMenu"]),
      handleMenu(){
          this.setOpenMenu(!this.openMenu)
      }
  },
  mounted(){
    console.log(this.hideBar)
  }
}
</script>

<style lang="scss" scoped>

@import './sass/variables.scss';

  .affiliation-content{
      background: linear-gradient(45deg, #49F8E1 0%, #29A5E2 32%, #225FD2 67%, #1212de 100%);
      padding: 130px 0 120px;
      padding-bottom: 0;
      position: relative;
      overflow: hidden;
      .background-image{

        position: absolute;   
        padding-left: 60rem;
        top: -7rem;
        img{
          width: 700px;
        }
      }
      .block-1{
        justify-content: center;
        align-content: center;
        align-items: center;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        max-width: 1120px;
        width: 90%;
        display: flex;
        flex-direction: row;
        position: relative;
        overflow: hidden;
        .left{
          flex: 1 1 0;
          gap: 2rem;
          display: flex;
          flex-direction: column;

          .title{
            font-family: $font-2;
            font-weight : 700;
            letter-spacing: 0.01rem;
            color: $white;

            font-size: 30px;
            line-height: 40px;

            @media screen and (min-width: 992px){
              font-size: 58px;
              line-height: 70px;
            }
          }
          .signup-btn{
            background-color: $black;
            color: $white;
            border: 1px solid $black;
            padding: 0.5rem 1.4rem;
            font-family: $font-1;
            border-radius: 47px;
            cursor: pointer;
            transition: 0.3s;
            text-align: center;
            font-size: 10px;
            line-height: 17px;
            padding: 0.5rem 1.4rem;
            width: 20%;
            text-decoration: none;

            @media screen and (min-width: 500px) {
                font-size: 15px;
                line-height: 20px;
                padding: 0.5rem 0.5rem;
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
                color: $black;
                text-decoration: none;
            }
          }
          p{
            font-size: 21px;
            font-weight: 400;
            line-height: 30px;
            margin: 0;
            color: $white;
            font-family: $font-1;
          }
        }
        
        .right{
          flex: 0.2 1 0;
          display: none;

          @media screen and (min-width: 992px) {
            display: block;
          }
        }
      }
      .block-2{
        background-color: $white;


        .block-2-content{
          justify-content: center;
          align-content: center;
          align-items: center;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
          display: flex;
          flex-direction: column;
          position: relative;
          max-width: 1120px;
          width: 90%;
          margin-top: 5rem;
          padding: 5rem 0;
          gap: 2rem;
          
          @media screen and (min-width: 992px) {
            flex-direction : row;
            gap: 0;
          }

          .items{
            display: flex;
            flex-direction: column;
            gap: 3rem;

            @media screen and (min-width: 992px) {
              flex-direction : row;
              gap: 0;
            }
          }
          .item {
            display: flex;
            flex-direction: column;
            align-content: center;
            align-items: center;
            gap: 1rem;

            .item-logo{
              width: 60px;
              height: 60px;
              border: 1px solid rgba(0, 0, 0, 0.46);
              padding: 13px 15px;
              border-radius: 20px;
            }
          }
          p{
            font-size: 16px;
            font-weight: 400;
            line-height: 20px;
            margin: 0;
            color: $black;
            font-family: $font-1;
            text-align: center;
          }
        }
      }

      .block{
          justify-content: center;
          align-content: center;
          align-items: center;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
          display: flex;
          position: relative;
          max-width: 1120px;
          width: 90%;
          padding: 5rem 0;
          gap: 8rem;
          flex-direction: column;


          @media screen and (min-width:992px) {
            gap: 4rem;
          }
      }
      
      .sub-block-1{
        display: flex;
        gap: 4rem;

        flex-direction: column;
        align-items: center;

        @media screen and (min-width: 992px) {
          flex-direction: row;
          align-items: flex-start;
          gap: 8rem;
        }
      }
      .sub-block-2{
        display: flex;
        gap: 4rem;

        flex-direction: column;
        align-items: center;

        @media screen and (min-width: 992px) {
          flex-direction: row;
          align-items: flex-start;
          gap: 8rem;
        }
      }

      .sub-block{
        display: flex;
        gap: 2rem;

        flex-direction: column;
        align-items: center;

        @media screen and (min-width: 992px) {
          flex-direction: row;
          gap: 6rem;
        }
      }

      .sub-block-img{
        flex: 1 1 0;
        height: 300px;
        max-width: 350px;
      }
      .sub-block-left{
        text-align: center;

        @media screen and (min-width: 992px){
          text-align: right;
        }
      }

      .sub-block-right{
        text-align: center;

        @media screen and (min-width: 992px){
          text-align: left;
        }
      }
      .sub-block-content{
        flex: 1 1 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .sub-block-title{
        font-family: $font-2;
        font-size: 42px;
        font-weight: bold;
        line-height: 52px;
      }
      .sub-block-text{
        font-family: $font-1;
        font-size: 14px;
        line-height: 21px;
      }

      .block-3{
        background-color: #F5F5F8;
      }
      .block-4{
        background-color: white;
      }
      .block-5{
        background-color: #F5F5F8;
        
      }
      .block-6{
        background: linear-gradient(45deg, #49F8E1 0%, #29A5E2 32%, #225FD2 67%, #1212DC 100%);
      }

      .block-5-content{
          justify-content: center;
          align-content: center;
          align-items: center;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
          display: flex;
          position: relative;
          max-width: 1120px;
          width: 90%;
          padding: 5rem 0;
          gap: 2rem;

          flex-direction: column;

          @media screen and (min-width: 992px) {
            flex-direction: row;
            gap: 5rem;
          }

          .card{
            padding: 15px 20px;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            border-radius: 30px;
            cursor: pointer;

            width: 300px;
            height: 100px;

            @media screen and (min-width: 992px) {
              width: 400px;
              height: 150px;
            }

            &:hover{
              opacity: 0.7;
            }
            
            .card-title{
              font-family: $font-2;
              font-size: 32px;
              font-weight: bold;
              line-height: 40px;
              color: $white;
            }
            .card-text{
              font-size: 16px;
              line-height: 21px;
              max-width: 240px;
              width: 100%;
              margin: 0 0 10px 0;
              font-family: $font-1;
              color: $white;
            }
          }

          .card-1{
            background-color: #8063F5;
            background-image: url("https://www.invast.com.au/wp-content/uploads/2021/12/active-traders-1.png");
            background-repeat: no-repeat;
            background-position: 95%;
          }
          .card-2{
            background: #EC9013;
            background-image: url("https://www.invast.com.au/wp-content/uploads/2021/12/funds-1.png");
            background-repeat: no-repeat;
            background-position: 95%;
          }
          .card-3{
            background: #51E1CF;
            background-image: url("https://www.invast.com.au/wp-content/uploads/2021/12/retail-1.png");
            background-repeat: no-repeat;
            background-position: 95%;
          }
      }

      .block-6{
        text-align: center;
        
        .title{
          max-width: 552px;
          font-family: $font-2;
          font-weight: bold;
          color: $white;
          font-size: 42px;
          font-weight: bold;
          line-height: 50px;
          text-align: center;
        }
        .signup-btn{
            background-color: $black;
            color: $white;
            border: 1px solid $black;
            padding: 0.5rem 1.4rem;
            font-family: $font-1;
            border-radius: 47px;
            cursor: pointer;
            transition: 0.3s;
            text-align: center;
            font-size: 17px;
            line-height: 20px;
            padding: 0.5rem 1.5rem;
            width: 20%;
            text-decoration: none;

            &:hover{
                background-color: $white;
                color: $black;
                transition: 0.3s;
                a{
                    color: $white;
                }
            }

            a{
                color: $white;
                text-decoration: none;
            }
          }
      }
  }
</style>