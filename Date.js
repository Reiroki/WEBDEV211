function current_time() {
var x = new Date()
var x1=x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
document.getElementById('time').innerHTML = x1;
display_time();
 }
 function display_time(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('current_time()',refresh)
}
display_time()