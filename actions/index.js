import * as c from './constant-name'
import {whenPushBySchedule} from '../utils'
import {Notifications} from 'expo'
const moment = require('moment')


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

export const actionFirstTimeSchedulePushNotification = () => {
	return {
		type: c.FIRST_TIME_SCHEDULE_PUSH_NOTIFICATION
	}
}

export const actionCheckToSchedulePushNotification = () => {
	return {
		type: c.CHECK_TO_SCHEDULE_PUSH_NOTIFICATION
	}
}

export const actionPushNotification = () => {
	return {
		type: c.PUSH_NOTIFICATION
	}
}

export const actionUpdateScheduleTimeout = (scheduleTimeout) => {
	return {
		type: c.UPDATE_SCHEDULE_TIMEOUT,
		scheduleTimeout
	}
}

export const actionSchedulePushNotification = () => {
	return (dispatch, getState) => {

		// Define self loop schedule
		let scheduleLoop = () => {
			
			dispatch(actionCheckToSchedulePushNotification())
			
			let {schedule} = getState();;
			let whenPush   = whenPushBySchedule(schedule);

			if(whenPush){
				let scheduleTimeout = setTimeout(() => {
					
					dispatch(actionPushNotification())
					
					Notifications.presentLocalNotificationAsync({
						title: 'Here is a local notifiation!',
						body: 'This is the body',
						data: {
							hello: 'there',
						},
						ios: {
							sound: true,
							vibrate: true,
						},
						android: {
							sound: true,
							vibrate: true,
						},
					});

					// Loop schedule next time
					scheduleLoop();

				}, Number(whenPush.format('x')));

				dispatch(actionUpdateScheduleTimeout(scheduleTimeout))
			}
		}

		// First time run it
		dispatch(actionFirstTimeSchedulePushNotification())
		scheduleLoop();
	}
}

export const actionCheckToCkearScheduleTimeout = () => {
	return {
		type: c.CHECK_TO_CLEAR_SCHEDULE_TIMEOUT
	}
}

export const actionClearScheduleTimeout = () => {
	return {
		type: c.CLEAR_SCHEDULE_TIMEOUT
	}
}

export const actionReRunSchedulePushNotification = () => {
	return (dispatch, getState) => {
		// Clear the current schedule timeout
		// After it cleaned, self loop not invoke again
		let {scheduleTimeout} = getState();
		
		dispatch(actionCheckToCkearScheduleTimeout())
		
		if(scheduleTimeout){
			clearTimeout(scheduleTimeout);

			dispatch(actionClearScheduleTimeout());
		}
		
		// Run schedule push notification
		dispatch(actionSchedulePushNotification())
	}
}

export const actionUpdateSchedule = (schedule) => {
	return {
		type: c.UPDATE_SCHEDULE,
		schedule
	}
}

/**
 * This function update schedule
 * By create add new one 1 minutes later from now
 * @returns {function()}
 */
export const actionDebugPushNotification = () => {
	return (dispatch, getState) => {
		let {schedule: currentSchedule} = getState();
		// New schedule
		// Clone it from currentSchedule
		// Please dont modify on current state
		// Damn dangerous
		let schedule = Object.assign({}, currentSchedule);

		let now = moment();

		let dayOfWeek = now.format('dddd');

		let timeList;
		// timeList is a different arr, we try to update
		// Please be carefull, on modify state
		if(schedule[dayOfWeek]){
			timeList = [...schedule[dayOfWeek]];
		}else{
			timeList = [];
		}

		let twoMinutesLater = now.clone().add(1, 'minutes');
		
		// Ok add the new one
		timeList.push(twoMinutesLater.format('HH:mm'));
		
		// Update schedule
		schedule[dayOfWeek] = timeList;
		
		dispatch(actionUpdateSchedule(schedule));

		dispatch(actionReRunSchedulePushNotification())

	}
}