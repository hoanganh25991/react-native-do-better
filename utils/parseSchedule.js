const moment = require( 'moment');
/**
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


const xyz = schedule => {
	let now = moment();




	let found = false;
	let count = 0;

	let whenPush;

	let nextDay = now;

	while(!found && count < 7){
		let dayOfWeek = nextDay.format('dddd');

		let timeList = schedule[dayOfWeek];

		if(timeList && timeList.length > 0){
			let time = timeList.filter(timeVal => {
				let timeValObj = moment(`${dayOfWeek} ${timeVal}`, 'dddd HH:mm');

				//compare timeValObj with current
				return timeValObj.isAfter(nextDay);
			});

			if(time.length > 0){
				found = true;
				whenPush = time[0];
			}
		}

		// still not find out
		// try with next one
		nextDay = now.clone().add(1, 'days');
		count++;
	}

	if(!whenPush){
		// consider as push now
		// should do nothing
	}
}


let schedule =  {
	// Monday:    ['8:30', '10:20', '14:40', '16:30', '20:20'],
	// Tuesday:   ['8:30', '10:20', '14:40', '16:30', '20:20'],
	// Wednesday: ['8:30', '10:20', '14:40', '16:30', '20:20'],
	Thursday:  ['8:30', '10:20', '14:40', '16:30', '20:20'],
	Friday:    ['8:30', '10:20', '14:40', '16:30', '20:20'],
	Saturday:  ['8:30', '10:20', '14:40', '16:30', '20:20'],
	Sunday:    ['8:30', '10:20', '14:40', '16:30', '20:20'],
};

xyz(schedule);