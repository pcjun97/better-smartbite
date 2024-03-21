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
  window.addEventListener("load", function () {
    track();
  });

  navigation.addEventListener("navigate", (event) => {
    url = event.destination.url;
  });

  navigation.addEventListener("navigatesuccess", () => {
    if (url === "https://canteen.trysmartbite.com/restaurants") {
      clickTheLast();
      track();
    }
  });

  let last = null;
  let url = document.location.href;

  function track() {
    const buttons = getDaysButtons();

    let i = 0;
    for (const button of buttons) {
      const j = i;
      button.addEventListener("click", () => {
        last = j;
      });
      i++;
    }
  }

  function clickTheLast() {
    const buttons = getDaysButtons();
    buttons[last].click();
  }

  function getDaysButtons() {
    const buttons = document.getElementsByTagName("button");

    let daysButtons = [];
    for (const button of buttons) {
      if (!button.id) {
        daysButtons.push(button);
      }
    }
    daysButtons = daysButtons.slice(1);

    return daysButtons;
  }
})();
