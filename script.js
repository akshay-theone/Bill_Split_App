function split() {
  let heading = document.getElementById("heading");
  input = document.getElementById("input");
  amount = document.getElementById("amount");
  people = document.getElementById("people");
  splitBtn = document.getElementById("split-btn");
  splitBtn = (amount.value / people.value).toFixed(0);
  heading.innerText = "Rs " + splitBtn;
  amount.value = "";
  people.value = "";
}
