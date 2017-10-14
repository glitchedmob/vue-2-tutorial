import Vue from 'vue';

import Coupon from './components/Coupon.vue';

new Vue({
	el: '#app',

	components: { Coupon },

	data:  {
		couponCode: 'COUPON-CODE'
	}
});
