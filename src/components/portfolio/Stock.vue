<template>
	<div class="col-sm-6 col-md-4">
		<div class="panel panel-info">
			<div class="panel-heading">
				<h3 class="panel-title">
					{{ stock.name }}
					<small>(Price: {{ stock.price}} | {{ stock.quantity }})</small>
				</h3>
			</div>

			<div class="panel-body">
				<div class="pull-left">
					<input 
						type="number"
						class="form-control"
						placeholder="Quantity"
						v-model="quantity"
						:class="{danger: insufficientQuantity}"
						>
				</div>
				<div class="pull-right">
					<button
						class="btn btn-success"
						@click="sellStock"
						:disabled="insufficientQuantity ||quantity <= 0 || !Number.isInteger(quantity)"
					>{{ insufficientQuantity ? 'Not enough Stocks' : 'Sell' }}</button>
				</div>
			</div>

		</div>
	</div>
</template>

<script>

	import {mapActions} from 'vuex';

	export default {
		props: ['stock'],
		data() {
			return {
				quantity: 0
			};
		},
		computed: {
			insufficientQuantity() {
				// Can't sell more than we have in stock
				return this.quantity > this.stock.quantity;
			}
		},
		methods: {
			// Here I'm basically importing the action sellStock
			// from my store. I do this by the 3 dots ... , It's an array
			// so I can specify exactly what actions I want to import.
			...mapActions({
				'placeSellOrder': 'sellStock'
			}),
			sellStock() {
				const order = {
					stockId: this.stock.id,
					stockPrice: this.stock.price,
					quantity: this.quantity
				};

				// Call the methods we imported
				this.placeSellOrder(order);
				this.quantity = 0;
			}
		}
	}

</script>

<style scoped>
	.danger {
		border: 1px solid red;
	}
</style>