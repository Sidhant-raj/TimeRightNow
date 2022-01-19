
// New Zealand / Antarctica / Kiribati / Samoa / Tokelau / Tonga  ---> UTC +13:00
var getNewZealandTime = function () {
    document.getElementById("time-NewZealand-Antarctica-Kiribati-Samoa-Tokelau-Tonga").innerHTML = new Date().toLocaleString("en-US", { timeZone: 'Pacific/Auckland', timeStyle: 'medium', hourCycle: 'h12' });
  }
  getNewZealandTime();
  setInterval(getNewZealandTime, 1000);