const state = {
	funds: 10000,
	stocks: []
};

// Mutations is to set the state.
const mutations = {
	// Use { } in a param like this is to pull out individual properties
	// from an object. So this is the order object that is the second param
	// and then we pull out these 3 properties as variables.
	'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
		// If you write an ES6 function like this on one line it will have an
		// implicit return statement. So same as return element.id == stockId
		const record = state.stocks.find(element => element.id == stockId);
		
		// If I already have the stock in my state (portfolio)
		if (record) {
			record.quantity += quantity;
		} else {
			state.stocks.push({
				id: stockId,
				quantity: quantity
			});
		}

		// Update Funds
		state.funds -= stockPrice * quantity;
	},
	'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
		// Get the stocks object by id
		const record = state.stocks.find(element => element.id == stockId);

		// If I have enough stocks so that I can sell
		if (record.quantity > quantity) {
			record.quantity -= quantity;
		} else {
			// Otherwise remove all of the stocks.
			state.stocks.splice(state.stocks.indexOf(record), 1);
		}

		// Update the funds
		state.funds += stockPrice * quantity;
	},
	'SET_PORTFOLIO'(state, portfolio) {
		state.funds = portfolio.funds;
		state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
	}
};

// Actions are to be able to do this async
const actions = {
	sellStock({commit}, order) {
		commit('SELL_STOCK', order);
	}
};

// Getters will get the values from the state.
const getters = {
	stockPortfolio(state, getters) {
		// This will be run for all elements in the array and map will transform
		// into what you want.
		return state.stocks.map(stock => {
			// The stocks getters in store/modules/stocks.js
			const record = getters.stocks.find(element => element.id == stock.id);
			// Transform elements to this
			return {
				id: stock.id,
				quantity: stock.quantity,
				name: record.name,
				price: record.price
			}
		});
	},
	funds(state) {
		// Just return the funds in the state
		return state.funds
	}
};

export default {
	state,
	mutations,
	actions,
	getters
}