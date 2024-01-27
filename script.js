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
    min = 0;

  //Hour format
  function hourFormat() {
    if (Radio12Hr.checked) {
      bHour === 0
        ? (hour = 12)
        : bHour > 12
        ? (hour = bHour - 12)
        : (hour = bHour);
    } else {
      hour = bHour;
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
      dayTimeID.innerHTML = "Good Morning, ";
    } else if (bHour >= 12 && bHour < 16) {
      dayTimeID.innerHTML = "Good After Noon, ";
    } else if (bHour >= 16 && bHour < 21) {
      dayTimeID.innerHTML = "Good Evening, ";
    } else {
      dayTimeID.innerHTML = "Good Night, ";
    }
  }

  // Adding 0 to minutes
  function adding0() {
    bMin < 10 ? (min = `0${bMin}`) : (min = bMin);
    if (Radio24Hr.checked) {
      bHour < 10 ? (hour = `0${bHour}`) : (hour = bHour);
    }
  }

  hourFormat();
  timeZone();
  dayTime();
  adding0();

  // Printing Time
  hourID.innerHTML = hour;
  minID.innerHTML = min;
}, 1000);

// <--------------------------------  Setting  -------------------------------->

// Selecting ID's
let container = document.getElementById("container");
const settingBox = document.getElementById("setting-box");
const openSettingBtn = document.getElementById("open-setting");

// Open Setting
openSettingBtn.addEventListener("click", openSetting);

function openSetting() {
  openSettingBtn.style.display = "none";
  settingBox.style.width = "350px";
}

// Close Setting on Outside Click
window.onclick = function (event) {
  var clickInsideSetting = event.target.closest("#setting-box") !== null;
  var clickInsideOpenSettingBtn =
    event.target.closest("#open-setting") !== null;
  if (!clickInsideSetting && !clickInsideOpenSettingBtn) {
    settingBox.style.width = "0px";
    setTimeout(() => {
      openSettingBtn.style.display = "block";
    }, 300);
  }

  // Reset Box Visibility
  var clickInsideSureBox = event.target.closest("#sure-reset") !== null;
  if (!clickInsideSureBox && event.target !== resetBtn) {
    sureBox.style.height = "0px";
    sureBox.style.padding = "0px";
  }

  // Hide New Shortcut
  var clickInsideNewShortcutBox = event.target.closest("#add-shortcut-box");
  var clickInsideNewShortcutBtn = event.target.closest("#new-shortcut");
  if (!clickInsideNewShortcutBox && !clickInsideNewShortcutBtn) {
    newShortcutFormReset();
  }
};

// <--------------------------------  Wallpaper  Setting  -------------------------------->

// Container Dim
document.getElementById("dim-range").addEventListener("input", containerDim);
function containerDim() {
  let dimRange = document.getElementById("dim-range").value;
  let dimValue = document.getElementById("dim-value");
  container.style.backgroundColor = `rgba(0, 0, 0, ${dimRange})`;
  let roundedDimValue = Math.round(dimRange * 100);
  dimValue.innerHTML = `${roundedDimValue}%`;

  localStorage.setItem("dim", dimRange);
}
// Container Blur
document.getElementById("blur-range").addEventListener("input", containerBlur);
function containerBlur() {
  let blurRange = document.getElementById("blur-range").value;
  let blurValue = document.getElementById("blur-value");
  container.style.backdropFilter = `blur(${blurRange}px)`;
  roundedBlurValue = blurRange * 5;
  blurValue.innerHTML = `${roundedBlurValue}%`;

  localStorage.setItem("blur", blurRange);
}

// <--------------------------------  Time  Setting  -------------------------------->

// Time Container Display
let timeCheckbox = document.getElementById("time-checkbox"),
  timeContainer = document.getElementById("time-container");

timeCheckbox.addEventListener("change", timeContainerDisplay);
function timeContainerDisplay() {
  if (timeCheckbox.checked) {
    timeContainer.style.display = "flex";
    timeContainer.style.height = "130px";
    timeContainer.style.paddingTop = "20px";
    localStorage.setItem("timeDisplay", "show");
  } else {
    timeContainer.style.height = "0";
    timeContainer.style.paddingTop = "0";
    localStorage.setItem("timeDisplay", "hide");
  }
}

// Time Format
let Radio12Hr = document.getElementById("radio-12hr");
let Radio24Hr = document.getElementById("radio-24hr");

Radio12Hr.addEventListener("change", timeFormat);
Radio24Hr.addEventListener("change", timeFormat);
function timeFormat() {
  if (Radio24Hr.checked) {
    localStorage.setItem("timeFormat", Radio24Hr.checked);
  } else {
    localStorage.removeItem("timeFormat");
  }
}

// <--------------------------------  Message  Setting  -------------------------------->

// Message Container Display
let msgCheckbox = document.getElementById("msg-checkbox");
let msgContainer = document.getElementById("msg-container");

msgCheckbox.addEventListener("change", msgContainerDisplay);
function msgContainerDisplay() {
  if (msgCheckbox.checked) {
    msgContainer.style.display = "block";
    msgContainer.style.height = "60px";
    localStorage.setItem("msgDisplay", "show");
  } else {
    msgContainer.style.height = "0px";
    localStorage.setItem("msgDisplay", "hide");
  }
}

// Message Name
document.getElementById("name-input").value =
  document.getElementById("name").innerText;
document.getElementById("name-input").addEventListener("input", nameChange);
function nameChange() {
  let nameInput = document.getElementById("name-input").value;
  let name = document.getElementById("name");
  name.innerHTML = nameInput;

  localStorage.setItem("Name", nameInput);
}

// <--------------------------------  Search  Setting  -------------------------------->

// Search Container Display
let searchCheckbox = document.getElementById("search-checkbox");
let searchContainer = document.getElementById("search-container");

searchCheckbox.addEventListener("change", searchContainerDisplay);
function searchContainerDisplay() {
  if (searchCheckbox.checked) {
    searchContainer.style.display = "block";
    searchContainer.style.height = "50px";
    localStorage.setItem("searchDisplay", "show");
  } else {
    searchContainer.style.height = "0px";
    localStorage.setItem("searchDisplay", "hide");
  }
}

// Search Form
let searchForm = document.getElementById("search-form");
let googleRadio = document.getElementById("google-radio");
let bingRadio = document.getElementById("bing-radio");
let searchUrl;
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let searchInput = document.getElementById("search-input").value;
  if (googleRadio.checked) {
    searchUrl =
      "https://www.google.com/search?q=" + encodeURIComponent(searchInput);
  } else {
    searchUrl =
      "https://www.bing.com/search?q=" + encodeURIComponent(searchInput);
  }
  newTabSearchCheckbox.checked
    ? window.open(searchUrl, "_blank")
    : (window.location.href = searchUrl);
  document.getElementById("search-input").value = "";
});

// New Tab Search
let newTabSearchCheckbox = document.getElementById("newTab-search-checkbox");
newTabSearchCheckbox.addEventListener("change", newTabSearchFunction);
function newTabSearchFunction() {
  if (newTabSearchCheckbox.checked) {
    localStorage.setItem("newTabSearch", "true");
  } else {
    localStorage.removeItem("newTabSearch");
  }
}

// Search Logo Change
let googleLogo = document.getElementById("google-logo");
let bingLogo = document.getElementById("bing-logo");

googleRadio.addEventListener("change", searchLogoChange);
bingRadio.addEventListener("change", searchLogoChange);

function searchLogoChange() {
  if (bingRadio.checked) {
    bingLogo.style.display = "block";
    googleLogo.style.display = "none";
    localStorage.setItem("searchLogo", "bing");
  } else {
    bingLogo.style.display = "none";
    googleLogo.style.display = "block";
    localStorage.removeItem("searchLogo");
  }
}

// <--------------------------------  Shortcuts  Setting  -------------------------------->

// Shortcut Container Visibility
let shortcutCheckbox = document.getElementById("shortcut-checkbox");
let shortcutContainer = document.getElementById("shortcut-container");

shortcutCheckbox.addEventListener("change", shortcutContainerDisplay);
function shortcutContainerDisplay() {
  if (shortcutCheckbox.checked) {
    shortcutContainer.style.display = "grid";
    if (radio4x3.checked || radio5x3.checked || radio6x3.checked) {
      shortcutContainer.style.height = "300px";
    } else {
      shortcutContainer.style.height = "200px";
    }
    localStorage.setItem("shortcutDisplay", "show");
  } else {
    shortcutContainer.style.height = "0px";
    localStorage.setItem("shortcutDisplay", "hide");
  }
}

// Open shortcuts in new tab
let newTabShortcutCheckbox = document.getElementById("newTab-checkbox");

newTabShortcutCheckbox.addEventListener("change", newTabOpen);
function newTabOpen() {
  let shortcuts = document.querySelectorAll(".shortcut");

  function addNewTab() {
    shortcuts.forEach((element) => {
      element.setAttribute("target", "_blank");
    });
  }
  function removeNewTab() {
    shortcuts.forEach((element) => {
      element.removeAttribute("target");
    });
  }
  newTabShortcutCheckbox.checked ? addNewTab() : removeNewTab();

  if (newTabShortcutCheckbox.checked) {
    localStorage.setItem("newTabShortcut", newTabShortcutCheckbox.checked);
  } else {
    localStorage.removeItem("newTabShortcut");
  }
}

// Icon Corners
document.getElementById("icon-range").addEventListener("input", iconCorners);
function iconCorners() {
  let iconRange = document.getElementById("icon-range").value;
  let iconValue = document.getElementById("icon-value");
  let allIcons = document.querySelectorAll(".shortcut-icon");
  allIcons.forEach((element) => {
    element.style.borderRadius = `${iconRange}%`;
  });
  iconValue.innerHTML = `${iconRange}%`;
  if (iconRange < 50) {
    localStorage.setItem("iconCorners", iconRange);
  } else {
    localStorage.removeItem("iconCorners");
  }
}

// Shortcut Layout
let layoutRadios = document.querySelectorAll(".layout-radios");
let radio4x2 = document.getElementById("radio-4x2");
let radio5x2 = document.getElementById("radio-5x2");
let radio6x2 = document.getElementById("radio-6x2");
let radio4x3 = document.getElementById("radio-4x3");
let radio5x3 = document.getElementById("radio-5x3");
let radio6x3 = document.getElementById("radio-6x3");
layoutRadios.forEach((element) => {
  element.addEventListener("change", layoutFunction);
});
function layoutFunction() {
  if (radio4x2.checked) {
    shortcutContainer.style.gridTemplate = "repeat(2, 100px) / repeat(4, 1fr)";
    shortcutContainer.style.height = "200px";
    localStorage.setItem("shortcutLayout", "radio4x2.checked");
  } else if (radio6x2.checked) {
    shortcutContainer.style.gridTemplate = "repeat(2, 100px) / repeat(6, 1fr)";
    shortcutContainer.style.height = "200px";
    localStorage.setItem("shortcutLayout", "radio6x2.checked");
  } else if (radio4x3.checked) {
    shortcutContainer.style.gridTemplate = "repeat(3, 100px) / repeat(4, 1fr)";
    shortcutContainer.style.height = "300px";
    localStorage.setItem("shortcutLayout", "radio4x3.checked");
  } else if (radio5x3.checked) {
    shortcutContainer.style.gridTemplate = "repeat(3, 100px) / repeat(5, 1fr)";
    shortcutContainer.style.height = "300px";
    localStorage.setItem("shortcutLayout", "radio5x3.checked");
  } else if (radio6x3.checked) {
    shortcutContainer.style.gridTemplate = "repeat(3, 100px) / repeat(6, 1fr)";
    shortcutContainer.style.height = "300px";
    localStorage.setItem("shortcutLayout", "radio6x3.checked");
  } else {
    shortcutContainer.style.gridTemplate = "repeat(2, 100px) / repeat(5, 1fr)";
    shortcutContainer.style.height = "200px";
    localStorage.setItem("shortcutLayout", "radio5x2.checked");
  }
}

// // Show Delete Shortcuts on right click
// let shortcutDelete = document.querySelectorAll(".shortcut-delete");
// let shortcuts = document.querySelectorAll(".shortcut");
// shortcutContainer.addEventListener("contextmenu", function (event) {
//   event.preventDefault();
//   // Delete Shortcuts
//   shortcutDelete.forEach((element) => {
//     element.style.transform = "scale(1)";
//   });
//   // shortcuts
//   shortcuts.forEach((alpha) => {
//     alpha.style.animation = "rotate .4s linear infinite";
//     alpha.removeAttribute("href");
//     alpha.addEventListener("click", function (e) {
//       console.log(e.target);
//       event.preventDefault();
//       alpha.remove();
//     });
//   });
// });

// // Hide Delete Shortcuts on right click
// document.body.addEventListener("click", function (e) {
//   let clickInsideShortcutContainer = e.target.closest("#shortcut-container");
//   if (!clickInsideShortcutContainer) {
//     console.log("body clicked");
//     shortcutDelete.forEach((element) => {
//       element.style.transform = "scale(0)";
//     });
//     shortcuts.forEach((alpha) => {
//       alpha.style.animation = "none";
//       // alpha.setAttribute("href", "");
//       alpha.removeEventListener("click", () => {
//         console.log("remove");
//       });
//     });
//   }
// });

// Show New Shortcut box
let newShortcutBox = document.getElementById("add-shortcut-box");
let newShortcutBtn = document.getElementById("new-shortcut");
document.addEventListener("click", showNewShortcutBox);
function showNewShortcutBox(event) {
  newShortcutBox.style.width = "400px";
  container.style.backdropFilter = "blur(20px)";
  timeContainer.style.display = "none";
  msgContainer.style.display = "none";
  searchContainer.style.display = "none";
  shortcutContainer.style.display = "none";
  openSettingBtn.style.visibility = "hidden";
}

// Form Button disable
let formNameInput = document.getElementById("form-name-input");
let formUrlInput = document.getElementById("form-url-input");
let addFormBtn = document.getElementById("done-shortcut-btn");

formNameInput.addEventListener("input", formButtomValidation);
formUrlInput.addEventListener("input", formButtomValidation);
formUrlInput.addEventListener("input", httpValidation);
function formButtomValidation() {
  formNameInput.value.length > 0
    ? (addFormBtn.disabled = false)
    : (addFormBtn.disabled = true);
  formUrlInput.value.length > 0
    ? (addFormBtn.disabled = false)
    : (addFormBtn.disabled = true);
}
function httpValidation() {
  let formUrlValue = formUrlInput.value;
  if (formUrlValue.includes("https://") || formUrlValue.includes("http://")) {
    addFormBtn.disabled = false;
    document.querySelector(".http-error").style.display = "none";
  } else {
    addFormBtn.disabled = true;
    document.querySelector(".http-error").style.display = "block";
  }
}

// URL Icon Update
const previewImage = document.getElementById("preview-img");
let newShortcutIconUrl =
  "https://cdn-icons-png.flaticon.com/128/1006/1006771.png";
formUrlInput.addEventListener("input", function () {
  newShortcutIconUrl = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${formUrlInput.value}&size=256`;
  previewImage.src = newShortcutIconUrl;
});

// Add new shortcut
let addShortcutForm = document.querySelector(".add-shortcut-form");
let newShortcut;
addShortcutForm.addEventListener("submit", function (event) {
  event.preventDefault();
  newShortcut = document.createElement("a");
  newShortcutBtn.insertAdjacentElement("beforebegin", newShortcut);
  newShortcut.outerHTML = `<a href="${formUrlInput.value}" class="shortcut" draggable="true">
  <div class="shortcut-icon">
  <img src="${newShortcutIconUrl}">
  </div>
  <div class="shortcut-title">${formNameInput.value}</div>
  <img class="shortcut-delete" src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png" width="20px">
  </a>`;
  newShortcutFormReset();
  newTabOpen();
  iconCorners();
  shortcuts = document.querySelectorAll(".shortcut");
  shortcutDelete = document.querySelectorAll(".shortcut-delete");
});

// New Shortcut form reset
function newShortcutFormReset() {
  addShortcutForm.reset();
  addFormBtn.disabled = true;
  previewImage.src = "https://cdn-icons-png.flaticon.com/128/1006/1006771.png";
  newShortcutBox.style.width = "0px";
  timeContainer.style.display = "flex";
  msgContainer.style.display = "block";
  searchContainer.style.display = "block";
  shortcutContainer.style.display = "grid";
  openSettingBtn.style.visibility = "visible";
  containerBlur();
}

// <--------------------------------  General  Setting  -------------------------------->

function hoverOpen(event) {
  const cursorX = event.clientX;
  const cursorY = event.clientY;
  // console.log(`X = ${cursorX} and Y = ${cursorY}`);
  if (cursorX === 0 && cursorY > window.innerHeight - 100) {
    openSetting();
  } else if (cursorX === window.innerWidth - 1 && cursorY < 100) {
    openSetting();
  }
}

// Hot Corner Settings
let hotCornerCheckox = document.getElementById("hot-corners-checkbox");
hotCornerCheckox.addEventListener("change", hotCorner);
function hotCorner() {
  if (!hotCornerCheckox.checked) {
    document.removeEventListener("mousemove", hoverOpen);
  } else {
    document.addEventListener("mousemove", hoverOpen);
  }
  localStorage.setItem("hotCorner", hotCornerCheckox.checked);
}

// Setting Reset
let resetBtn = document.getElementById("reset-setting-btn");
let sureBox = document.getElementById("sure-reset");
let cancelBtn = document.getElementById("cancel-btn");
let okBtn = document.getElementById("ok-btn");
resetBtn.addEventListener("click", function () {
  sureBox.style.height = "125px";
  sureBox.style.padding = "15px";
});
function sureBoxHidden() {
  sureBox.style.height = "0px";
  sureBox.style.padding = "0px";
}
okBtn.addEventListener("click", function () {
  localStorage.clear();
  sureBoxHidden();
  location.reload();
});
cancelBtn.addEventListener("click", function () {
  sureBoxHidden();
});
