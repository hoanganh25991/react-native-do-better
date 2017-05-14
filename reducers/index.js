import * as c from '../actions/constant-name'

const demoState = {
	newRecord: {
		title: null,
		howGood: null,
		howBad: null,
		step: null,
		totalStep: 3,
	},
	
	records: [],
};


const rootReducer = (state = demoState, action) => {
	console.log('previous state', state);

	console.log('action', action);

	switch(action.type){
		case c.CREATE_NEW_RECORD:{
			let {newRecord: currentRecord} = state;

			let newRecord = Object.assign({}, currentRecord, {step: 0});

			return Object.assign({}, state, {newRecord});
		}
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
		case c.NEXT_STEP:{
			let {newRecord: currentRecord} = state;

			let {step: currentStep} = currentRecord;

			let step;

			if(currentStep == null){
				step = 0;
			}

			if(!isNaN(currentStep)){
				step = currentStep + 1;
			}

			let newRecord = Object.assign({}, currentRecord, {step});

			return Object.assign({}, state, {newRecord});
		}
		case c.ADD_NEW_RECORD:{
			let {newRecord} = state;

			let {records: currentRecords} = state;

			let records = [...currentRecords, newRecord];

			return Object.assign({}, state, {records});
		}
		case c.CLEAR_NEW_RECORD:{
			let newRecord = {
				title: null,
				howGood: null,
				howBad: null,
				step: null,
				totalStep: 3,
			}

			return Object.assign({}, state, {newRecord});
		}
		default:
			return state;
	}

	console.log('next state', '???');
}

export default rootReducer