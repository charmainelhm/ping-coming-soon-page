"use strict";

const form = document.querySelector("form");
const email = document.querySelector(".form__input");
const message = document.querySelector(".message");

const emailError = function () {
  email.classList.add("input--error");
  message.classList.remove("message--submitted");
  message.classList.add("message--error");
  if (email.validity.valueMissing) {
    message.textContent = "Whoops! It looks like you forgot to add your email";
  }
  if (email.validity.typeMismatch) {
    message.textContent = "Please provide a valid email address";
  }
};

const submitted = function () {
  email.classList.remove("input--error");
  email.value = "";
  message.classList.remove("message--error");
  message.classList.add("message--submitted");
  message.textContent = "Submitted!";
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  message.classList.add("message--visible");
  if (!email.validity.valid) {
    emailError();
  } else {
    submitted();
  }
});
