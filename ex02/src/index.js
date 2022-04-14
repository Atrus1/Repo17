//
const workDays =['MON', 'TUE', 'WED', 'THU', 'FRI'];

function myWeek(days) {
    var week = [...workDays, 'SAT', 'SUN'];
    return week;
 } //console.log(week);
 console.log(myWeek());


//
module.exports = myWeek;