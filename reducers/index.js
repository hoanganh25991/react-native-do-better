import * as c from '../actions/constant-name'

const demoState = {
	newRecord: {
		title: '',
		howGood: 0,
		howBad: 0,
	},
	
	records: [],
};


const rootReducer = (state = demoState, action) => {
	switch(action.type){
		case c.CREATE_TITLE: {
			let {newRecord: currentRecord} = state;
			
			let {title}   = action;
			let newRecord = Object.assign({}, currentRecord, {title});
			
			return Object.assign({}, state, {newRecord});
		}
		case c.CREATE_HOW_GOOD:{
			let {newRecord: currentRecord} = state;

			let {howGood}   = action;
			let newRecord = Object.assign({}, currentRecord, {howGood});

			return Object.assign({}, state, {newRecord});
		}
		case c.CREATE_HOW_BAD:{
			let {newRecord: currentRecord} = state;

			let {howBad}   = action;
			let newRecord = Object.assign({}, currentRecord, {howBad});

			return Object.assign({}, state, {newRecord});
		}
		default:
			return state;
	}
}

export default rootReducer