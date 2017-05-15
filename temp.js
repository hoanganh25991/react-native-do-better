let moment = require('moment');

function xyz(schedule){
var now=moment();
var dayOfWeek=now.format('dddd');

var timeList=schedule[dayOfWeek];

var found=false;
var count=0;

var whenPush=void 0;

var nextDay=now;

while(!found&&count<7){

	if(!timeList){
		count++;
		return;
	}
var time=timeList.filter(function(timeVal){
var timeValObj=moment(dayOfWeek+' '+timeVal,'dddd HH:mm');


return timeValObj.isAfter(nextDay);
});

if(time.length>0){
found=true;
whenPush=time[0];
}



nextDay=now.clone().add(1,'days');
count++;
}

if(!whenPush){


}

console.log(whenPush);
};


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


