var url = "https://www.googleapis.com/youtube/v3/search/?part=snippet&q=the|and|to|of|a|I|in|was|he|that|it|his|her|you|as|had|with|for|she|not|at|but|be|my|on|have|him|is|said|me|which|by|so|tis|all|from|they|no|were|if|would|or|when|what|there|been|one|could|very|an|who|them|Mr|we|now|more|out|do|are|up|their|your|will|little|than|then|some|into|any|well|much|about|time|know|should|man|did|like|upon|such|never|only|good|how|before|other|see|must|am|own|come|down|say|after|think|made|might|being|Mrs|again&key=%20AIzaSyAIB1ZP8Ha0OgQlPx618BnRDgaWaMsSayw&order=date&publishedAfter=" + getFormattedDate();

function addExtraZero(number) {
  if(number < 10) {
    return '0' + number;
  } else {
    return number;
  }
}
console.log(getFormattedDate());

function getFormattedDate() {
  var now = new Date();
  var year = now.getUTCFullYear();
  var month = addExtraZero(now.getUTCMonth() + 1);
  var date = addExtraZero(now.getUTCDate());
  var hour = addExtraZero(now.getUTCHours());
  var minute = addExtraZero(now.getUTCMinutes());
  var formattedDate = year + '-' + month + '-' + date + 'T' + hour + ':' + minute + ':00.000Z';
  return formattedDate;
}

var xmlhttp = new XMLHttpRequest();
function handleServerResponse() {
  if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var myArr = JSON.parse(xmlhttp.responseText);
    console.log(myArr.items[0].id.videoId);
    buildPage(myArr);
  }
}

xmlhttp.open("GET",url,true);
xmlhttp.onreadystatechange = handleServerResponse;
xmlhttp.send();


function buildPage(array) {
  console.log('got here');
  document.getElementById("video1").href='http://youtube.com/watch?v=' + array.items[0].id.videoId;
  document.getElementById("video2").href='http://youtube.com/watch?v=' +  array.items[1].id.videoId;
  document.getElementById("video3").href='http://youtube.com/watch?v=' + array.items[2].id.videoId;
  document.getElementById("video4").href='http://youtube.com/watch?v=' + array.items[3].id.videoId;
  document.getElementById("video5").href='http://youtube.com/watch?v=' + array.items[4].id.videoId;
  //console.log(arr[0]);
}
