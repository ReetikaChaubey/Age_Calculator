// script.js
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function CalculateAge() {
  if (!userInput.value) {
    result.innerHTML = "Please enter a valid date";
    return;
  }

  let birthDate = new Date(userInput.value);
  let today = new Date();

  let age = getAge(birthDate, today);
  result.innerHTML = `You are ${age.years} years, ${age.months} months, and ${age.days} days old`;
}

function getAge(birthDate, today) {
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (months < 0) {
    years--;
    months = 12 + months;
  }

  if (days < 0) {
    months--;
    days = getDaysInMonth(today.getFullYear(), today.getMonth()) + days;
  }

  return { years, months, days };
}

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}