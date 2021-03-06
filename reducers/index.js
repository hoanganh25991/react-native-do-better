import * as c from '../actions/constant-name'

const demoState = {
	newRecord: {
		title: null,
		howGood: null,
		howBad: null,
		step: null,
		totalStep: 3,
		createdTimestamp: null,
		scheduledTimestamp: null,
	},
	
	records: [],
	schedule: {
		Monday:    ['8:30', '10:16', '14:40', '16:30', '20:20'],
		Tuesday:   ['8:30', '10:18', '14:40', '16:30', '20:20'],
		Wednesday: ['8:30', '10:20', '14:40', '16:30', '20:20'],
		Thursday:  ['8:30', '10:20', '14:40', '16:30', '20:20'],
		Friday:    ['8:30', '10:20', '14:40', '16:30', '20:20'],
		Saturday:  ['8:30', '10:20', '14:40', '16:30', '20:20'],
		Sunday:    ['8:30', '10:20', '14:40', '16:30', '20:20'],
	},
	scheduleTimeout: null,
};


const rootReducer = (state = demoState, action) => {
	switch(action.type){
		case c.CREATE_NEW_RECORD:{
			let newRecord = {
				title: null,
				howGood: null,
				howBad: null,
				step: 0,
				totalStep: 3,
				createdTimestamp: null,
				scheduledTimestamp: null,
			};

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
		// Handle schedule notification
		case c.UPDATE_SCHEDULE_TIMEOUT: {
			let {scheduleTimeout} = action;
			
			return Object.assign({}, state, {scheduleTimeout})
		}
		case c.CLEAR_SCHEDULE_TIMEOUT:{
			let scheduleTimeout = null;
			
			return Object.assign({}, state, {scheduleTimeout});
		}
		case c.UPDATE_SCHEDULE:{
			let {schedule} = action;
			
			return Object.assign({}, state, {schedule})
		}
		default:
			return state;
	}
}

export default rootReducer