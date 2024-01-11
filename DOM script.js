document.addEventListener("DOMContentLoaded", function () {
  // Dim Container
  const savedDimValue = localStorage.getItem("dim");
  if (savedDimValue !== null) {
    document.getElementById("dim-range").value = savedDimValue;
    containerDim();
  }
  // Blur Container
  const savedBlurValue = localStorage.getItem("blur");
  if (savedBlurValue !== null) {
    document.getElementById("blur-range").value = savedBlurValue;
    containerBlur();
  }

  // <--------------------------------  Time  Setting  -------------------------------->

  // Time Container Display
  const savedTimeDisplay = localStorage.getItem("timeDisplay");
  if (savedTimeDisplay !== null) {
    if (savedTimeDisplay === "show") {
      timeCheckbox.checked = true;
      timeContainer.style.display = "flex";
    } else {
      timeCheckbox.checked = false;
      timeContainer.style.display = "none";
    }
  }

  // Time Format
  const savedTimeFormat = localStorage.getItem("timeFormat");
  if (savedTimeFormat !== null) {
    if (savedTimeFormat === "true") {
      Radio24Hr.checked = true;
    }
  }

  // <--------------------------------  Message  Setting  -------------------------------->

  // Message Container Display
  const savedMsgDisplay = localStorage.getItem("msgDisplay");
  if (savedMsgDisplay !== null) {
    if (savedMsgDisplay === "show") {
      msgCheckbox.checked = true;
      msgContainer.style.display = "block";
    } else {
      msgCheckbox.checked = false;
      msgContainer.style.display = "none";
    }
  }
  // Message Name
  const savedName = localStorage.getItem("Name");
  if (savedName !== null) {
    document.getElementById("name").innerHTML = savedName;
    document.getElementById("name-input").value = savedName;
  }

  // <--------------------------------  Search  Setting  -------------------------------->

  // Search Container Display
  const savedSearchDisplay = localStorage.getItem("searchDisplay");
  if (savedSearchDisplay !== null) {
    if (savedSearchDisplay === "show") {
      searchContainer.style.display = "block";
      searchCheckbox.checked = true;
    } else {
      searchContainer.style.display = "none";
      searchCheckbox.checked = false;
    }
  }

  // New Tab Search
  let savedNewTabSearch = localStorage.getItem("newTabSearch");
  if (savedNewTabSearch === "true") {
    newTabSearchCheckbox.checked = true;
  }

  // Search Logo
  let savedSearchLogo = localStorage.getItem("searchLogo");
  if (savedSearchLogo === "true") {
    bingRadio.checked = true;
    searchLogoChange();
  }

  // Shortcut Container Visibility
  const savedShortcutVisibility = localStorage.getItem(
    "shortcutContVisibility"
  );
  if (savedShortcutVisibility !== null) {
    const { shortcutContHeight, shortcutChecked } = JSON.parse(
      savedShortcutVisibility
    );
    shortcutContainer.style.height = shortcutContHeight;
    shortcutCheckbox.checked = shortcutChecked;
  }

  // New Tab Shortcuts
  let savednewTabShortcut = localStorage.getItem("newTabShortcut");
  if (savednewTabShortcut === "true") {
    newTabShortcutCheckbox.checked = true;
    newTabOpen();
  }

  // Icon Corners
  let savedIconCorners = localStorage.getItem("iconCorners");
  if (savedIconCorners !== null) {
    document.getElementById("icon-range").value = savedIconCorners;
    iconCorners();
  }
});

// Shortcut Layout
let savedShortcutLayout = localStorage.getItem("shortcutLayout");
if (savedShortcutLayout !== null) {
  if (savedShortcutLayout === "radio4x2.checked") {
    radio4x2.checked = true;
  } else if (savedShortcutLayout === "radio6x2.checked") {
    radio6x2.checked = true;
  } else if (savedShortcutLayout === "radio4x3.checked") {
    radio4x3.checked = true;
  } else if (savedShortcutLayout === "radio5x3.checked") {
    radio5x3.checked = true;
  } else if (savedShortcutLayout === "radio6x3.checked") {
    radio6x3.checked = true;
  } else {
    radio5x2.checked = true;
  }
  layoutFunction();
}
// Hot Corner
let savedHotCorner = localStorage.getItem("hotCorner");
if (savedHotCorner !== null) {
  if (savedHotCorner === "true") {
    document.getElementById("hot-corners-checkbox").checked = true;
    hotCorner();
  } else {
    document.getElementById("hot-corners-checkbox").checked = false;
  }
} else {
  hotCorner();
}
