<template>
	<div>
		<!-- Pass the stock as a prop to this component with :stock -->
		<app-stock v-for="stock in stocks" :stock="stock"></app-stock>
	</div>
</template>

<script>
	
	import {mapGetters} from 'vuex';
	import Stock from './Stock.vue';

	export default {
		computed: {
			// This mapGetters using the spread-operator (3 dots) to import
			// som getters from my store. Here I map the stockPortfolio getter
			// locally to stocks in this object.
			...mapGetters({
				stocks: 'stockPortfolio'
			})
		},
		components: {
			// I have no naming conflict here with appStock in the other stocks
			// component because this is a local component.
			appStock: Stock
		}
	}

</script>