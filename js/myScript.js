function saveTextValue(){
  var textValue = document.getElementsByName('position')[0].value;
  saveToCookie('position',textValue,showTextSuccess);
}

function showTextSuccess(result){
  window.alert('You successfully saved '+ result+' from text input to cookie');
}

function saveToCookie(key, value, onCompletion){
  var cookieValue = key+';'+value;
  document.cookie += cookieValue;
  onCompletion(cookieValue);
}


function saveRadioValue(){
  var radioValue;
  var buttonValue = document.getElementsByName('department');
  for(var i=0; i< buttonValue.length; i++){
    if(buttonValue[i].checked){
      radioValue = buttonValue[i].value;
      break;
    }
  }
  saveToCookie('department',radioValue,function (result){ window.alert('your radio value '+result+' is saved')});
}
