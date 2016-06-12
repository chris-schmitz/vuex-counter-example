import Vue from 'vue'

import store from './store'
import App from './App.vue'


new Vue({
	el: 'body',
	store,
	components: { App }
})
