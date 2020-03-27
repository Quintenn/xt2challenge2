//function animationSync(date) {
//    var time = [];
//    
//    time['seconds'] = date.getSeconds();
//	time['minutes'] = date.getMinutes();
//	time['hours']   = date.getHours();
//	time['month']   = date.getMonth();
//	time['day']     = date.getDay();
//    
//    if (time['day'] > 1) {
//		document.getElementById("wah").style.color = "white";
//	}
//}
//
//animationSync();


/**
 * Start clock
 */
function initClock() {

	// init
	renderClock();
    
	// run every second
	setInterval(renderClock, 1000);
}

/**
 * Render clock
 */
function renderClock() {

	// get HTML elements
	var clock = document.getElementById('time');
	var date  = document.getElementById('date');

	// time logic
	var time  = getCurrentTime(new Date());
	var sep   = flashSeperator(time['seconds']);

	// display date
    date.innerHTML = getCurrentMonth(time['month']) + ' ' +  time['day'];

	// display time
	clock.innerHTML = time['hours'] + sep +  time['minutes'];
}

/**
 * Flash seperator 
 * @param integer - seconds
 * @return string
 */
function flashSeperator(seconds) {
	var sepClass = '';

	// toggle class
	if (seconds % 2 === 1) {
		sepClass = ' class="trans"';
	}

	return '<span' + sepClass + '">:</span>';
}


/**
 * Parse the time
 * @param date object - current time 
 * @return date array
 */
function getCurrentTime(date) {
	var time = [];

	// fill array
	time['seconds'] = date.getSeconds();
	time['minutes'] = date.getMinutes();
	time['hours']   = date.getHours();
	time['month']   = date.getMonth();
	time['day']     = date.getDay();

	// hours: add leading zero
	if (time['hours'] < 10) {
		time['hours'] = '0' + time['hours'];
	}

	// minutes: add leading zero
	if (time['minutes'] < 10) {
		time['minutes'] = '0' + time['minutes'];
	}
    
//    if (time['day'] < 10) {
//		time['day'] = '0' + time['day'];
//        document.getElementsByClassName("box").style.animationDelay = "-10s";
//        
//	}
//    
       if (time['hours'] > 10) {
		time['hours'] = '0' + time['hours'];
	}
//    
    
//    if (time['day'] < 20) {
//		time['day'] = '0' + time['day'];
//        document.getElementById("wah").style.color = "purple";
//        
//	}
    
 
//     if (time['hours'] > 22) {
//		document.getElementsByClassName("box").style.animationDelay = "10s";
//	}

	return time;
}

/**
 * Get current Month
 * @param integer - month number
 * @return string
 */
function getCurrentMonth(monthNumber) {
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	return months[monthNumber];
}

function myFunction() {
    var date = new Date();
    var hours = date.getHours();
    
    if (hours > 1) {document.getElementById("box").style.animationDelay = "-5s";}
    
//  document.getElementById("box").style.animationDelay = "-5s";
}


//function animationSync(date) {
//    var time = [];
//    
//    time['seconds'] = date.getSeconds();
//	time['minutes'] = date.getMinutes();
//	time['hours']   = date.getHours();
//	time['month']   = date.getMonth();
//	time['day']     = date.getDay();
//    
//    if (time['hours'] > 1) {
//		document.getElementById("wah").style.color = "blue";
//	}
//}
//myFunction();
// start
initClock();