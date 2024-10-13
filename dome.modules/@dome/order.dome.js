/* Order Action Buttons */
const createReceipt = document.getElementById("waiterBtn");
const useShuffler = document.getElementById("shuffleBal");
const useEraser = document.getElementById("clrFormBtn");

/* Order Data Components */
const profileNameComponent = document.getElementById("profileName");
const balanceComponent = document.getElementById("customBal");
const restaurantComponent = document.getElementById("cafes");
const spendComponent = document.getElementById("cashbar");

// Initialize the iOS modal units
const cupertinoModal = document.getElementById("cupertinoModalMain");
const cupertinoDialog = document.getElementById("cupertinoDialog");
const cupertinoTitle = document.getElementById("cupertinoTitle");
const cupertinoContent = document.getElementById("cupertinoContent");
const cupertinoAlertBtn = document.getElementById("cupertinoModalBtn");

/* Object Definitions */
const shuffleRange = { min: 2000, max: 7000 };

/* Function Definitions */
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function generateRandom(min = 0, max = 100) {
  // find diff
  let difference = max - min;

  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;

  return rand;
}

function generateProfileInfo() {
  const getMatricNumber = () => {
    let matricYears = ["20", "21", "22", "23"];
    let matricYear = matricYears[generateRandom(0, matricYears.length)];
    let matricID = generateRandom(12000, 21000);

    let matricNumber = "LCU/UG/" + matricYear + "/" + matricID;
    return matricNumber;
  };

  const getMiddlename = () => {
    const middleNamesList = ["Alex", "Ashley", "Charlie", "Jessie", "Damilola"];
    return middleNamesList[generateRandom(0, middleNamesList.length)];
  };

  localStorage.setItem("usrMiddleName", getMiddlename());
  localStorage.setItem("usrMatricNo", getMatricNumber());
  localStorage.setItem("usrFundingDate", "");
}

const useOrderRef = () => {
  const prefix = "#663";
  const genRanHex = (size) =>
    [...Array(size)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("");

  let hexID = prefix + genRanHex(21);
  return hexID;
};

const useOrderDate = () => {
  state = new Date();

  let dt = state.toDateString();
  let date = dt;

  var hours = state.getHours();
  var minutes = state.getMinutes();
  var seconds = state.getSeconds();

  let hrs =
    hours.toString().length < 2 ? hours.toString().padStart(2, "0") : hours;
  let mins =
    minutes.toString().length < 2
      ? minutes.toString().padStart(2, "0")
      : minutes;
  let secs =
    seconds.toString().length < 2
      ? seconds.toString().padStart(2, "0")
      : seconds;

  let tm = hrs + ":" + mins + ":" + secs;
  var fyr = state.getFullYear();

  var dateTime = dt + " at " + tm;
  var dateTimeYear = date.substr(0, date.length - 4) + " " + tm + " " + fyr;

  return dateTime;

  /* document.getElementById('date').innerHTML = dateTime; // Receipt Date Format
    localStorage.setItem("currentSessionDate", dateTime);
    localStorage.setItem("currentDate", dateTimeYear); // TX Date Format */
};

function createTransaction(txRefID, txDateAtYear, txVenue, txAmount) {
  return {
    refID: txRefID,
    dateAtYear: txDateAtYear,
    venue: txVenue,
    amount: txAmount,
  };
}

function addTransaction(usrTransaction) {
  let useTXBase = JSON.parse(localStorage.getItem("transactionBase")) || [];
  if (useTXBase.length === 15) {
    useTXBase.pop();
  }
  useTXBase.unshift(usrTransaction);
  localStorage.setItem("transactionBase", JSON.stringify(useTXBase));
}

/* Event Listeners */
useShuffler.addEventListener("click", function () {
  const shuffleOutput =
    Math.ceil(
      Math.random() * (shuffleRange.max - shuffleRange.min) + shuffleRange.min
    ) + "0";
  balanceComponent.value = shuffleOutput;
});

useEraser.addEventListener("click", function () {
  profileNameComponent.value = "";
  balanceComponent.value = "";
  restaurantComponent.selectedIndex = 0;
  spendComponent.value = "";
});

createReceipt.addEventListener("click", function () {
  const userFullName = profileNameComponent.value;
  const userBalance = balanceComponent.value.trim();
  const userCafeteria = restaurantComponent.value;
  const userSpending = spendComponent.value.trim();

  if (!userFullName || !userBalance || !userCafeteria || !userSpending) {
    console.error("Error: All fields must have values before proceeding.");
    useModalState("Error", "Please ensure the order is complete!");
    return;
  }

  // Application definitions
  const spendReference = useOrderRef();
  const spendDateTime = useOrderDate();

  // Save Order Details
  localStorage.setItem("deesName", userFullName);
  localStorage.setItem("deesBalance", userBalance);
  localStorage.setItem("deesCafe", userCafeteria);
  localStorage.setItem("deesSpend", userSpending);
  localStorage.setItem("deesRef", spendReference);
  localStorage.setItem("deesDate", spendDateTime);

  // Profile Information
  let userProfileName = userFullName.split(" ");
  let userFirstName = userProfileName[0];
  let userLastName = userProfileName[1];

  const getEmail = () => {
    let emailName =
      userProfileName[0].substring(0, 1).toLowerCase() +
      userProfileName[1].toLowerCase() +
      "0" +
      generateRandom(0, 9);
    let emailAddress = emailName + "@gmail.com";

    return emailAddress;
  };

  localStorage.setItem("usrFirstName", userFirstName);
  localStorage.setItem("usrLastName", userLastName);
  localStorage.setItem("usrEmail", getEmail());
  generateProfileInfo();

  // Peform logging and routing operations
  addTransaction(
    createTransaction(
      spendReference,
      spendDateTime,
      userCafeteria,
      userSpending
    )
  );
  console.log("Receipt has been successfully generated!");
  window.location.href = "dome.routes/verify.html";
});

/* Modal Functions */
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
});

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
