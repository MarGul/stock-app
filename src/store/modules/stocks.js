import stocks from '../../data/stocks'

const state = {
	stocks: []
};

const mutations = {
	'SET_STOCKS' (state, stocks) {
		state.stocks = stocks;
	},
	'RND_STOCKS' (state) {
		state.stocks.forEach(stock => {
			// Put a new random price on all the stocks.
			stock.price = Math.round(stock.price * ( 1 + Math.random() - 0.5));
		});
	}
};

const actions = {
	buyStock: ({ commit }, order) => {
		// This commits a mutation in the Portfolio module. Because we are
		// importing these to the global state we can commit mutations in 
		// other modules. So that's why the mutations and everything in here
		// have to have unique names.
		commit('BUY_STOCK', order);
	},
	initStocks: ({commit}) => {
		commit('SET_STOCKS', stocks);
	},
	randomizeStocks: ({commit}) => {
		commit('RND_STOCKS');
	}
};

const getters = {
	stocks: state => {
		return state.stocks;
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}