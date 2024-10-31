document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".burger");
  const navigation = document.querySelector(".header__navigation");

  burgerButton.addEventListener("click", function () {
    navigation.classList.toggle("header__navigation--active");
  });
});

const today = new Date();

const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);
document.getElementById(
  "author__date"
).textContent = `Published : ${yesterday.toLocaleDateString()}`;

const threeDaysAgo = new Date(today);
threeDaysAgo.setDate(today.getDate() - 3);
const elements = document.querySelectorAll(".three_days_ago");

elements.forEach((element) => {
  element.textContent = `${threeDaysAgo.toLocaleDateString()}`;
});

const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
document.getElementById(
  "tomorrow"
).textContent = `${tomorrow.toLocaleDateString()}`;
