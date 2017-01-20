import Vue from 'vue';


export const loadData = ({commit}) => {
	// Mock action to get the data.
	Vue.http.get('data.json')
		// Gives us a promise with the response. We are then parsing it to json
		.then(response => response.json())
		// The to json also returns a promise so we use then again.
		.then(data => {
			if (data) {
				const stocks = data.stocks;
				const funds = data.funds;
				const stockPortfolio = data.stockPortfolio;

				// Create an object that's the same as in the state.
				const portfolio = {
					stockPortfolio,
					funds
				};

				// Run the commits on the state to update the state with the
				// loaded data.
				commit('SET_STOCKS', stocks);
				commit('SET_PORTFOLIO', portfolio);
			}
		});
};