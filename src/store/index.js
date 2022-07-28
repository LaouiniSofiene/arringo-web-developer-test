import { createStore } from 'vuex'


export default createStore({
    state: () => ({
        openMenu : false,
        hideBar: false,
        sizeFirstScreen: 0,
        scrollingTop : 0,
        scrollingMaxTop : 0,
        hideLogo : false
    }),
    mutations: {
        setOpenMenu(state, value){
            state.openMenu = value;
        },
        setHideBar(state, value){
            state.hideBar = value;
        },
        setSizeFirstScreen(state, value){
            state.sizeFirstScreen = value;
        },
        setScrollingTop(state,value){
            state.scrollingTop = value
        },
        setScrollingMaxTop(state,value){
            state.scrollingMaxTop = value
        },
        setHideLogo(state, value){
            state.hideLogo = value
        }
    }
})