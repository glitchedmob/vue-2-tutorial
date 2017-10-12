
Vue.component('tabs', {
	template: `<div>
	<div class="tabs">
		<ul>
			<li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
				<a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
			</li>
		</ul>
	</div>
	
	<div class="tabs-details">
		<slot></slot>
	</div>
</div>`,

	data() {
		return {
			tabs: [],
			selectedTab: null
		}
	},

	mounted() {
		this.tabs = this.$children;

		// Loop throgh tabs and cache the selected one.
		for(const tab of this.tabs) {
			console.log(tab.isActive);
			if(tab.isActive) {
				this.selectedTab = tab;
			}
		}

		// If there is not a predefined selected tab,
		// set the first one to be selected
		if(!this.selectedTab) {
			this.selectedTab = this.tabs[0];
			this.selectedTab.isActive = true;
		}
	},

	methods: {
		selectTab(clickedTab) {
			// unselect old tab and select clicked tab
			[this.selectedTab.isActive, clickedTab.isActive] = [false, true];
			this.selectedTab = clickedTab;
		},
	}
});

Vue.component('tab', {
	props: {
		name: { required: true },
		selected: { default: false }
	},

	template: `<div v-show="isActive ">
	<slot></slot>
</div>`,

	data() {
		return {
			isActive: false,
		}
	},

	computed: {
		href() {
			return '#' + this.name.toLowerCase().replace(/ /g, '-');
		}
	},

	mounted() {
		this.isActive = this.selected;
	}

});

new Vue({
	el: '#root',
})

