document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".burger");
  const navigation = document.querySelector(".header__navigation");

  burgerButton.addEventListener("click", function () {
    navigation.classList.toggle("header__navigation--active");
  });
});
