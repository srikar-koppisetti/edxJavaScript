function todayTime(){
  var date = new Date();
  var day = date.getDay();
  var week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  document.getElementById('date').innerHTML = 'Today is : '+week[day];
  document.getElementById('time').innerHTML = 'Time is : '+hour+':'+minute+':'+second;

}

function clickHandler(name){
  alert('Hello! '+ name+' welcome to our website.');
}
/* To get firstName from textbox*/
document.getElementById('firstName').addEventListner('keypress', function(event){
  if(event.keyCode == 13){
    event.preventDefault();
  }
});
