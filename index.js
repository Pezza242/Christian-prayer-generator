function generatePrayer(event) {
  event.preventDefault();
  new Typewriter("#answer-box", {
    strings:
      "God, thank you for everything. Help me to be a better person today.",
    autoStart: true,
    delay: 60,
  });
}

let prayerForm = document.querySelector("#prayer-form");
prayerForm.addEventListener("submit", generatePrayer);
