/* Receipt Action Buttons */
const validateReceipt = document.getElementById("vbtn");

/* Receipt Data Components */
const ticketID = document.getElementById("txid");
const ticketDate = document.getElementById("date");
const ticketCafeteria = document.getElementById("cafe");
const ticketSpent = document.getElementById("cost");

// Initialize the iOS modal units
const cupertinoModal = document.getElementById("cupertinoModalMain");
const cupertinoDialog = document.getElementById("cupertinoDialog");
const cupertinoTitle = document.getElementById("cupertinoTitle");
const cupertinoContent = document.getElementById("cupertinoContent");
const cupertinoAlertBtn = document.getElementById("cupertinoModalBtn");

document.addEventListener("DOMContentLoaded", function () {
  useRef = localStorage.getItem("deesRef");
  useDate = localStorage.getItem("deesDate");
  useCafe = localStorage.getItem("deesCafe");
  useSpend = localStorage.getItem("deesSpend");

  ticketID.innerHTML = useRef;
  ticketDate.innerHTML = useDate;
  ticketCafeteria.innerHTML = useCafe;
  ticketSpent.innerHTML = "&#8358;" + useSpend;

  console.log("Receipt Data loaded successfully!");
});

function showHome() {
  const listItem = document.getElementById("success");
  const homeView = document.getElementById("home");
  listItem.remove();
  homeView.classList.remove("hidden");

  window.location.hash = "#home";

  setTimeout(function () {
    const finalListItem = document.getElementById("receipt");
    finalListItem.remove();
  }, 500);
}

function openiOSDialog() {
  const cupertinoModal = document.getElementById("cupertinoModalMain");
  const cupertinoDialog = document.getElementById("cupertinoDialog");

  cupertinoModal.classList.add("animate-fadeInBackground");
  cupertinoDialog.classList.add("animate-fadeIn");
  cupertinoModal.classList.remove("hidden");

  setTimeout(function () {
    cupertinoModal.classList.remove("animate-fadeInBackground");
    cupertinoDialog.classList.remove("animate-fadeIn");
  }, 1000);
}

function closeiOSDialog() {
  const cupertinoModal = document.getElementById("cupertinoModalMain");
  const cupertinoDialog = document.getElementById("cupertinoDialog");

  cupertinoModal.classList.add("animate-fadeOutBackground");
  cupertinoDialog.classList.add("animate-fadeOut");

  setTimeout(function () {
    cupertinoModal.classList.remove("animate-fadeOutBackground");
    cupertinoDialog.classList.remove("animate-fadeOut");
    cupertinoModal.classList.add("hidden");
  }, 100);
}

cupertinoAlertBtn.addEventListener("click", () => {
  closeiOSDialog();
  setTimeout(function () {
    showHome();
  }, 100);
});

function cupertinoSpinner() {
  var spinnerBase = document.createElement("div");
  spinnerBase.className = "ispinner";
  spinnerBase.id = "cspin";

  for (var i = 0; i < 8; i++) {
    var spinnerBlade = document.createElement("div");
    spinnerBlade.className = "ispinner-blade";
    spinnerBase.appendChild(spinnerBlade);
  }

  return spinnerBase;
}

function useSpinner() {
  let devicePlatform = localStorage.getItem("appPlatform");

  if (devicePlatform === "iOS") {
    return cupertinoSpinner();
  } else {
    useModalState("Error", "This feature is not supported!");
  }
}
function useModalState(title, content) {
  // Initialize necessary variables
  let devicePlatform = localStorage.getItem("appPlatform");

  if (devicePlatform === "iOS") {
    cupertinoTitle.innerHTML = title;
    cupertinoContent.innerHTML = content;
    openiOSDialog();
  } else if (devicePlatform === "AndroidOS") {
    materialTitle.innerHTML = title;
    materialContent.innerHTML = content;
    openAndroidDialog();
  } else {
    console.log("No modal to show!");
  }
}

validateReceipt.addEventListener("click", () => {
  validateReceipt.innerHTML = "";

  var handleSpinner = document.createElement("div");
  handleSpinner.className = "cupertino flex justify-center";

  handleSpinner.appendChild(useSpinner());
  validateReceipt.appendChild(handleSpinner);

  setTimeout(function () {
    useModalState("Success", "The transaction receipt is valid.");
    validateReceipt.innerHTML = "Validate";
  }, 1000);
});
