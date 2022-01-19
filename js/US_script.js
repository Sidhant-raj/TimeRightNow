 
// New Zealand / Antarctica / Kiribati / Samoa / Tokelau / Tonga  ---> UTC +13:00
var getUSFRCIAdakHonolulTime = function () {
    document.getElementById("time-US-FR-CI-Adak-Honolul").innerHTML = new Date().toLocaleString("en-US", { timeZone: 'Pacific/Honolulu', timeStyle: 'medium', hourCycle: 'h12' });
  }
  getUSFRCIAdakHonolulTime();
  setInterval(getUSFRCIAdakHonolulTime, 1000);