//import * as moment from 'moment';
const moment = require('moment')

/**
 * Find when should push notification
 * @param schedule has shape as below
 * schedule: {
	Monday:    [],
	Tuesday:   [],
	Wednesday: [],
	Thursday:  [],
	Friday:    [],
	Saturday:  [],
	Sunday:    [],
 }
 */
export default schedule => {
	let now = moment();

	let found     = false;
	let nextDay   = now.clone();
	let maxTryDay = now.clone().add(7, 'days');

	let whenPush;

	while(!found && nextDay.isBefore(maxTryDay)) {

		let dayOfWeek = nextDay.format('dddd');
		let timeList  = schedule[dayOfWeek];

		if(timeList && timeList.length > 0) {
			let dayTimeObj = timeList.map(timeVal => moment(`${dayOfWeek} ${timeVal}`, 'dddd HH:mm'));
			// Sort dayTimeObj before pop out
			// Which most near current
			dayTimeObj.sort((timeObjA, timeObjB) => {
				if(timeObjA.isBefore(timeObjB)){
					return -1;
				}

				if(timeObjA.isSame(timeObjB)){
					return 0;
				}

				return 1;
			});

			let foundTime  = dayTimeObj.filter(dayTimeObj => dayTimeObj.isAfter(now));

			if(foundTime.length > 0) {
				found = true;
				whenPush = foundTime[0];
			}
		}

		// Try on next one
		nextDay.add(1, 'days');
	}

	if(!whenPush) {
		// consider as push now
		// should do nothing
	}

	return whenPush;
}