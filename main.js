import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
const Cart = {
	debug: true,
	state:{
		list:[]
	},
	setMessageAction (newValue) {
		this.state.list = newValue
	},
	clearMessageAction () {
		this.state.list = ''
	},
	changeListAction (index,value) {
		this.state.list[index].count = value;
	}
}
Vue.prototype.GlOBAL = Cart
const app = new Vue({
	App,
	Cart
})
app.$mount()
