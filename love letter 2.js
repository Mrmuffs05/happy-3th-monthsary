$(document).ready(function () {
  var envelope = $("#envelope");
  var openSound = new Audio("sounds/paper-4.mp3");
  var closeSound = new Audio("sounds/paper-5.mp3");

  envelope.click(function () {
    if (envelope.hasClass("open")) {
      close();
    } else {
      open();
    }
  });

  function open() {
    playSound(openSound);
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    playSound(closeSound);
    envelope.addClass("close").removeClass("open");
  }

  function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
  }
});
