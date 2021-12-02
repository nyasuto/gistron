import {createApp} from 'vue'
import App from './App.vue'

import BalmUI from 'balm-ui'
import BalmUIPlus from 'balm-ui-plus';
import 'balm-ui-css'


createApp(App)
    .use(BalmUI, {
        UiTopAppBar: {},
        UiList: {},
        $theme: {}
    })
    .use(BalmUIPlus)
    .mount('#app')
