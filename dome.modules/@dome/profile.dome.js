const usrProfileName = document.getElementById("profile-user");
const usrMatricID = document.getElementById("profile-matric");
const dockFirstName = document.getElementById("usr_firstname");
const dockLastName = document.getElementById("usr_lastname");
const dockMiddleName = document.getElementById("usr_othername");
const dockEmail = document.getElementById("usr_email");
const dockNextDate = document.getElementById("usr_nextdate");

let firstName = localStorage.getItem("usrFirstName");
let lastName = localStorage.getItem("usrLastName");
let middleName = localStorage.getItem("usrMiddleName");
let matricNo = localStorage.getItem("usrMatricNo");
let email = localStorage.getItem("usrEmail");
let fundingDate = localStorage.getItem("usrFundingDate");

usrProfileName.innerHTML = firstName + " " + lastName;
usrMatricID.innerHTML = matricNo;
dockFirstName.value = firstName;
dockLastName.value = lastName;
dockMiddleName.value = middleName;
dockEmail.value = email;
dockNextDate.value = fundingDate;
