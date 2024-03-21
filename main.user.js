// ==UserScript==
// @name         Better Smartbite
// @namespace    http://tampermonkey.net/
// @version      2024-03-21
// @description  SmartBite is good, but it can be better
// @author       Frustrated MoneyLion Employee
// @match        https://canteen.trysmartbite.com/*
// @icon         https://canteen.trysmartbite.com/favicon.ico
// @grant        none
// ==/UserScript==

(function () {
  let last = 0;
  let url = document.location.href;

  window.addEventListener("load", function () {
    track();
  });

  navigation.addEventListener("navigate", (event) => {
    url = event.destination.url;
  });

  navigation.addEventListener("navigatesuccess", () => {
    if (url == "https://canteen.trysmartbite.com/restaurants") {
      track();
    }
  });

  function track() {
    let buttons = [];
    for (const button of document.getElementsByTagName("button")) {
      // days buttons has no id
      if (!button.id) {
        buttons.push(button);
      }
    }

    // first button is something else
    buttons = buttons.slice(1);

    // the magic happens here
    buttons[last].click();

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", () => {
        last = i;
      });
    }
  }
})();
