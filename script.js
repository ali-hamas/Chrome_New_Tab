// Year Names
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Day Names
const dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Selecting Clock ID's
let hourID = document.getElementById("hour"),
  minID = document.getElementById("min"),
  zoneID = document.getElementById("zone"),
  dayID = document.getElementById("day"),
  dateID = document.getElementById("date"),
  monthID = document.getElementById("month"),
  yearID = document.getElementById("year"),
  dayTimeID = document.getElementById("dayTime");

setInterval(() => {
  let a = new Date(),
    bHour = a.getHours(),
    hour = 0,
    bMin = a.getMinutes(),
    min = 0,
    bDay = a.getDay(),
    day = dayNames[bDay - 1],
    date = a.getDate(),
    bMonth = a.getMonth(),
    month = monthNames[bMonth - 1],
    year = a.getFullYear();

  //Hour format
  function hourFormat() {
    if (Radio12Hr.checked === true) {
      if (bHour === 0) {
        hour = 12;
      } else if (bHour > 12) {
        hour = bHour - 12;
      } else {
        hour = bHour;
      }
    } else if (Radio12Hr.checked === false) {
      if (bHour === 0) {
        hour = 12;
      } else {
        hour = bHour;
      }
    }
  }

  // Time Zone
  function timeZone() {
    if (Radio12Hr.checked === true) {
      if (bHour > 11) {
        zoneID.innerHTML = "PM";
      } else {
        zoneID.innerHTML = "AM";
      }
    } else if (Radio12Hr.checked === false) {
      zoneID.innerHTML = "";
    }
  }

  // Day Time
  function dayTime() {
    if (bHour >= 5 && bHour < 12) {
      dayTimeID.innerHTML = "Morning";
    } else if (bHour >= 12 && bHour < 16) {
      dayTimeID.innerHTML = "After Noon";
    } else if (bHour >= 16 && bHour < 21) {
      dayTimeID.innerHTML = "Evening";
    } else {
      dayTimeID.innerHTML = "Night";
    }
  }

  // Adding 0 to minutes
  function min0() {
    if (bMin < 10) {
      min = `0${bMin}`;
    } else {
      min = bMin;
    }
  }

  timeZone();
  hourFormat();
  dayTime();
  min0();

  // Printing Time
  hourID.innerHTML = hour;
  minID.innerHTML = min;
  dayID.innerHTML = day;
  dateID.innerHTML = date + ",";
  monthID.innerHTML = month;
  yearID.innerHTML = year;
}, 1000);

// Google Search Form
function searchGoogle(event) {
  event.preventDefault();
  var userInput = document.getElementById("search-input").value;
  var googleSearchUrl =
    "https://www.google.com/search?q=" + encodeURIComponent(userInput);
  window.location.href = googleSearchUrl;
}

// <--------------------------------  Setting  -------------------------------->

// Selecting ID's
let container = document.getElementById("container");
const settingBox = document.getElementById("setting-box");
const openSettingBtn = document.getElementById("open-setting");

// Open Setting
function openSetting() {
  openSettingBtn.style.display = "none";
  settingBox.style.width = "350px";
}

// Close Setting
function closeSetting() {
  settingBox.style.width = "0px";
  setTimeout(() => {
    openSettingBtn.style.display = "block";
  }, 300);
}

// Close Setting on Outside Click
window.onclick = function (event) {
  var clickInsideSetting = event.target.closest("#setting-box") !== null;
  var clickInsideOpenSettingBtn =
    event.target.closest("#open-setting") !== null;
  if (!clickInsideSetting && !clickInsideOpenSettingBtn) {
    closeSetting();
  }
};

// <--------------------------------  Wallpaper  Setting  -------------------------------->

// Container Dim
function containerDim() {
  let dimRange = document.getElementById("dim-range").value;
  let dimValue = document.getElementById("dim-value");
  container.style.backgroundColor = `rgba(0, 0, 0, ${dimRange})`;
  let roundedDimValue = Math.round(dimRange * 100);
  dimValue.innerHTML = `${roundedDimValue}%`;

  localStorage.setItem("dim", dimRange);
}

// Container Blur
function containerBlur() {
  let blurRange = document.getElementById("blur-range").value;
  let blurValue = document.getElementById("blur-value");
  container.style.backdropFilter = `blur(${blurRange}px)`;
  blurValue.innerHTML = `${blurRange}%`;

  localStorage.setItem("blur", blurRange);
}

// <--------------------------------  Time  Setting  -------------------------------->
let hourFormatSettingTile = document.getElementById("hour-format-settingTile");

// Time Container Visibility
let timeCheckbox = document.getElementById("time-checkbox"),
  timeContainer = document.getElementById("time-container");
function timeContVisibility() {
  const timeContHeight = timeCheckbox.checked ? "130px" : "0";
  const timeContPaddingTop = timeCheckbox.checked ? "20px" : "0";
  const timeContMarginBottom = timeCheckbox.checked ? "15px" : "0";
  // time format height(display), according to time checkbox
  const hourFormatHeight = timeCheckbox.checked ? "30px" : "0";

  timeContainer.style.height = timeContHeight;
  timeContainer.style.paddingTop = timeContPaddingTop;
  timeContainer.style.marginBottom = timeContMarginBottom;
  hourFormatSettingTile.style.height = hourFormatHeight;

  localStorage.setItem(
    "timeContVisibility",
    JSON.stringify({
      timeContHeight,
      timeContPaddingTop,
      timeContMarginBottom,
      hourFormatHeight,
      timeChecked: timeCheckbox.checked,
    })
  );
}
timeCheckbox.addEventListener("change", timeContVisibility);

// Time Format
let Radio12Hr = document.getElementById("radio-12hr");
let label12Hr = document.getElementById("label-12hr");
let label24Hr = document.getElementById("label-24hr");
function timeFormatRadio() {
  const hr12Background = Radio12Hr.checked ? "#f7a707" : "transparent";
  const hr24Background = Radio12Hr.checked ? "transparent" : "#f7a707";

  label12Hr.style.background = hr12Background;
  label24Hr.style.background = hr24Background;
}

// <--------------------------------  Message  Setting  -------------------------------->

// Message Container Visibility
let msgCheckbox = document.getElementById("msg-checkbox"),
  msgContainer = document.getElementById("msg-container");
function msgContVisibility() {
  const msgContHeight = msgCheckbox.checked ? "60px" : "0";
  const msgContMarginBottom = msgCheckbox.checked ? "15px" : "0";

  msgContainer.style.height = msgContHeight;
  msgContainer.style.marginBottom = msgContMarginBottom;

  localStorage.setItem(
    "msgContVisibility",
    JSON.stringify({
      msgContHeight,
      msgContMarginBottom,
      msgChecked: msgCheckbox.checked,
    })
  );
}
msgCheckbox.addEventListener("change", msgContVisibility);

// <--------------------------------  Search  Setting  -------------------------------->

// Search Container Visibility
let searchCheckbox = document.getElementById("search-checkbox"),
  searchContainer = document.getElementById("search-container");
function searchContVisibility() {
  const searchContHeight = searchCheckbox.checked ? "50px" : "0";
  const searchContMarginBottom = searchCheckbox.checked ? "15px" : "0";

  searchContainer.style.height = searchContHeight;
  searchContainer.style.marginBottom = searchContMarginBottom;

  localStorage.setItem(
    "searchContVisibility",
    JSON.stringify({
      searchContHeight,
      searchContMarginBottom,
      searchChecked: searchCheckbox.checked,
    })
  );
}
searchCheckbox.addEventListener("change", searchContVisibility);

// <--------------------------------  Shortcuts  Setting  -------------------------------->

// Shortcut Container Visibility
let shortcutCheckbox = document.getElementById("shortcut-checkbox"),
  shortcutContainer = document.getElementById("shortcut-container");
function shortcutContVisibility() {
  const shortcutContHeight = shortcutCheckbox.checked ? "200px" : "0";

  shortcutContainer.style.height = shortcutContHeight;

  localStorage.setItem(
    "shortcutContVisibility",
    JSON.stringify({
      shortcutContHeight,
      shortcutChecked: shortcutCheckbox.checked,
    })
  );
}
shortcutCheckbox.addEventListener("change", shortcutContVisibility);

// Border Radius
function hello(element) {
  element.style.borderRadius = "50%";
}
let z = document.querySelectorAll(".shortcut-icon");
z.forEach(hello);

// New Tab
function helloac(element) {
  element.setAttribute("target", "_blank");
}
let ac = document.querySelectorAll(".shortcut");
ac.forEach(helloac);
