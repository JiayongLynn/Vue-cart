import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const routes = [{
		path: '/',
		component: Index
	},
	{
		path: '/test',
		component: Test
	}
]
App.mpType = 'app'

const app = new Vue({
	App
})
app.$mount()
