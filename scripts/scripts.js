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
//syncing animation with real time (unsuccesfully)
//de bedoeling hier is dat de animaties net zoveel secondes duren als dat er secondes in de dag zitten, en als het bv. 10 uur is dat de animaties van de lucht etc. een animationDelay van -14 uur krijgen zodat ze beginnen op de positie van 10 uur. maar helaas zit het niet mee.
function myFunction(date) {
    var date = new Date();
    var time = date.getHours();
    
    if (time = 1) {
        document.getElementById("box").style.animationDelay = "-35s";
        document.getElementById("box2").style.animationDelay = "-23s";
        document.getElementById("sky").style.animationDelay = "-23s";
    } else if (time > 2) {
        document.getElementById("box").style.animationDelay = "-34s";
        document.getElementById("box2").style.animationDelay = "-22s";
        document.getElementById("sky").style.animationDelay = "-22s";
    } else if (time > 3) {
        document.getElementById("box").style.animationDelay = "-33s";
        document.getElementById("box2").style.animationDelay = "-21s";
        document.getElementById("sky").style.animationDelay = "-21s";
    } else if (time > 4) {
        document.getElementById("box").style.animationDelay = "-32s";
        document.getElementById("box2").style.animationDelay = "-20s";
        document.getElementById("sky").style.animationDelay = "-20s";
    } else if (time > 5) {
        document.getElementById("box").style.animationDelay = "-31s";
        document.getElementById("box2").style.animationDelay = "-19s";
        document.getElementById("sky").style.animationDelay = "-19s";
    } else if (time > 6) {
        document.getElementById("box").style.animationDelay = "-30s";
        document.getElementById("box2").style.animationDelay = "-18s";
        document.getElementById("sky").style.animationDelay = "-18s";
    } else if (time > 7) {
        document.getElementById("box").style.animationDelay = "-29s";
        document.getElementById("box2").style.animationDelay = "-17s";
        document.getElementById("sky").style.animationDelay = "-17s";
    } else if (time > 8) {
        document.getElementById("box").style.animationDelay = "-28s";
        document.getElementById("box2").style.animationDelay = "-16s";
        document.getElementById("sky").style.animationDelay = "-16s";
    } else if (time > 9) {
        document.getElementById("box").style.animationDelay = "-27s";
        document.getElementById("box2").style.animationDelay = "-15s";
        document.getElementById("sky").style.animationDelay = "-15s";
    } else if (time > 10) {
        document.getElementById("box").style.animationDelay = "-26s";
        document.getElementById("box2").style.animationDelay = "-14s";
        document.getElementById("sky").style.animationDelay = "-14s";
    } else if (time > 11) {
        document.getElementById("box").style.animationDelay = "-25s";
        document.getElementById("box2").style.animationDelay = "-13s";
        document.getElementById("sky").style.animationDelay = "-13s";
    } else if (time > 12) {
        document.getElementById("box").style.animationDelay = "-24s";
        document.getElementById("box2").style.animationDelay = "-12s";
        document.getElementById("sky").style.animationDelay = "-12s";
    } else if (time > 13) {
        document.getElementById("box").style.animationDelay = "-23s";
        document.getElementById("box2").style.animationDelay = "-11s";
        document.getElementById("sky").style.animationDelay = "-11s";
    } else if (time > 14) {
        document.getElementById("box").style.animationDelay = "-22s";
        document.getElementById("box2").style.animationDelay = "-10s";
        document.getElementById("sky").style.animationDelay = "-10s";
    } else if (time = 15) {
        document.getElementById("box").style.animationDelay = "-21s";
        document.getElementById("box2").style.animationDelay = "-9s";
        document.getElementById("sky").style.animationDelay = "-9s";
    } else if (time = 16) {
        document.getElementById("box").style.animationDelay = "-20s";
        document.getElementById("box2").style.animationDelay = "-8s";
        document.getElementById("sky").style.animationDelay = "-8s";
    } else if (time = 17) {
        document.getElementById("box").style.animationDelay = "-19s";
        document.getElementById("box2").style.animationDelay = "-7s";
        document.getElementById("sky").style.animationDelay = "-7s";
    } else if (time = 18) {
        document.getElementById("box").style.animationDelay = "-18s";
        document.getElementById("box2").style.animationDelay = "-6s";
        document.getElementById("sky").style.animationDelay = "-6s";
    } else if (time = 19) {
        document.getElementById("box").style.animationDelay = "-17s";
        document.getElementById("box2").style.animationDelay = "-5s";
        document.getElementById("sky").style.animationDelay = "-5s";
    } else if (time = 20) {
        document.getElementById("box").style.animationDelay = "-16s";
        document.getElementById("box2").style.animationDelay = "-4s";
        document.getElementById("sky").style.animationDelay = "-4s";
    } else if (time = 21) {
        document.getElementById("box").style.animationDelay = "-15s";
        document.getElementById("box2").style.animationDelay = "-3s";
        document.getElementById("sky").style.animationDelay = "-3s";
    } else if (time = 22) {
        document.getElementById("box").style.animationDelay = "-14s";
        document.getElementById("box2").style.animationDelay = "-2s";
        document.getElementById("sky").style.animationDelay = "-2s";
    } else if (time = 23) {
        document.getElementById("box").style.animationDelay = "-13s";
        document.getElementById("box2").style.animationDelay = "-1s";
        document.getElementById("sky").style.animationDelay = "-1s";
    }
    
    
//    else if (hours = 2)   {document.getElementById("box").style.animationDelay = "-22s";}
//    else if (hours = 3)   {document.getElementById("box").style.animationDelay = "-21s";}
//    else if (hours = 4)   {document.getElementById("box").style.animationDelay = "-20s";}
//    else if (hours = 5)   {document.getElementById("box").style.animationDelay = "-19s";}
//    else if (hours = 6)   {document.getElementById("box").style.animationDelay = "-18s";}
//    else if (hours = 7)   {document.getElementById("box").style.animationDelay = "-17s";}
//    else if (hours = 8)   {document.getElementById("box").style.animationDelay = "-16s";}
//    else if (hours = 9)   {document.getElementById("box").style.animationDelay = "-15s";}
//    else if (hours = 10)  {document.getElementsByClassName("animation").style.animationDelay = "-14s";}
//    else if (hours = 11)  {document.getElementById("box").style.animationDelay = "-13s";}
//    else if (hours = 12)  {document.getElementById("box").style.animationDelay = "-12s";}
//    else if (hours = 13)  {document.getElementById("box").style.animationDelay = "-11s";}
//    else if (hours = 14)  {document.getElementById("box").style.animationDelay = "-10s";}
//    else if (hours = 15)  {document.getElementById("box").style.animationDelay = "-9s";}
//    else if (hours = 16)  {document.getElementById("box").style.animationDelay = "-8s";}
//    else if (hours = 17)  {document.getElementById("box").style.animationDelay = "-7s";}
//    else if (hours = 18)  {document.getElementById("box").style.animationDelay = "-6s";}
//    else if (hours = 19)  {document.getElementById("box").style.animationDelay = "-5s";}
//    else if (hours = 20)  {document.getElementById("box").style.animationDelay = "-4s";}
//    else if (hours = 21)  {document.getElementById("box").style.animationDelay = "-3s";}
//    else if (hours = 22)  {document.getElementById("box").style.animationDelay = "-2s";}
//    else if (hours = 23)  {document.getElementById("box").style.animationDelay = "-1s";}
    
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