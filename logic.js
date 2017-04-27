var courses = [
  { code: 'comp211', title: 'Database design', year: 2 },
  { code: 'comp212', title: 'Programming II', year: 2 },
  { code: 'comp213', title: 'Operating systems', year: 2 },
  { code: 'comp214', title: 'Computer networks', year: 2 },
  { code: 'math211', title: 'Statistics I', year: 2 },
  { code: 'meng211', title: 'English III', year: 2 },
  { code: 'meng311', title: 'English V', year: 3 },
  { code: 'comp311', title: 'Multimedia application development', year: 3 },
  { code: 'comp312', title: 'Internet programming II', year: 3 },
  { code: 'comp313', title: 'Project management', year: 3 },
  { code: 'comp314', title: 'Human factors and user interfaces', year: 3 }, 
  { code: 'comp315', title: 'Performance evaluation', year: 3 }
];

var lectures = [
  { code: 'comp211', dow: 2, start: 1000, end: 1130, room: 'A203' },
  { code: 'comp211', dow: 5, start: 1000, end: 1130, room: 'A318' },
  { code: 'comp212', dow: 2, start: 1430, end: 1600, room: 'A318' },
  { code: 'comp212', dow: 2, start: 1600, end: 1730, room: 'A205' },
  { code: 'comp213', dow: 2, start: 1130, end: 1300, room: 'A318' },
  { code: 'comp213', dow: 4, start: 1000, end: 1130, room: 'A318' },
  { code: 'comp214', dow: 1, start: 1000, end: 1130, room: 'A214' },
  { code: 'comp214', dow: 1, start: 1130, end: 1300, room: 'A214' },
  { code: 'math211', dow: 4, start: 1130, end: 1300, room: 'A317' },
  { code: 'math211', dow: 5, start: 1130, end: 1300, room: 'A317' },
  { code: 'meng211', dow: 1, start: 1430, end: 1630, room: 'A301' },
  { code: 'meng211', dow: 4, start: 1430, end: 1630, room: 'A301' },
  { code: 'comp311', dow: 4, start: 1000, end: 1130, room: 'A214' },
  { code: 'comp311', dow: 4, start: 1130, end: 1300, room: 'A214' },
  { code: 'comp312', dow: 4, start: 1430, end: 1600, room: 'A207' },
  { code: 'comp312', dow: 5, start: 1130, end: 1300, room: 'A206' },
  { code: 'comp313', dow: 2, start: 1130, end: 1300, room: 'A321' },
  { code: 'comp313', dow: 5, start: 1000, end: 1130, room: 'A317' },
  { code: 'comp314', dow: 1, start: 1000, end: 1130, room: 'A318' },
  { code: 'comp314', dow: 1, start: 1130, end: 1300, room: 'A318' },
  { code: 'comp315', dow: 1, start: 1430, end: 1600, room: 'A206' },
  { code: 'comp315', dow: 1, start: 1600, end: 1730, room: 'A206' },
  { code: 'meng311', dow: 2, start: 1430, end: 1630, room: 'A311' },
  { code: 'meng311', dow: 5, start: 1430, end: 1630, room: 'M315' }
];

function getLecturesForYearByCode(year) {
	var sortCode = new Array();
		for(var i = 0 ; i<  lectures.length ;i++){
			if(lectures[i].year==year) 
			sortCode.push(lectures[i]);}
	
				sortCode.sort(function orderByCodeAscending(a, b) {
    				if (a.code == b.code) {
       		 			return 0;
    					} else if (a.code > b.code) {
   	   		 				 return 1;
   				 			}
   					 			return -1;
								}
										)
									return sortCode;
														}


function getLecturesForYearByTime(year) {
	var sortTime = new Array();	
		for(var i = 0 ; i<  lectures.length ;i++){
			if(lectures[i].year==year) 
			sortTime.push(lectures[i]);}
				sortTime.sort(function (a, b) {
    				var adow = a.dow;
    				var bdow = b.dow;
    				var aStart = a.start;
    				var bStart = b.start;
  						  if(adow == bdow){        		
						  		return (aStart < bStart) ? -1 : (aStart > bStart) ? 1 : 0;    }
  					  					else    {        return (adow < bdow) ? -1 : 1;    }	
										}
											)
												return sortTime;
													}

						   
						   
function refreshView(){
		$("table#classlist tbody").remove();
		$('.eventTile').remove();
		var appear = new Array();
		var years=parseInt($('select[name = "year"]').val(),10);
		var sorted=$('input[name = "sortBy"]:checked').val();
			if(sorted == 'code')	{
				appear=getLecturesForYearByCode(years);
					for(var x = 0 ; x<appear.length ;x++){
						addCalTile(appear[x]);
							var $row = $("<tr><td>" + appear[x].code + "</td><td>" + appear[x].title + "</td><td>" + dayOfWeek(appear[x].dow) + "</td><td>" + appear[x].start +'-'+appear[x].end+ "</td><td>" + appear[x].room + "</td></tr>");
				$('table#classlist').append($row);



				if(appear[x].code=='comp311'||appear[x].code=='comp211') $('.eventTile div').eq(x).addClass('c1');
				else if(appear[x].code=='comp312'||appear[x].code=='comp212') $('.eventTile div').eq(x).addClass('c2');
				else if(appear[x].code=='comp313'||appear[x].code=='comp213') $('.eventTile div').eq(x).addClass('c3');	
				else if(appear[x].code=='comp314'||appear[x].code=='comp214') $('.eventTile div').eq(x).addClass('c4');	
				else if(appear[x].code=='comp315'||appear[x].code=='math211') $('.eventTile div').eq(x).addClass('c5');	
				else $('.eventTile div').eq(x).addClass('c6');				
					}
				}
			else if(sorted =='time')	{
				appear=getLecturesForYearByTime(years);
					for(var x = 0 ; x<appear.length ;x++){
						addCalTile(appear[x]);
							var $row = $("<tr><td>" + appear[x].code + "</td><td>" + appear[x].title + "</td><td>" + dayOfWeek(appear[x].dow) + "</td><td>" + appear[x].start +'-'+appear[x].end + "</td><td>" + appear[x].room + "</td></tr>");
								$('table#classlist').append($row);		
				
				if(appear[x].code=='comp311'||appear[x].code=='comp211') $('.eventTile div').eq(x).addClass('c1');
				else if(appear[x].code=='comp312'||appear[x].code=='comp212') $('.eventTile div').eq(x).addClass('c2');
				else if(appear[x].code=='comp313'||appear[x].code=='comp213') $('.eventTile div').eq(x).addClass('c3');	
				else if(appear[x].code=='comp314'||appear[x].code=='comp214') $('.eventTile div').eq(x).addClass('c4');	
				else if(appear[x].code=='comp315'||appear[x].code=='math211') $('.eventTile div').eq(x).addClass('c5');	
				else $('.eventTile div').eq(x).addClass('c6');
}			}

				
				}
								 


$(document).ready(function(){
				$('#refresh').click(refreshView);		   
						     })


function dayOfWeek(dow){
	if(dow==1)	return 'Mon';
	if(dow==2)	return 'Tue';
	if(dow==4)	return 'Thu';
	if(dow==5)	return 'Fri';
	}

function amendLectures(){
	for(var i = 0 ; i < courses.length ; i++){
		for(var j = 0 ; j < lectures.length ; j++){
			if(courses[i].code==lectures[j].code){
				lectures[j].year=courses[i].year;
				lectures[j].title=courses[i].title;
				}
			}
		}
	}

window.onload=function(){
	amendLectures();
	}

function addCalTile (lec) {
  
  var startLine = Math.floor((lec.start-900) / 100) * 2 + ((lec.start%100) ? 1 : 0) + 1;
  var s = Math.floor(lec.start / 100) * 2 + ((lec.start%100) ? 1 : 0);
  var e = Math.floor(lec.end / 100) * 2 + ((lec.end%100) ? 1 : 0);
  var cell = $('#calendar tbody').children().eq(startLine).children().eq(lec.dow);
  var cellHeight = cell.height();
  var cellWidth = cell.width();
  var tileSize = ((e-s) * (cellHeight+1) - 8);
  var newTile = $('<div class="eventTile">').css('width', cellWidth);
  var tileContent = $('<div>').html(lec.code+"<br/><br/>"+(lec.room)); 
  tileContent.css('height', tileSize+'px');
  tileContent.appendTo(newTile);
  newTile.appendTo($('div.calendar-container'));
  newTile.offset(cell.offset());
}

/* run this function in browser console to test the function addCalTile() */
function test() {
  addCalTile(lectures[0]);
  addCalTile(lectures[2]);
  addCalTile(lectures[4]);
}