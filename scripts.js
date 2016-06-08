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
  var minute = addExtraZero(now.getUTCMinutes() - 1);
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
  //document.getElementById("iframe1").src='http://youtube.com/embed/' + array.items[0].id.videoId + '?autoplay=0';
  document.getElementById("video1").href='http://youtube.com/watch?v=' + array.items[0].id.videoId;
  document.getElementById("video2").href='http://youtube.com/watch?v=' +  array.items[1].id.videoId;
  document.getElementById("video3").href='http://youtube.com/watch?v=' + array.items[2].id.videoId;
  document.getElementById("video4").href='http://youtube.com/watch?v=' + array.items[3].id.videoId;
  document.getElementById("video5").href='http://youtube.com/watch?v=' + array.items[4].id.videoId;
  document.getElementById("title1").innerHTML = array.items[0].snippet.title + "<br>";
  document.getElementById("title2").innerHTML = array.items[1].snippet.title + "<br>";
  document.getElementById("title3").innerHTML = array.items[2].snippet.title + "<br>";
  document.getElementById("title4").innerHTML = array.items[3].snippet.title + "<br>";
  document.getElementById("title5").innerHTML = array.items[4].snippet.title + "<br>";
  document.getElementById("description1").innerHTML = array.items[0].snippet.description;
  document.getElementById("description2").innerHTML = array.items[1].snippet.description;
  document.getElementById("description3").innerHTML = array.items[2].snippet.description;
  document.getElementById("description4").innerHTML = array.items[3].snippet.description;
  document.getElementById("description5").innerHTML = array.items[4].snippet.description;
  document.getElementById("thumbnail1").src = array.items[0].snippet.thumbnails.default.url;
  document.getElementById("thumbnail2").src = array.items[1].snippet.thumbnails.default.url;
  document.getElementById("thumbnail3").src = array.items[2].snippet.thumbnails.default.url;
  document.getElementById("thumbnail4").src = array.items[3].snippet.thumbnails.default.url;
  document.getElementById("thumbnail5").src = array.items[4].snippet.thumbnails.default.url;

  //console.log(arr[0]);
}
