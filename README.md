# better-smartbite

SmartBite is good, but it can be better.

The script in this repo fixes navigation issue in SmartBite by remembering the most recently browsed day.
Now "Go back" actually means going back!

## Chrome Extension

To install this fix as a Chrome extension,
clone this repo or [download the zip](https://github.com/pcjun97/better-smartbite/archive/refs/tags/v1.0.0.zip)
and follow the instructions here:
https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked

(Works on Edge and Brave, too!)

## Tampermonkey

For user of tampermonkey, navigate to
https://raw.githubusercontent.com/pcjun97/better-smartbite/main/main.user.js
and install the userscript. Make sure to grant tampermonkey sufficient permission to access the site.

## Bookmarklet

This script can also be stored as a bookmarklet, which means it can work on mobile too.
Right click on this
[link](<javascript:(function%20()%20%7B%0Alet%20last%20%3D%200%3B%0Alet%20url%20%3D%20document.location.href%3B%0A%0Awindow.addEventListener(%22load%22%2C%20function%20()%20%7B%0Atrack()%3B%0A%7D)%3B%0A%0Anavigation.addEventListener(%22navigate%22%2C%20(event)%20%3D%3E%20%7B%0Aurl%20%3D%20event.destination.url%3B%0A%7D)%3B%0A%0Anavigation.addEventListener(%22navigatesuccess%22%2C%20()%20%3D%3E%20%7B%0Aif%20(url%20%3D%3D%20%22https%3A%2F%2Fcanteen.trysmartbite.com%2Frestaurants%22)%20%7B%0Atrack()%3B%0A%7D%0A%7D)%3B%0A%0Afunction%20track()%20%7B%0Alet%20buttons%20%3D%20%5B%5D%3B%0Afor%20(const%20button%20of%20document.getElementsByTagName(%22button%22))%20%7B%0Aif%20(!button.id)%20%7B%0Abuttons.push(button)%3B%0A%7D%0A%7D%0A%0Abuttons%20%3D%20buttons.slice(1)%3B%0A%0Abuttons%5Blast%5D.click()%3B%0A%0Afor%20(let%20i%20%3D%200%3B%20i%20%3C%20buttons.length%3B%20i%2B%2B)%20%7B%0Abuttons%5Bi%5D.addEventListener(%22click%22%2C%20()%20%3D%3E%20%7B%0Alast%20%3D%20i%3B%0A%7D)%3B%0A%7D%0A%7D%0A%7D)()B>)
and save it as a bookmark.
