// India/Srilanka   ---> UTC +05:30
var getIndiaTime = function () {
  document.getElementById("time-India-Srilanka").innerHTML = new Date().toLocaleString("en-US", { timeZone: 'Asia/Kolkata', timeStyle: 'medium', hourCycle: 'h12' });
}
getIndiaTime();
setInterval(getIndiaTime, 1000);
