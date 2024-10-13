const chowBalance = document.getElementById("chow-bal");

function addCommas(val) {
  x = parseInt(val);
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
document.addEventListener("DOMContentLoaded", function () {
  useChowBal = localStorage.getItem("deesBalance");
  formatChowBal = addCommas(useChowBal) + ".00";
  chowBalance.innerHTML = formatChowBal;
  console.log(formatChowBal);
});
