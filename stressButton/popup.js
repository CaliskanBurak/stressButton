document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.querySelector("button").addEventListener("click", onclick, false);

    function onclick() {
      let urlArray = [
        "https://www.youtube.com/watch?v=p5C41AFtAgA",
        "https://www.youtube.com/watch?v=cKqZ5mvHfF0",
        "https://www.youtube.com/watch?v=PgD56JEUWFA",
        "https://www.youtube.com/watch?v=tL8_I7S9siU",
        "https://www.youtube.com/watch?v=SB-qEYVdvXA",
        "https://www.youtube.com/watch?v=cgib0bCzUpg",
      ];
      let randomNumber = Math.floor(Math.random() * 5);

      let previous;
      previous = Math.floor(Math.random() * 5);
      if (previous === randomNumber) {
        previous = Math.floor(Math.random() * 5);
      }

      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        chrome.tabs.create({ url: urlArray[previous] }, function (tab) {
          chrome.tabs.executeScript(tab.id, { file: "popup.js" });
        });
      });
    }
  },
  false
);
