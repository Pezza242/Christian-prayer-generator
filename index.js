function generatePrayer(event) {
  event.preventDefault();
  new Typewriter("#prayer-answer", {
    strings:
      "God, thank you for everything. Help me to be a better person today.",
    autoStart: true,
    delay: 60,
  });
}

let prayerForm = document.querySelector("#prayer-form");
prayerForm.addEventListener("submit", generatePrayer);

new Typewriter("#prayer-answer", {
  strings:
    " Your prayer will appear here. <br/> God bless you on your prayer journey to become closer to God. x",
  autoStart: true,
  delay: 60,
});
