import * as c from './constant-name'


export const actionCreateTitle = (title) => {
	return {
		type: c.CREATE_TITLE,
		title
	}
}

export const actionCreateHowGood = (howGood) => {
	return {
		type: c.CREATE_HOW_GOOD,
		howGood
	}
}

export const actionCreateHowBad = (howBad) => {
	return {
		type: c.CREATE_HOW_BAD,
		howBad
	}
}

export const actionNextStep = () => {
	return {
		type: c.NEXT_STEP
	}
}

export const actionAddRecord = () => {
	return {
		type: c.ADD_NEW_RECORD
	}
}

export const actionClearNewRecord = () => {
	return {
		type: c.CLEAR_NEW_RECORD
	}
}

export const actionThunkNextStep = () => {
	return (dispatch, getState) => {
		dispatch(actionNextStep())
		
		let state = getState();
		
		let {newRecord: currentRecord} = state;
		
		let {step: currentStep} = currentRecord;
		
		// Minus 1 bcs step start with 0
		if(currentStep == currentRecord.totalStep){
			// When all step done
			// Should make record
			dispatch(actionAddRecord())
			
			dispatch(actionClearNewRecord())
		}
		
		
	}
}

export const actionCreateNewRecord = () => {
	return {
		type: c.CREATE_NEW_RECORD
	}
}